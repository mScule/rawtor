import { $div } from "./elements"
import { $get, $subscribe, Signal } from "./signal"

type CheckTuple<T> = [T, HTMLElement]

export const $match = <T>(signal: Signal<T>, ...checks: CheckTuple<T>[]) => {
	const execute = (value: T) => {
		for (const [matchable, then] of checks) {
			if (value === matchable) {
				return then
			}
		}

		return $div()()
	}

	let element = execute($get(signal))

	$subscribe(signal, value => {
		let updated = execute(value)
		element?.replaceWith(updated)
		element = updated
	})

	return element
}

export const $case = <T>(value: T, then: HTMLElement): CheckTuple<T> => [
	value,
	then
]
