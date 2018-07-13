import React, { Component } from "react";
//import "../styles/AddStudent.css";

export default class AddClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      courseName: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    alert(
      "A class name was submitted: " +
      this.state.courseName
    );
    event.preventDefault();
  }

  render() {
    return (
      <div className="add-student-container-flex">
        <h3 className="add-student-title">Add Class</h3>
        <form onSubmit={this.handleSubmit} className="add-student-name">
          <label className="add-student-name-label">
            Course Name:
            <input
              type="text"
              name="courseName"
              className="name-input"
              onChange={this.handleChange}
              value={this.state.courseName}
            />

          </label>
          <button className="add-student-button" onSubmit={this.handleSubmit}>
            Add Class
          </button>
        </form>
      </div>
    );
  }
}
