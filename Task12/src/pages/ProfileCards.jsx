import React from 'react';
import ProfileCard from '../components/ProfileCard';

const ProfileCards = ({ students }) => {
  return (
    <>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Student Profile Cards</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {students.map((student) => (
          <ProfileCard key={student.id} student={student} />
        ))}
        {students.length === 0 && (
          <p className="text-center text-gray-500 col-span-full mt-8">
            No students to display. Add one!
          </p>
        )}
      </div>
    </>
  );
};

export default ProfileCards;