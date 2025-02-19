import { $class } from "../../lib/attributes";
import { HTMLProps } from "../../lib/dom";
import { $button } from "../../lib/elements";

export default function $BUTTON(...decorators: HTMLProps) {
    return $button(...decorators, $class("cursor-pointer border rounded text-white"))
}