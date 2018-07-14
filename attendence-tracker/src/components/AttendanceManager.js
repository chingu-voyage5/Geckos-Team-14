import React from 'react';
import ChooseCourse from './ChooseCourse';

const AttendanceManager = () => {

  const renderClasses = () => {
    const dummyData = [
      "Algebra",
      "English",
      "French",
      "Spanish"
    ];
    return dummyData.map(item => (
      <li>
        <button key={item} className="courseName">
          {item}
        </button>
      </li>

    ));
  };

  return (
    <div>
      <h1>Attendance</h1>
      <ChooseCourse classes={renderClasses()} />
    </div>
  )
};
export default AttendanceManager;
