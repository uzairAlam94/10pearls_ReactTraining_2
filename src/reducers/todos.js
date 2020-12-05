import { ADD_TODO, TOGGLE_TODO_STATUS, DEL_TODO } from "../constants/todoActionTypes";

import initialState from '../store/initialState';

import uuid from 'uuid';

function todos(state = initialState.todos, action) {
    switch (action.type) {
  
      // Push a new todo with the action title
      // and a completed value of false
      case ADD_TODO:
        return [
            ...state,
            {
              id: uuid.v4(),
              title: action.title,
              completed: false
            }
          ]
  
      // Mutate the todo that matches the action index
      // and toggle it's existing value to the opposite
      case TOGGLE_TODO_STATUS:
        return state.map((todo) => {
          if (todo.id === action.id) {
            return {
              ...todo,
              completed: !todo.completed
            }
          } else {
            return todo
          }
        })
  
      // Filters out the todo that matches the action index
      case DEL_TODO:
        return state.filter((todo) => {
          return todo.id !== action.id
        })
  
      default:
        return state
    }
  }

  export default todos;