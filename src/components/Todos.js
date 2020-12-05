import React, { Component } from "react";
import { connect } from 'react-redux';

import TodoItem from './TodoItem';

import { delTodo, toggleTodo } from "../actions/todos";

class Todos extends Component {
    render() {
        return this.props.todos.map((todo) => (
            <TodoItem key={todo.id} todo = {todo} toggleTodo={this.props.toggleTodo} delTodo={this.props.delTodo}/>
        ));
    }
}


function mapStateToProps(state) {
    return { todos: state.todos }
  }
  
  function mapDispatchToProps(dispatch) {
    return {
      delTodo: (id) => dispatch(delTodo(id)),
      toggleTodo: (id) => dispatch(toggleTodo(id))
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Todos);