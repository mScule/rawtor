import { $class } from "../../lib/attributes"
import { HTMLProps } from "../../lib/dom"
import { $textField } from "../../lib/elements"

export default function $INPUT(...decorators: HTMLProps) {
	return $textField($class("border solid border-white rounded text-white p-1"), ...decorators)
}
