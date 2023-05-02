import { typeless } from "../../lib/component"
import { attribute, observable } from "../../lib/dom"
import { div, p, table, th, tr } from "../../lib/elements"
import { Employee } from "./model"

import employee from "./employee"
import employeeForm from "./employeeForm"

import "./style.css"

export default typeless.leaf(() => {
	const employees = observable<Employee[]>([])

	function fireEmployee(index: number) {
		employees.update(employees => {
			employees.splice(index, 1)
			return employees
		})
	}

	const employeeTable = table()()

	employees.observe(() => {
		employeeTable.replaceChildren(
			tr()(th()("Name"), th()("Title"), th()("Salary"), th()("Actions"))
		)

		employees.get().forEach(({ name, title, salary }, index) => {
			employeeTable.appendChild(
				employee({
					name,
					title,
					salary,
					handleRemoval: () => fireEmployee(index)
				})
			)
		})
	})

	const salarySum = p()()

	employees.observe(() => {
		let sum = 0;

		employees.get().forEach(employee => sum += employee.salary)

		salarySum.textContent = `Employee salaries: ${sum}$`
	})

	return div(attribute("class", "employee-registry"))(
		salarySum,
		employeeForm({
			onSubmit: employee => {
				employees.update(employees => {
					employees.push(employee)
					return employees
				})
			}
		}),
		employeeTable
	)
})
