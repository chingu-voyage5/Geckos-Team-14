import React from "react";
import AddClass from "./AddClass";
//import "../styles/StudentManager.css";

const ClassManager = () => {
  const renderClasses = () => {
    const dummyData = [
      "Algebra",
      "English",
      "French",
      "Spanish"
    ];
    return dummyData.map(item => (
      <li key={item} className="courseName">
        {item}
      </li>
    ));
  };

  return (
    <div className="page-title-container">
      <h1 className="page-name">Manage Courses</h1>
      <div className="student-manage-flex">
        <div className="student-list-container">
          <h3 className="student-list-title">Class List</h3>
          <ul className="student-list">{renderClasses()}</ul>
        </div>
        <AddClass />
      </div>
    </div>
  )
};
export default ClassManager;