import { $event } from "../../lib/dom"
import { $button, $div, $p } from "../../lib/elements"
import { $map } from "../../lib/reactive"
import { $get, $push, $remove, $signal } from "../../lib/signal"

export default () => {
	const items = $signal<string[]>([])

	return $div()(
		$p()(),
		$button(
			$event("click", () =>
				$push(items, "Hello" + ($get(items).length + 1))
			)
		)("+"),
		$map(items, (item, index) =>
			$button($event("click", () => $remove(items, index)))(item)
		)
	)
}
