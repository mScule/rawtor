import { $class } from "../../lib/attributes"
import { $event } from "../../lib/dom"
import { $button } from "../../lib/elements"

export default function $BUTTON(text: string, click: () => void) {
	return $button(
		$event("click", click),
		$class("border-white text-white cursor-pointer border solid rounded p-3 font-bold text-xl")
	)(text)
}
