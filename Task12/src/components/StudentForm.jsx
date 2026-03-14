import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const StudentForm = ({ onAddStudent }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    course: '',
    attendance: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.course.trim()) newErrors.course = 'Course is required';
    if (!formData.attendance) {
      newErrors.attendance = 'Attendance is required';
    } else {
      const att = Number(formData.attendance);
      if (isNaN(att) || att < 0 || att > 100) {
        newErrors.attendance = 'Attendance must be a number between 0 and 100';
      }
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    onAddStudent({
      name: formData.name,
      email: formData.email,
      course: formData.course,
      attendance: Number(formData.attendance),
    });
    navigate('/students');
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-8 rounded-xl shadow-sm">
      <div className="mb-5">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          Full Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
            errors.name ? 'border-red-500' : 'border-gray-300'
          }`}
          placeholder="e.g., John Doe"
        />
        {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
      </div>

      <div className="mb-5">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
            errors.email ? 'border-red-500' : 'border-gray-300'
          }`}
          placeholder="john@university.edu"
        />
        {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
      </div>

      <div className="mb-5">
        <label htmlFor="course" className="block text-sm font-medium text-gray-700 mb-1">
          Course
        </label>
        <input
          type="text"
          id="course"
          name="course"
          value={formData.course}
          onChange={handleChange}
          className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
            errors.course ? 'border-red-500' : 'border-gray-300'
          }`}
          placeholder="e.g., Computer Science"
        />
        {errors.course && <p className="mt-1 text-sm text-red-600">{errors.course}</p>}
      </div>

      <div className="mb-6">
        <label htmlFor="attendance" className="block text-sm font-medium text-gray-700 mb-1">
          Attendance (%)
        </label>
        <input
          type="number"
          id="attendance"
          name="attendance"
          value={formData.attendance}
          onChange={handleChange}
          className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
            errors.attendance ? 'border-red-500' : 'border-gray-300'
          }`}
          min="0"
          max="100"
          step="1"
          placeholder="0-100"
        />
        {errors.attendance && <p className="mt-1 text-sm text-red-600">{errors.attendance}</p>}
      </div>

      <button
        type="submit"
        className="w-full bg-blue-900 text-white font-medium py-2.5 rounded-lg hover:bg-blue-800 transition duration-200"
      >
        Add Student
      </button>
    </form>
  );
};

export default StudentForm;