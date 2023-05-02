import { ChildrenDecorator, HTMLProps } from "./dom"
import { decorate } from "./dom"

const defineTyped = <T>(
	component: (props: T) => HTMLElement
): ((
	props: T,
	...decorators: HTMLProps
) => HTMLElement | ChildrenDecorator) => {
	return (props: T, ...decorators: HTMLProps) => {
		const instance = component(props)

		decorate(instance, ...decorators)

		return instance
	}
}

const defineTypeless = (
	component: () => HTMLElement
): ((...decorators: HTMLProps) => HTMLElement | ChildrenDecorator) => {
	return (...decorators: HTMLProps) => {
		const instance = component()

		decorate(instance, ...decorators)

		return instance
	}
}

export const typed = {
	leaf: <T>(
		component: (props: T) => HTMLElement
	): ((props: T, ...decorators: HTMLProps) => HTMLElement) => {
		return defineTyped(component) as (
			props: T,
			...decorators: HTMLProps
		) => HTMLElement
	},
	parent: <T>(
		component: (props: T) => HTMLElement
	): ((props: T, ...decorators: HTMLProps) => ChildrenDecorator) => {
		return defineTyped(component) as (
			props: T,
			...decorators: HTMLProps
		) => ChildrenDecorator
	}
}

export const typeless = {
	leaf: (
		component: () => HTMLElement
	): ((...decorators: HTMLProps) => HTMLElement) => {
		return defineTypeless(component) as (
			...decorators: HTMLProps
		) => HTMLElement
	},
	parent: (
		component: () => HTMLElement
	): ((...decorators: HTMLProps) => ChildrenDecorator) => {
		return defineTypeless(component) as (
			...decorators: HTMLProps
		) => ChildrenDecorator
	}
}
