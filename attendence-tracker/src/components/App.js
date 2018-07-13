import React, { Component } from "react";
import ClassManager from "./ClassManager"
import StudentManager from "./StudentManager";


class App extends Component {
  render() {
    return (
      <div className="App">
        <ClassManager />
        <StudentManager />
      </div>
    );
  }
}

export default App;
