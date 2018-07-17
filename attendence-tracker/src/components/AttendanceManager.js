import React, { Component } from 'react';
import { data } from '../api/dummy_api';

export default class AttendanceManager extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: data.courses,
      students: data.students,
      value: 'No course selected'
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  handleSubmit(e) {
    alert('Your selected course is: ' + this.state.value);
    e.preventDefault();
  }
  render() {
    const renderCourseList = () => {
      let courseList = [];
      for (var key in this.state.courses) {
        courseList.push(this.state.courses[key].courseName);
      }
      console.log(courseList);
      return courseList.map(item => (
        <option key={item} value={item} >
          {item}
        </option>
      ));
    }
    return (
      <div>
        <h1>Take Attendance</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            <h3>Select a Course: </h3>
            <select value={this.state.value} onChange={this.handleChange}>
              {renderCourseList()}
            </select>
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div >
    )
  }
};
