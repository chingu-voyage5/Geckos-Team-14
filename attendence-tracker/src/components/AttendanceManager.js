import React, { Component } from 'react';
import { data } from '../api/dummy_api';

export default class AttendanceManager extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: data.courses,
      students: data.students,
      value: 'No course selected',
      chosenCourse: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };
  handleChange(e) {
    this.setState({ value: e.target.value });
  };

  handleSubmit(e) {
    this.setState({ chosenCourse: this.state.value })
    e.preventDefault();
  };
  createCourseList = () => {
    let courseList = [];
    for (var label in this.state.courses) {
      courseList.push(this.state.courses[label].courseName);
    }
    return courseList;
  };
  createStudentList = () => {
    let studentList = [];
    for (var key in this.state.students) {
      studentList.push(this.state.students[key].firstName + ' ' + this.state.students[key].lastName);
    }
    return studentList;
  };

  renderList = (list) => {
    let renderedList = list.map(item => (
      <option key={item} value={item} >
        {item}
      </option>
    ));
    return renderedList;
  };
  renderStudentList = (studentList) => {

    if (this.state.chosenCourse === '') {
      return <div><p>No Course Selected</p></div>
    } else {

      return <div><p>Course selected: {this.state.chosenCourse}</p>
        <ul>
          <p>{studentList}</p>
        </ul>
      </div>
    }

  };
  render() {
    let currentCourseList = this.renderList(this.createCourseList());
    let currentStudentList = this.renderStudentList(this.createStudentList());
    return (
      <div>
        <h1>Take Attendance</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            <h3>Select a Course: </h3>
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="">Please select a course: </option>
              {currentCourseList}
            </select>
          </label>
          <input type="submit" value="Submit" />
        </form>
        {currentStudentList}
      </div >
    )
  }
};
