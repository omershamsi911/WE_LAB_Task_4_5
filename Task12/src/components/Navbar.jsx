import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <span className="text-xl font-semibold tracking-tight">🎓 University Portal</span>
          <div className="flex space-x-6">
            <NavLink
              to="/students"
              className={({ isActive }) =>
                `px-1 py-2 border-b-2 transition ${
                  isActive ? 'border-yellow-400 text-white' : 'border-transparent hover:border-blue-300'
                }`
              }
            >
              Student List
            </NavLink>
            <NavLink
              to="/add"
              className={({ isActive }) =>
                `px-1 py-2 border-b-2 transition ${
                  isActive ? 'border-yellow-400 text-white' : 'border-transparent hover:border-blue-300'
                }`
              }
            >
              Add Student
            </NavLink>
            <NavLink
              to="/profiles"
              className={({ isActive }) =>
                `px-1 py-2 border-b-2 transition ${
                  isActive ? 'border-yellow-400 text-white' : 'border-transparent hover:border-blue-300'
                }`
              }
            >
              Profile Cards
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;