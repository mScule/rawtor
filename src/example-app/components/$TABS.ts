import { $event } from "../../lib/dom"
import { $button, $div, $p } from "../../lib/elements"
import { $case, $switch } from "../../lib/reactive"
import { $set, $signal } from "../../lib/signal"

import $COUNTER from "./$COUNTER"

export default () => {
	const selected = $signal(0)

	return $div()(
		$button($event("click", () => $set(selected, 0)))("to health"),
		$button($event("click", () => $set(selected, 1)))("to armour"),
		$button($event("click", () => $set(selected, 2)))("to attack"),
		$switch(
			selected,
			$case(0, $div()($p()("health"), $COUNTER())),
			$case(1, $div()($p()("armour"), $COUNTER())),
			$case(2, $div()($p()("attack"), $COUNTER()))
		)
	)
}
