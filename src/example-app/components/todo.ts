import { $class } from "../../lib/attributes"
import { $event } from "../../lib/dom"
import { $b, $div, $span } from "../../lib/elements"
import { getTodo, removeTodo, updateTodo } from "../store"
import $BUTTON from "./button"

export default function $TODO(index: number) {
	const todo = getTodo(index)

	return $div($class("flex flex-col gap-2 border rounded border-gray-500 p-3"))(
		$span($class("text-white"))($b()("Task: "), todo.task),

		$div($class("flex flex-row gap-2"))(
			$span($class("text-white"))($b()("Done: ")),
			$BUTTON(
				$event("click", () => updateTodo(index, { done: !todo.done }))
			)(todo.done ? "Yes" : "No"),
			$BUTTON($event("click", () => removeTodo(index)))("Remove")
		)
	)
}
