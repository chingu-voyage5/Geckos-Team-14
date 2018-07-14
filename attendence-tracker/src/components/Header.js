import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <header>
        <ul>
          <li><button>Take Attendance</button></li>
          <li><button>Manage Classes</button></li>
          <li><button>Add/Edit Students</button></li>
        </ul>
      </header>
    );
  }
}
