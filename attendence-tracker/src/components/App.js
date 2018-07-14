import React, { Component } from "react";
import ClassManager from "./ClassManager";
import Header from "./Header";
import StudentManager from "./StudentManager";



class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <ClassManager />
        <StudentManager />
      </div>
    );
  }
}

export default App;
