import { typeless } from "../lib/component"
import { attribute } from "../lib/dom"
import { div, h1, h2, p, section } from "../lib/elements"

import employeeRegistry from "./employeeRegistry"

import "./style.css"

export default typeless.leaf(() =>
	div(attribute("class", "example-app"))(
		h1()("Company CO. 📦"),
		div(attribute("class", "examples"))(
			section()(
				h2()("Employee registry 💵"),
				employeeRegistry()
			)
		)
	)
)
