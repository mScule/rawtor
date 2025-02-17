import { $class, $placeholder } from "../lib/attributes.ts"
import { $b, $div, $h1, $main, $p } from "../lib/elements.ts"
import { $bind, $get, $set, $signal, $update } from "../lib/signal.ts"

import $BUTTON from "./components/button.ts"
import $INPUT from "./components/input.ts"

export default function $CALCULATOR(){
	const input = $signal("0")
	const result = $signal(0)

	const add = (v: number) => $update(result, value => Number(value) + v)
	const sub = (v: number) => $update(result, value => Number(value) - v)

	const reset = () => {
		$set(input, "0")
		$set(result, 0)
	}

	return $main($class("flex flex-col gap-10 w-100 p-15 items-center justify-center"))(
		$h1($class("text-white text-xl"))("Calculator"),
		$p($class("text-white"))("Result: ", $b()(result)),
		$INPUT($placeholder("Add number here"), $bind(input)),
		$div($class("flex flex-col gap-3"))(
			$div($class("flex flex-row gap-3"))(
				$BUTTON("add", () => add(Number($get(input)))),
				$BUTTON("sub", () => sub(Number($get(input)))),
				$BUTTON("reset", reset)
			),
		)
	)
}
