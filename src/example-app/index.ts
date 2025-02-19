import { $class } from "../lib/attributes.ts"
import { $div, $h1, $main } from "../lib/elements.ts"
import { $map } from "../lib/reactive.ts"
import $NEW_TODO from "./components/new-todo.ts"
import $TODO from "./components/todo.ts"
import { todos } from "./store.ts"

export default function $TODO_APP() {
	return $div($class("w-full flex flex-row justify-center"))(
		$main(
			$class(
				"flex flex-col gap-10 w-100 p-15 items-center justify-center"
			)
		)(
			$h1($class("text-white font-bold uppercase"))("Todo app"),
			$NEW_TODO(),

			$map(todos, (_, i) => $div($class("mb-2"))($TODO(i)))
		)
	)
}
