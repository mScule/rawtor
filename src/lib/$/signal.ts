import { isRawtorObject, RawtorObject, RawtorObjectType } from "../object"

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
