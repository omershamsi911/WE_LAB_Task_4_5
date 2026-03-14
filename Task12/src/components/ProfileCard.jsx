import React from 'react';

const ProfileCard = ({ student }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden flex flex-col">
      <div className="bg-gradient-to-r from-blue-900 to-blue-600 text-white p-6 text-center">
        <div className="w-16 h-16 bg-yellow-400 text-blue-900 text-3xl font-bold rounded-full flex items-center justify-center mx-auto mb-3 border-4 border-white">
          {student.name.charAt(0)}
        </div>
        <h3 className="text-xl font-semibold">{student.name}</h3>
        <p className="text-sm opacity-90">{student.course}</p>
      </div>
      <div className="p-5 flex-grow">
        <p className="flex items-center gap-2 text-gray-700 mb-3">
          <span className="text-lg">📧</span> {student.email}
        </p>
        <p className="flex items-center gap-2 text-gray-700">
          <span className="text-lg">📊</span> Attendance:
          <span
            className={`ml-auto px-2 py-0.5 rounded-full text-xs font-semibold ${
              student.attendance >= 75
                ? 'bg-green-100 text-green-800'
                : 'bg-red-100 text-red-800'
            }`}
          >
            {student.attendance}%
          </span>
        </p>
      </div>
      <div className="bg-gray-50 px-5 py-3 text-xs text-gray-500 border-t border-gray-100">
        ID: {student.id}
      </div>
    </div>
  );
};

export default ProfileCard;