export const TODO_STATUSES = ["To Do", "In Progress", "Completed"] as const
export type TodoStatus = (typeof TODO_STATUSES)[number]

export const getRandomStatus = (): TodoStatus => {
  return TODO_STATUSES[Math.floor(Math.random() * TODO_STATUSES.length)]
}
