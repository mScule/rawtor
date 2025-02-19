import { $class } from "../../lib/attributes"
import { HTMLProps } from "../../lib/dom"
import { $textField } from "../../lib/elements"

export default function $TEXT_FIELD(...decorators: HTMLProps) {
	return $textField(
		...decorators,
		$class("border p-1 rounded text-white placeholder:text-gray")
	)
}
