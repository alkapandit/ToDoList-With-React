import React, { Component } from "react";
import "./TaskItem.css";
export default class TaskItem extends Component {
  constructor(props) {
    super(props);
    this.state = { task: this.props.taskItem.taskName, isEditing: false };
    this.deleteTask = this.deleteTask.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleTask = this.toggleTask.bind(this);
  }
  setIsEditing(editing) {
    this.setState({ isEditing: editing });
  }
  handleChange(evt) {
    this.setState({ task: evt.target.value });
  }
  handleSubmit(evt) {
    evt.preventDefault();
    this.props.editTask(this.state.task, this.props.id);
    this.setState({ isEditing: false });
  }
  deleteTask() {
    this.props.deleteTask(this.props.id);
  }
  toggleTask() {
    this.props.toggleTask(this.props.id);
  }
  render() {
    let result;
    if (this.state.isEditing) {
      result = (
        <tr>
          <td colSpan="2">
            <form onSubmit={this.handleSubmit}>
              <input
                type="text"
                value={this.state.task}
                onChange={this.handleChange}
              />
              <span style={{ float: "right" }}>
                <button>Save</button>
                <button onClick={() => this.setIsEditing(false)}>Back</button>
              </span>
            </form>
          </td>
        </tr>
      );
    } else {
      result = (
        <tr>
          <td onClick={this.toggleTask} className="task">
            <input
              type={"checkbox"}
              readOnly
              checked={this.props.taskItem.isCompleted}
            />
            <span
              className={
                this.props.taskItem.isCompleted ? "completed" : "not-complete"
              }
            >
              {this.props.taskItem.taskName}
            </span>
          </td>
          <td>
            <button className="edit" onClick={() => this.setIsEditing(true)}>
              {" "}
              Edit
            </button>
            <button className="delete" onClick={this.deleteTask}>
              {" "}
              Delete
            </button>
          </td>
        </tr>
      );
    }
    return result;
  }
}
