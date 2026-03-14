import React from 'react';
import StudentTable from '../components/StudentTable';

const StudentList = ({ students }) => {
  return (
    <>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Student List</h1>
      <StudentTable students={students} />
    </>
  );
};

export default StudentList;