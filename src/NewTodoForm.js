import React, { Component } from 'react';

export default class newTodoForm extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      task: ""
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.handleSubmit(this.state.task);
    e.target.reset(); // Reset the form values
    this.props.history.push("/todos");  // this comes from the {...props} we passed from react-router
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {

    return(
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="task">Task </label>
        <input type="text" name="task" id="task" onChange={this.handleChange} />
        <button>Add a Todo!</button>
      </form>
    );
  }
}