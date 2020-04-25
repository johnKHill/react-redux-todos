import React, { Component } from 'react';
import Todo from "./Todo";
import { connect } from "react-redux";
import { addTodo, removeTodo } from "./actionCreators"

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
    this.props.addTodo(this.state.task);
    e.target.reset(); // Reset the form values
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  removeTodo(id) {
    this.props.removeTodo(id);
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
// The second param is an object like the mapDispatchToProps method.
// They are simply imported actionCreator fns acting as keys but returning
// an object with a specific "type" key and value as the dispatched action.
export default connect(mapStateToProps, { addTodo, removeTodo })(TodoList);