import React, { Component } from "react";
import "../styles/AddStudent.css";

export default class AddStudent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    event.target.name;
    event.target.value;
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    alert(
      "A name was submitted: " +
        this.state.firstName +
        " " +
        this.state.lastName
    );
    event.preventDefault();
  }

  render() {
    return (
      <div className="add-student-container-flex">
        <h3 className="add-student-title">Add Student</h3>
        <form onSubmit={this.handleSubmit} className="add-student-name">
          <label className="add-student-name-label">
            Name:
            <input
              type="text"
              name="firstName"
              className="name-input"
              onChange={this.handleChange}
              value={this.state.firstName}
            />
            <input
              name="lastName"
              type="text"
              className="name-input"
              onChange={this.handleChange}
              value={this.state.lastName}
            />
          </label>
          <button className="add-student-button" onSubmit={this.handleSubmit}>
            Add Student
          </button>
        </form>
      </div>
    );
  }
}
