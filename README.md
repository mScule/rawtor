# RAWTOR - Reactive UI library experiment

With this little project, I tried to come up with some idea to describe
reactive UI components in some cool way without having extra compile step like JSX

## Syntax

With JSX you would do something like this:

```jsx
<div>
    <div className="look-cool">
        <p>Hello there!</p>
        <CustomComponent prop1="Hello" />
    </div>
</div>
```

The same with this "RAWTOR approach" would be:

```ts
$div()(
    $div($class("look-cool"))(
        $p()("Hello there!"),
        $CUSTOM_COMPONENT("Hello")
    )
)
```

### Why in the hell are these functions prefixed with `$` ??

It looks cool :D:D:D (and VS Code will suggest all the rawtor related functions right away)

## How to create a reusable component?

Components are just functions that return `HTMLElement`. All of the element functions (like `$p`) just creates `HTMLElement` instance in (IMO) cleaner way than just using `document.createElement` + some additional magic that i'll return to later. 

```ts
// $HUMAN.ts

export default (name: string, age: number) => $div()(
    $p()($b()("Name:"), name),
    $p()($b()("Age:"), age)
)
```

Below you can see an example where this component is being used

```ts
$div()(
    $HUMAN("Mike", 30),
    $HUMAN("Jack", 40)
)
```

## Reactivity stuff

Can you do reactive stuff with it?

Nothing fancy but yes.

There are now two ways of doing something reactive: having reactive values as children, or having `$match` statement

Example below shows usage of reactive values as children

```ts
export default () => {
	const count = $signal(0)

	const increment = () => $update(count, value => value + 1)
	const decrement = () => $update(count, value => value - 1)
	const reset = () => $set(count, 0)

	return $div($class("counter"))(
		$span()("Count:", count),
		$div($class("button-row"))(
			$button($event("click", increment))("Increment"),
			$button($event("click", reset))("Reset"),
			$button($event("click", decrement))("Decrement")
		)
	)
})
```

Theres some additional magic behind these function element thingies: They subscribe for the signals for you, so you don't have to do it by your self.

Below you can see example using $match statement, which is like switch

```ts
export default () => {
	const selected = $signal(0)

	return $div()(
		$button($event("click", () => $set(selected, 0)))("to health"),
		$button($event("click", () => $set(selected, 1)))("to armour"),
		$button($event("click", () => $set(selected, 2)))("to attack"),
		$match(
			selected,
			$case(0, $div()($p()("health"), $COUNTER())),
			$case(1, $div()($p()("armour"), $COUNTER())),
			$case(2, $div()($p()("attack"), $COUNTER()))
		)
	)
}
```

At the moment those $COUNTER() components will hold their data, even when the selected view changes.

## Is it anything to write home about?

It is just a pass time project. Nothing serious :)
