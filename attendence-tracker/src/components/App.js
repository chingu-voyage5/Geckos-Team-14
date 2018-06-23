import React, { Component } from "react";
import API from '/.api/dummy_api';
import StudentManager from "./StudentManager";

class App extends Component {
  render() {
    return (
      <div className="App">
        <StudentManager />
      </div>
    );
  }
}

export default App;
