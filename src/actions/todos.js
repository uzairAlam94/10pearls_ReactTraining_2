import { ADD_TODO, TOGGLE_TODO_STATUS, DEL_TODO } from "../constants/todoActionTypes";

export const addTodo = title => ({
  type: ADD_TODO,
  title
});

export const delTodo = id => ({
    type: DEL_TODO,
    id
});

export const toggleTodo = id => ({
  type: TOGGLE_TODO_STATUS,
  id
});
