export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODO = "REMOVE_TODO";

export function addTodo(task) {
  return {
    type: ADD_TODO,
    task
  }
}

export function remove_Todo(id) {
  return {
    type: REMOVE_TODO,
    id
  }
}