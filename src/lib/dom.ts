import { $subscribe, isSignal, Signal } from "./signal"

export type HTMLElementDecorator = (element: HTMLElement) => void
export type ChildrenDecorator = (...children: (HTMLElementChild | Signal<any>)[]) => HTMLElement
type HTMLElementChild = HTMLElement | string | number
export type HTMLProps = HTMLElementDecorator[]

const decorate = (element: HTMLElement, ...decorators: HTMLProps) => {
	for (const decorator of decorators) {
		decorator(element)
	}
}

const injectSignalContent = <T>(signal: Signal<T>) => {
	const value = signal.get()

	switch (typeof value) {
		case "string":
		case "number":
			const node = $text(String(value))
			$subscribe(signal, value => (node.textContent = String(value)))
			return node
		default:
			throw Error("Rawtor: Bad signal type")
	}
}

const addChildren = (
	element: HTMLElement,
	...children: (HTMLElementChild | Signal<any>)[]
): HTMLElement => {
	for (const child of children) {
		let possiblyInjected: Signal<any> | HTMLElementChild | Node = child

		if (isSignal(child)) {
			possiblyInjected = injectSignalContent(child as Signal<any>)
		}

		switch (typeof child) {
			case "string":
			case "number":
				element.appendChild(document.createTextNode(String(possiblyInjected)))
				break
			default:
				element.appendChild(possiblyInjected as HTMLElement)
				break
		}
	}

	return element
}

export const $attribute =
	(key: string, value?: string): HTMLElementDecorator =>
	element =>
		element.setAttribute(key, value ?? "")

export const $event =
	(
		name: keyof HTMLElementEventMap,
		handler: (event: Event) => void
	): HTMLElementDecorator =>
	element =>
		element.addEventListener(name, handler)

export const $element = (
	tag: string,
	...decorators: HTMLElementDecorator[]
): ChildrenDecorator => {
	const element = document.createElement(tag)

	decorate(element, ...decorators)

	return (...children: (HTMLElementChild | Signal<any>)[]) =>
		addChildren(element, ...children)
}

export const $text = (value: string) => document.createTextNode(value)
