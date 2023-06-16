import React, { Component } from "react";
import TaskItem from "./TaskItem";
import "./TaskList.css";

export default class TaskList extends Component {
  render() {
    return (
      <div className="TaskList">
        <thead>
          <tr>
            <th className="Task">Task </th>
            <th className="Action"> Action</th>
          </tr>
        </thead>
        <tbody>
          {this.props.tasks.map((t, index) => {
            return (
              <TaskItem
                key={index}
                taskItem={t}
                id={index}
                deleteTask={this.props.deleteTask}
                editTask={this.props.editTask}
                toggleTask={this.props.toggleTask}
              />
            );
          })}
        </tbody>
      </div>
    );
  }
}
