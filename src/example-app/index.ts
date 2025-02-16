import { $div, $h1 } from "../lib/elements.ts"

import $TABS from "./components/$TABS.ts"

import "./style.css"

export default () => $div()(
	$h1()("Example app"),
	$TABS()
)
