import React, { Component } from 'react';


export default class ChooseCourse extends Component {

  render() {
    return (
      <div>
        <h2>Choose A Class
          </h2>
        <ul className="dropdown-content">
          {this.props.classes}
        </ul>
      </div >
    )
  };
}
