import { $event } from "../../lib/$/dom"
import { $button, $div, $p } from "../../lib/$/elements"
import { $signal, $update } from "../../lib/$/signal"

export default () => {
	const count = $signal(0)

	return $div()(
		$p()(count),
		$button($event("click", () => $update(count, count => count + 1)))("+"),
		$button($event("click", () => $update(count, count => count - 1)))("-")
	)
}
