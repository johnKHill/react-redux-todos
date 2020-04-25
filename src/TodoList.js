import React, { Component } from 'react';
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";
import { connect } from "react-redux";
import { addTodo, removeTodo } from "./actionCreators";
import { Route } from "react-router-dom";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleAdd(val) {
    this.props.addTodo(val);
  }

  removeTodo(id) {
    this.props.removeTodo(id);
  }


  render() {
    // Going through all the props to printout/render a bunch of Todos with properties
    let todos = this.props.todos.map((val, index) => (
      <Todo
        removeTodo={this.removeTodo.bind(this, val.id)} // bind for right "id", Go dispatch it
        task={val.task}
        key={index}
      />
    ));

    return (
      <div>
        <Route
          path="/todos/new"
          component={props => (
          <NewTodoForm {...props} handleSubmit={this.handleAdd} />
          )}
        />
        <Route
          exact path="/todos"
          component={() => <div><ul>{todos}</ul></div>} />
      </div>
    );
  }
}

// Placing reduxState on a component
// Turning the react state into props on the react component
// All the keys returned will be placed on "this.props"
function mapStateToProps(reduxState) {
  // debugger;
  return {
    todos: reduxState.todos
  }
}


// Connecting the TodoList component to the redux store for reduxState
// The second param is an object like the mapDispatchToProps method.
// They are simply imported actionCreator fns acting as keys but returning
// an object with a specific "type" key and value as the dispatched action.
export default connect(mapStateToProps, { addTodo, removeTodo })(TodoList);