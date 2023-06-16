import React, { Component } from "react";
import CreateTask from "./CreateTask";
import TaskList from "./TaskList";
import "./Main.css";

export default class Main extends Component {
  constructor(props) {
    super(props);
    let allTask = localStorage.getItem("tasks");
    if (allTask === null) {
      allTask = [];
    } else {
      allTask = JSON.parse(allTask);
    }
    this.state = { tasks: allTask };
    this.createTask = this.createTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.editTask = this.editTask.bind(this);
    this.toggleTask = this.toggleTask.bind(this);
  }
  toggleTask(index) {
    let arr = [...this.state.tasks];
    arr[index].isCompleted = !arr[index].isCompleted;
    this.setState({ tasks: arr }, () => {
      console.log(this.state.tasks);
      localStorage.setItem("tasks", JSON.stringify(this.state.tasks));
    });
  }
  editTask(value, index) {
    let arr = [...this.state.tasks];
    arr[index].taskName = value;
    console.log(value);
    this.setState({ tasks: arr }, () => {
      console.log(this.state.tasks);
      localStorage.setItem("tasks", JSON.stringify(this.state.tasks));
    });
  }
  deleteTask(i) {
    let arr = this.state.tasks.filter((t, index) => index !== i);
    this.setState({ tasks: arr }, () => {
      console.log(this.state.tasks);
      localStorage.setItem("tasks", JSON.stringify(this.state.tasks));
    });
  }
  createTask(task) {
    if (task.trim() === "") {
      alert("Task cannot added!");
      return;
    }
    let newTask = { taskName: task.trim(), isCompleted: false };
    let arr = [...this.state.tasks, newTask];
    this.setState({ tasks: arr }, () => {
      console.log(this.state.tasks);
      localStorage.setItem("tasks", JSON.stringify(this.state.tasks));
    });
  }
  render() {
    return (
      <div className="Main">
        <div>
          <h2>ToDo List</h2>
        </div>
        <div className="main-content">
          <CreateTask createTask={this.createTask} />
          <br />
          <TaskList
            tasks={this.state.tasks}
            deleteTask={this.deleteTask}
            editTask={this.editTask}
            toggleTask={this.toggleTask}
          />
        </div>
      </div>
    );
  }
}
