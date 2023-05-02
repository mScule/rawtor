import { typed } from "../../lib/component"
import { attribute, event } from "../../lib/dom"
import { option, submit } from "../../lib/elements"
import { number } from "../../lib/elements"
import { scrollMenu } from "../../lib/elements"
import { form, textField } from "../../lib/elements"
import { Employee, JobTitle } from "./model"

interface Props {
	onSubmit: (employee: Employee) => void
}

export default typed.leaf<Props>(({ onSubmit }) => {
	const nameField = textField(
		attribute("placeholder", "Employee name")
	) as HTMLInputElement

	const jobTitleMenu = scrollMenu()(
		...Object.values(JobTitle).map(title =>
			option(attribute("value", title))(title)
		)
	) as HTMLInputElement

	const salaryField = number(
		attribute("placeholder", "Salary")
	) as HTMLInputElement

	function handleSubmit(event: Event) {
		event.preventDefault()

		onSubmit({
			name: nameField.value,
			title: jobTitleMenu.value as JobTitle,
			salary: Number(salaryField.value)
		})
	}

	return form(event("submit", handleSubmit))(
		nameField,
		jobTitleMenu,
		salaryField,
		submit(attribute("value", "Add"))
	)
})
