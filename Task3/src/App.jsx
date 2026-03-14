import { useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    dob: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setUsers([...users, form]);

    setForm({
      name: "",
      email: "",
      password: "",
      dob: "",
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <h1 className="text-3xl font-bold text-center mb-8">
        User Registration
      </h1>
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md space-y-4"
      >
        <div>
          <label className="block font-medium mb-1">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={form.name}
            onChange={handleChange}
            className="w-full border rounded p-2"
            required
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={form.email}
            onChange={handleChange}
            className="w-full border rounded p-2"
            required
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={form.password}
            onChange={handleChange}
            className="w-full border rounded p-2"
            required
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Date of Birth</label>
          <input
            type="date"
            name="dob"
            value={form.dob}
            onChange={handleChange}
            className="w-full border rounded p-2"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
        >
          Register User
        </button>
      </form>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {users.map((user, index) => (
          <div
            key={index}
            className="bg-white p-5 rounded-lg shadow-md"
          >
            <h2 className="text-xl font-semibold mb-2">{user.name}</h2>
            <p className="text-gray-600">Email: {user.email}</p>
            <p className="text-gray-600">DOB: {user.dob}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;