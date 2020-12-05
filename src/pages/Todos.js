import React from 'react';

// Importing Components
import Todos from '../components/Todos';
import AddTodo from '../components/AddTodo';


const TodoApp = () => {
    return (
      <React.Fragment>
        <AddTodo  />
        <Todos />
      </React.Fragment>
    )
}

export default TodoApp;