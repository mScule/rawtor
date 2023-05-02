import { button, td, tr } from "../../lib/elements"
import { typed } from "../../lib/component"
import { event } from "../../lib/dom"
import { Employee } from "./model"

interface Props extends Employee {
	handleRemoval: () => void
}

export default typed.leaf<Props>(({ name, title, salary, handleRemoval }) =>
	tr()(
		td()(name),
		td()(title),
		td()(salary),
		button(event("click", handleRemoval))("Fire!")
	)
)
