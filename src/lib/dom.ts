type HTMLElementDecorator = (element: HTMLElement) => void
export type ChildrenDecorator = (...children: HTMLElementChild[]) => HTMLElement
type HTMLElementChild = HTMLElement | string | number
export type HTMLProps = HTMLElementDecorator[]

export const decorate = (element: HTMLElement, ...decorators: HTMLProps) => {
	for (const decorator of decorators) {
		decorator(element)
	}
}

const addChildren = (
	element: HTMLElement,
	...children: HTMLElementChild[]
): HTMLElement => {
	for (const child of children) {
		switch (typeof child) {
			case "string":
				element.appendChild(document.createTextNode(child))
				break
			case "number":
				element.appendChild(document.createTextNode(child + ""))
				break
			default:
				element.appendChild(child)
				break
		}
	}

	return element
}

export const attribute =
	(key: string, value?: string): HTMLElementDecorator =>
	element =>
		element.setAttribute(key, value ?? "")

export const event =
	(
		name: keyof HTMLElementEventMap,
		handler: (event: Event) => void
	): HTMLElementDecorator =>
	element =>
		element.addEventListener(name, handler)

export const element = (
	tag: string,
	...decorators: HTMLElementDecorator[]
): ChildrenDecorator => {
	const element = document.createElement(tag)

	decorate(element, ...decorators)

	return (...children: HTMLElementChild[]) =>
		addChildren(element, ...children)
}

export const observable = <T>(value: T) => {
	let data = value

	const observers: (() => void)[] = []

	const observe = (handler: () => void) => {
		handler()
		observers.push(handler)
	}

	const get = () => data as T
	const set = (value: T) => (data = value)
	const update = (handler: (current: T) => T) => {
		const current: T = get()
		set(handler(current))
	}

	const updateHooked = () => {
		for (const observer of observers) {
			observer()
		}
	}

	return {
		get,
		set: (value: T) => {
			set(value)
			updateHooked()
		},
		update: (handler: (current: T) => T) => {
			update(handler)
			updateHooked()
		},
		observe
	}
}

export const main = (id: string, root: HTMLElement) => {
	const element = document.querySelector(`#${id}`)

	if (!element) {
		throw new Error(`Seuraus: Element with id ${id} not found`)
	}

	element.appendChild(root)
}
