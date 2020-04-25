import React, { Component } from 'react';
import Todo from "./Todo";
import { connect } from "react-redux";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.state = {
      task: ""
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.dispatch({
      type: "ADD_TODO",
      task: this.state.task // Get what's submitted in the form
    });
    e.target.reset(); // Reset the form values
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  removeTodo(id) {
    this.props.dispatch({
      type: "REMOVE_TODO",
      id
    });
  }

  render() {
    // Going through all the props to printout/render a bunch of Todos with properties
    // debugger;
    let todos = this.props.todos.map((val, index) => (
      <Todo
        removeTodo={this.removeTodo.bind(this, val.id)} // bind for right "id", Go dispatch it
        task={val.task}
        key={index}
      />
    ));

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="task">Task </label>
          <input
            type="text"
            name="task"
            id="task"
            onChange={this.handleChange}
            />
          <button>Add a Todo!</button>
        </form>
          <ul>{todos}</ul>
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
export default connect(mapStateToProps)(TodoList);