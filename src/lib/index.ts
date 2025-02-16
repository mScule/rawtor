export default (id: string, root: HTMLElement) => {
	const element = document.querySelector(`#${id}`)

	if (!element) {
		throw new Error(`Rawtor: Element with id ${id} not found`)
	}

	element.appendChild(root)
}
