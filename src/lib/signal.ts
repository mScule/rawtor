import { HTMLElementDecorator } from "./dom"
import { isRawtorObject, RawtorObject, RawtorObjectType } from "./object"

export type SignalSubscriber<T> = (value: T) => void

export type Signal<T> = RawtorObject<RawtorObjectType.Signal> & {
	get: () => T
	set: (value: T) => void
	subscribe: (subscriber: SignalSubscriber<T>) => void
	refresh: () => void
}

export const isSignal = (value: any) =>
	isRawtorObject(value, RawtorObjectType.Signal)
export const $signal = <T>(value: T): Signal<T> => {
	let _subscribers: SignalSubscriber<T>[] = []
	let _value: T = value

	const refresh = () => {
		for (const subscriber of _subscribers) {
			subscriber(value)
		}
	}
	const get = () => _value
	const set = (value: T) => {
		_value = value
		refresh()
	}
	const subscribe = (subscriber: SignalSubscriber<T>) =>
		_subscribers.push(subscriber)

	return {
		type: RawtorObjectType.Signal,
		get,
		set,
		subscribe,
		refresh
	}
}

// Signal core API

export const $get = <T>(signal: Signal<T>) => signal.get()
export const $set = <T>(signal: Signal<T>, value: T) => signal.set(value)
export const $update = <T>(signal: Signal<T>, updater: (value: T) => T) =>
	signal.set(updater(signal.get()))
export const $subscribe = <T>(
	signal: Signal<T>,
	subscriber: SignalSubscriber<T>
) => signal.subscribe(subscriber)
export const $refresh = <T>(signal: Signal<T>) => signal.refresh()

// Signal array API

export const $push = <T>(signal: Signal<T[]>, item: T) => {
	$get(signal).push(item)
	$refresh(signal)
}
export const $getItem = <T>(signal: Signal<T[]>, index: number) => {
	return $get(signal)[index]
}
export const $setItem = <T>(signal: Signal<T[]>, index: number, value: T) => {
	$get(signal)[index] = value
	$refresh(signal)
}
export const $updateItem = <T>(
	signal: Signal<T[]>,
	index: number,
	updater: (value: T) => T
) => {
	$get(signal)[index] = updater($get(signal)[index])
	$refresh(signal)
}
export const $remove = <T>(signal: Signal<T[]>, index: number) => {
	$get(signal).splice(index, 1)
	$refresh(signal)
}

// Signal field API

export const $bind =
	(signal: Signal<string>): HTMLElementDecorator =>
	element => {
		element.addEventListener("change", () =>
			$set(signal, (element as HTMLInputElement).value)
		)
		$subscribe(
			signal,
			value => ((element as HTMLInputElement).value = value)
		)
	}
