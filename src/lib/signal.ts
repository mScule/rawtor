import { HTMLElementDecorator } from "./dom"
import { isRawtorObject, RawtorObject, RawtorObjectType } from "./object"

export type SignalSubscriber<T> = (value: T) => void

export type Signal<T> = RawtorObject<RawtorObjectType.Signal> & {
	get: () => T
	set: (value: T) => void
	subscribe: (subscriber: SignalSubscriber<T>) => void
}

export const isSignal = (value: any) =>
	isRawtorObject(value, RawtorObjectType.Signal)

export const $signal = <T>(value: T): Signal<T> => {
	let _subscribers: SignalSubscriber<T>[] = []
	let _value: T = value

	const get = () => _value
	const set = (value: T) => {
		_value = value

		for (const subscriber of _subscribers) {
			subscriber(value)
		}
	}
	const subscribe = (subscriber: SignalSubscriber<T>) =>
		_subscribers.push(subscriber)

	return {
		type: RawtorObjectType.Signal,

		get,
		set,
		subscribe
	}
}

export const $get = <T>(signal: Signal<T>) => signal.get()
export const $set = <T>(signal: Signal<T>, value: T) => signal.set(value)
export const $update = <T>(signal: Signal<T>, updater: (value: T) => T) =>
	signal.set(updater(signal.get()))
export const $subscribe = <T>(
	signal: Signal<T>,
	subscriber: SignalSubscriber<T>
) => signal.subscribe(subscriber)

export const $push = <T>(signal: Signal<T[]>, item: T) => {
	$get(signal).push(item)
	$set(signal, $get(signal))
}

export const $remove = <T>(signal: Signal<T[]>, index: number) => {
	$get(signal).splice(index, 1)
	$set(signal, $get(signal))
}

export const $bind =
	(signal: Signal<string>): HTMLElementDecorator =>
	element => {
		element.addEventListener("change", () =>
			$set(signal, (element as HTMLInputElement).value)
		)
		$subscribe(signal, value => {
			;(element as HTMLInputElement).value = value
			console.log(value)
		})
	}
