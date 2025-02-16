import { $type } from "./attributes";
import { HTMLProps, $attribute, $element } from "./dom";

// Text tags
export const $pre = (...decorators: HTMLProps) => $element("pre", ...decorators)
export const $h1 = (...decorators: HTMLProps) => $element("h1", ...decorators)
export const $h2 = (...decorators: HTMLProps) => $element("h2", ...decorators)
export const $h3 = (...decorators: HTMLProps) => $element("h3", ...decorators)
export const $h4 = (...decorators: HTMLProps) => $element("h4", ...decorators)
export const $h5 = (...decorators: HTMLProps) => $element("h5", ...decorators)
export const $h6 = (...decorators: HTMLProps) => $element("h5", ...decorators)
export const $b = (...decorators: HTMLProps) => $element("b", ...decorators)
export const $i = (...decorators: HTMLProps) => $element("i", ...decorators)
export const $tt = (...decorators: HTMLProps) => $element("tt", ...decorators)
export const $code = (...decorators: HTMLProps) => $element("code", ...decorators)
export const $cite = (...decorators: HTMLProps) => $element("cite", ...decorators)
export const $address = (...decorators: HTMLProps) => $element("address", ...decorators)
export const $em = (...decorators: HTMLProps) => $element("em", ...decorators)
export const $strong = (...decorators: HTMLProps) => $element("strong", ...decorators)

// Links
export const $a = (...decorators: HTMLProps) => $element("a", ...decorators)

// Formatting
export const $p = (...decorators: HTMLProps) => $element("p", ...decorators)
export const $br = (...decorators: HTMLProps) => $element("br", ...decorators)()
export const $blockQuote = (...decorators: HTMLProps) => $element("blockquote", ...decorators)
export const $div = (...decorators: HTMLProps) => $element("div", ...decorators)
export const $span = (...decorators: HTMLProps) => $element("span", ...decorators)

// Lists
export const $ul = (...decorators: HTMLProps) => $element("ul", ...decorators)
export const $ol = (...decorators: HTMLProps) => $element("ol", ...decorators)
export const $li = (...decorators: HTMLProps) => $element("li", ...decorators)
export const $dl = (...decorators: HTMLProps) => $element("dl", ...decorators)
export const $dt = (...decorators: HTMLProps) => $element("dt", ...decorators)
export const $dd = (...decorators: HTMLProps) => $element("dd", ...decorators)

// Graphical $elements
export const $hr = (...decorators: HTMLProps) => $element("hr", ...decorators)
export const $img = (...decorators: HTMLProps) => $element("img", ...decorators)
export const $video = (...decorators: HTMLProps) => $element("video", ...decorators)

// Forms
export const $form = (...decorators: HTMLProps) => $element("form", ...decorators)
export const $scrollMenu = (...decorators: HTMLProps) => $element("select", $attribute("multiple"), ...decorators)
export const $pullDownMenu = (...decorators: HTMLProps) => $element("select", ...decorators)
export const $option = (...decorators: HTMLProps) => $element("option", ...decorators)
export const $textArea = (...decorators: HTMLProps) => $element("textarea", ...decorators)
export const $progress = (...decorators: HTMLProps) => $element("progress", ...decorators)
export const $button = (...decorators: HTMLProps) => $element("button", ...decorators)

export const $checkBox = (...decorators: HTMLProps) => $element("input", $type("checkbox"), ...decorators)()
export const $radioButton = (...decorators: HTMLProps) => $element("input", $type("radio"), ...decorators)()
export const $textField = (...decorators: HTMLProps) => $element("input", $type("type"), ...decorators)()
export const $submit = (...decorators: HTMLProps) => $element("input", $type("type"), ...decorators)()
export const $image = (...decorators: HTMLProps) => $element("image", $type("type"), ...decorators)()
export const $reset = (...decorators: HTMLProps) => $element("input", $type("type"), ...decorators)()
export const $email = (...decorators: HTMLProps) => $element("input", $type("type"), ...decorators)()
export const $url = (...decorators: HTMLProps) => $element("input", $type("type"), ...decorators)()
export const $number = (...decorators: HTMLProps) => $element("input", $type("type"), ...decorators)()
export const $range = (...decorators: HTMLProps) => $element("input", $type("type"), ...decorators)()
export const $dateTimeLocal = (...decorators: HTMLProps) => $element("input", $type("type"), ...decorators)()
export const $date = (...decorators: HTMLProps) => $element("input", $type("date"), ...decorators)()
export const $monthField = (...decorators: HTMLProps) => $element("input", $type("month"), ...decorators)()
export const $weekField = (...decorators: HTMLProps) => $element("input", $type("week"), ...decorators)()
export const $timeField = (...decorators: HTMLProps) => $element("input", $type("time"), ...decorators)()
export const $searchField = (...decorators: HTMLProps) => $element("input", $type("search"), ...decorators)()
export const $tel = (...decorators: HTMLProps) => $element("input", $type("tel"), ...decorators)()
export const $color = (...decorators: HTMLProps) => $element("input", $type("color"), ...decorators)()
export const $file = (...decorators: HTMLProps) => $element("input", $type("file"), ...decorators)()
export const $password = (...decorators: HTMLProps) => $element("input", $type("password"), ...decorators)()

// Tables
export const $table = (...decorators: HTMLProps) => $element("table", ...decorators)
export const $tr = (...decorators: HTMLProps) => $element("tr", ...decorators)
export const $td = (...decorators: HTMLProps) => $element("td", ...decorators)
export const $th = (...decorators: HTMLProps) => $element("th", ...decorators)

// Semantic $elements
export const $article = (...decorators: HTMLProps) => $element("article", ...decorators)
export const $aside = (...decorators: HTMLProps) => $element("aside", ...decorators)
export const $details = (...decorators: HTMLProps) => $element("details", ...decorators)
export const $figCaption = (...decorators: HTMLProps) => $element("figcaption", ...decorators)
export const $figure = (...decorators: HTMLProps) => $element("figure", ...decorators)
export const $footer = (...decorators: HTMLProps) => $element("footer", ...decorators)
export const $header = (...decorators: HTMLProps) => $element("header", ...decorators)
export const $main = (...decorators: HTMLProps) => $element("main", ...decorators)
export const $mark = (...decorators: HTMLProps) => $element("mark", ...decorators)
export const $nav = (...decorators: HTMLProps) => $element("nav", ...decorators)
export const $section = (...decorators: HTMLProps) => $element("section", ...decorators)
export const $summary = (...decorators: HTMLProps) => $element("summary", ...decorators)
export const $time = (...decorators: HTMLProps) => $element("time", ...decorators)
