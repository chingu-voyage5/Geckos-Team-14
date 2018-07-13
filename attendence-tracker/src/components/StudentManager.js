import React from "react";
import AddStudent from "./AddStudent";
import "../styles/StudentManager.css";

const StudentManager = () => {
  const renderStudents = () => {
    const dummyData = [
      "Bill Krup",
      "Sasha Snow",
      "Garen Gillingham",
      "Jared Jay",
      "Su Walsh"
    ];
    return dummyData.map(item => (
      <li key={item} className="studentName">
        {item}
      </li>
    ));
  };

  return (
    <div className="page-title-container">
      <h1 className="page-name">Add/Edit Students</h1>
      <div className="student-manage-flex">
        <div className="student-list-container">
          <h3 className="student-list-title">Student List</h3>
          <ul className="student-list">{renderStudents()}</ul>
        </div>
        <AddStudent />
      </div>
    </div>
  );
};

export default StudentManager;
