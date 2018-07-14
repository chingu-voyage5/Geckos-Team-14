import React, { Component } from "react";
import AttendanceManager from "./AttendanceManager";
import ClassManager from "./ClassManager";
import Header from "./Header";
import StudentManager from "./StudentManager";



class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <AttendanceManager />
        <ClassManager />
        <StudentManager />
      </div>
    );
  }
}

export default App;
