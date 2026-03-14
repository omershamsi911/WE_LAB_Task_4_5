import React from 'react';

const StudentTable = ({ students }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-x-auto p-4">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Course</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Attendance</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {students.map((student) => (
            <tr key={student.id} className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{student.id}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{student.name}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{student.email}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{student.course}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span
                  className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    student.attendance >= 75
                      ? 'bg-green-100 text-green-800'
                      : 'bg-red-100 text-red-800'
                  }`}
                >
                  {student.attendance}%
                </span>
              </td>
            </tr>
          ))}
          {students.length === 0 && (
            <tr>
              <td colSpan="5" className="px-6 py-12 text-center text-sm text-gray-500">
                No students yet. Add one!
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default StudentTable;