import { $attribute } from "./dom"

export const $class = (value: string) => $attribute("class", value)
export const $style = (value: string) => $attribute("style", value)
export const $type = (value: string) => $attribute("type", value)
export const $id = (value: string) => $attribute("id", value)
export const $src = (value: string) => $attribute("src", value)
export const $href = (value: string) => $attribute("href", value)
export const $name = (value: string) => $attribute("name", value)
export const $alt = (value: string) => $attribute("alt", value)
export const $for = (value: string) => $attribute("for", value)
export const $placeholder = (value: string) => $attribute("placeholder", value)
export const $hidden = () => $attribute("hidden")
