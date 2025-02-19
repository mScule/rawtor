import { $class, $for, $id, $placeholder } from "../../lib/attributes"
import { $event } from "../../lib/dom"
import { $div, $h2, $label } from "../../lib/elements"
import { $bind, $get, $set, $signal } from "../../lib/signal"
import { addTodo } from "../store"
import $BUTTON from "./button"
import $TEXT_FIELD from "./text-field"

export default function $NEW_TODO() {
	const task = $signal<string>("")

	function addNewTodo() {
		addTodo({ task: $get(task), done: false })
		$set(task, "")
	}

	return $div($class("flex flex-col gap-3 p-3 border-b border-gray-500"))(
        $h2($class("text-white font-bold"))("Add new todo"),
		$label($class("text-white"), $for("task-input"))("Task"),
		$TEXT_FIELD($id("task-input"), $placeholder("Task"), $bind(task)),
		$BUTTON($event("click", addNewTodo))("Add")
	)
}
