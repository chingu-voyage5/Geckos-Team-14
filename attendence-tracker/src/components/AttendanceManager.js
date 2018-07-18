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
    this.handleSubmitPresent = this.handleSubmitPresent.bind(this);
    this.handleSubmitAbsent = this.handleSubmitAbsent.bind(this);
  };
  handleChange(e) {
    this.setState({ value: e.target.value });
  };

  handleSubmit(e) {
    this.setState({ chosenCourse: this.state.value })
    e.preventDefault();
  };
  handleSubmitPresent(e) {
    alert('This student is present')
    e.preventDefault();
  };
  handleSubmitAbsent(e) {
    alert('This student is absent')
    e.preventDefault();
  };
  createCourseList = () => {
    let courseList = [];
    for (var label in this.state.courses) {
      courseList.push(this.state.courses[label].courseName);
    }
    return courseList;
  };
  createStudentList = (chosenCourse) => {
    let studentList = [];
    for (var key in this.state.students) {
      if (this.state.students[key].courses.includes(chosenCourse))
        studentList.push(this.state.students[key].firstName + ' ' + this.state.students[key].lastName);
    }
    return studentList;
  };


  renderCourseList = (list) => {
    let renderedList = list.map(item => (
      <option key={item} value={item} >
        {item}
      </option>
    ));
    return renderedList;
  };
  renderStudentList = (chosenCourse) => {
    if (this.state.chosenCourse === '') {
      return <div><p>No Course Selected</p></div>
    } else {
      return <div><p>Course selected: {this.state.chosenCourse}</p>
        {this.createStudentList(chosenCourse).map((student) =>
          <p key={student}>{student} <button className="present-button" onClick={this.handleSubmitPresent}>
            Present
          </button>
            <button className="absent-button" onClick={this.handleSubmitAbsent}>
              Absent
           </button></p>)}
      </div>
    }

  };
  render() {
    let currentCourseList = this.renderCourseList(this.createCourseList());
    let currentStudentList = this.renderStudentList(this.state.chosenCourse);
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
