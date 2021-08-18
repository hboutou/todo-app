// stores.ts
import { writable } from 'svelte/store'
import { localStore } from './localStore'
import type { TodoType } from './types/todo.type'

export const alert = writable<string>('Welcome to the To-Do list app!')

const initialTodos: TodoType[] = [
  { id: 1, name: 'Visit todo-app website', completed: true },
  { id: 2, name: 'Add a task', completed: false },
]

export const todos = localStore<TodoType[]>('todo-app', initialTodos)
