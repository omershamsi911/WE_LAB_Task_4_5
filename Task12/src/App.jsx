import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import StudentList from './pages/StudentList';
import AddStudent from './pages/AddStudent';
import ProfileCards from './pages/ProfileCards';

function App() {
  const [students, setStudents] = useState([
    { id: 1, name: 'Alice Johnson', email: 'alice@university.edu', course: 'Computer Science', attendance: 92 },
    { id: 2, name: 'Bob Smith', email: 'bob@university.edu', course: 'Mathematics', attendance: 78 },
    { id: 3, name: 'Carol White', email: 'carol@university.edu', course: 'Physics', attendance: 88 },
    { id: 4, name: 'David Brown', email: 'david@university.edu', course: 'Engineering', attendance: 95 },
  ]);

  const addStudent = (newStudent) => {
    setStudents((prev) => [
      ...prev,
      { ...newStudent, id: Date.now() },
    ]);
  };

  return (
    <Router>
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <Routes>
          <Route path="/" element={<Navigate to="/students" replace />} />
          <Route path="/students" element={<StudentList students={students} />} />
          <Route path="/add" element={<AddStudent onAddStudent={addStudent} />} />
          <Route path="/profiles" element={<ProfileCards students={students} />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;