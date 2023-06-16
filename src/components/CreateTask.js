import React, { Component } from "react";
import "./CreateTask.css";

export default class CreateTask extends Component {
  constructor(props) {
    super(props);
    this.state = { task: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(evt) {
    this.setState({ task: evt.target.value });
  }
  handleSubmit(evt) {
    evt.preventDefault();
    this.props.createTask(this.state.task);
    this.setState({ task: "" });
  }
  render() {
    return (
      <form className="create-form" onSubmit={this.handleSubmit}>
        <strong>
          <label htmlFor="task">Enter ToDo</label>
        </strong>
        <br />
        <input
          type="text"
          value={this.state.task}
          onChange={this.handleChange}
        />
        <button className="add">Add Task</button>
      </form>
    );
  }
}
