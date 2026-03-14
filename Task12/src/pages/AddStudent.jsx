import React from 'react';
import StudentForm from '../components/StudentForm';

const AddStudent = ({ onAddStudent }) => {
  return (
    <>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Add New Student</h1>
      <StudentForm onAddStudent={onAddStudent} />
    </>
  );
};

export default AddStudent;