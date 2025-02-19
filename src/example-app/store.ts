import { $getItem, $push, $remove, $signal, $updateItem } from "../lib/signal"

import { Todo } from "./types"

export const todos = $signal<Todo[]>([])

export function addTodo(todo: Todo) {
	$push(todos, todo)
}

export function removeTodo(index: number) {
	$remove(todos, index)
}

export function updateTodo(index: number, todo: Partial<Todo>) {
	$updateItem(todos, index, t => ({ ...t, ...todo }))
}

export function getTodo(index: number) {
	return $getItem(todos, index)
}
