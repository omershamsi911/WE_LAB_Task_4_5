import { useState } from "react";

function App() {
  const students = [
    { id: 1, name: "Ali", subject: "Math", marks: 85 },
    { id: 2, name: "Sara", subject: "Science", marks: 92 },
    { id: 3, name: "Ahmed", subject: "Math", marks: 74 },
    { id: 4, name: "Zara", subject: "English", marks: 88 },
    { id: 5, name: "Usman", subject: "Science", marks: 67 },
  ];

  const [subjectFilter, setSubjectFilter] = useState("All");
  const [sortOrder, setSortOrder] = useState("none");

  let filteredStudents = students.filter((student) => {
    if (subjectFilter === "All") return true;
    return student.subject === subjectFilter;
  });

  if (sortOrder === "asc") {
    filteredStudents = [...filteredStudents].sort(
      (a, b) => a.marks - b.marks
    );
  }

  if (sortOrder === "desc") {
    filteredStudents = [...filteredStudents].sort(
      (a, b) => b.marks - a.marks
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-3xl font-bold text-center mb-8">
        Student Marks Table
      </h1>
      <div className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow mb-8 space-y-4">
        <div>
          <label className="block font-medium mb-1">Filter by Subject</label>
          <select
            value={subjectFilter}
            onChange={(e) => setSubjectFilter(e.target.value)}
            className="w-full border p-2 rounded"
          >
            <option>All</option>
            <option>Math</option>
            <option>Science</option>
            <option>English</option>
          </select>
        </div>

        <div>
          <label className="block font-medium mb-1">Sort by Marks</label>
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="w-full border p-2 rounded"
          >
            <option value="none">No Sorting</option>
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
      </div>

      {/* Table */}
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-3">Name</th>
              <th className="p-3">Subject</th>
              <th className="p-3">Marks</th>
            </tr>
          </thead>

          <tbody>
            {filteredStudents.map((student) => (
              <tr key={student.id} className="border-t">
                <td className="p-3">{student.name}</td>
                <td className="p-3">{student.subject}</td>
                <td className="p-3">{student.marks}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;