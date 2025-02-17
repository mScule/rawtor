import { $div } from "./elements"
import { $get, $subscribe, Signal } from "./signal"

type CheckTuple<T> = [T, HTMLElement]

export const $switch = <T>(signal: Signal<T>) => (...checks: CheckTuple<T>[]) => {
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

export const $map = <T>(
	signal: Signal<T[]>,
	handler: (value: T, index: number) => HTMLElement
) => {
	let element = $div()()

	const execute = (values: T[]) =>
		element.replaceChildren(
			...values.map((value, index) => handler(value, index))
		)

	$subscribe(signal, values => execute(values))

	return element
}

export const $if = (signal: Signal<boolean>) => ({
	then: (then: HTMLElement) => {
		const execute = (value: boolean) => {
			if (value) {
				return then
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
})
