import React, { useState } from "react";

export default function App() {
  const defaultTodos = [
    { text: "Learn React", done: false },
    { text: "Build a Todo App", done: false },
    { text: "Have fun coding!", done: false },
  ];

  const [todos, setTodos] = useState(defaultTodos);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (input.trim() === "") return;
    setTodos([...todos, { text: input, done: false }]);
    setInput("");
  };
// Handling to add todo using enter rather then just clicking button 
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      addTodo();
    }
  };

  const toggleDone = (index) => {
    const newTodos = [...todos];
    newTodos[index].done = !newTodos[index].done;
    setTodos(newTodos);
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-start p-6">
      <h1 className="text-3xl font-bold mb-6">Simple Todo App</h1>

      <div className="flex mb-6">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyPress} 
          placeholder="Add a todo..."
          className="p-2 rounded-l border border-gray-300 focus:outline-none w-64"
        />
        <button
          onClick={addTodo}
          className="bg-blue-500 text-white px-4 rounded-r hover:bg-blue-600"
        >
          Add
        </button>
      </div>

      <ul className="w-full max-w-md">
        {todos.map((todo, index) => (
          <li
            key={index}
            className="flex justify-between items-center bg-white p-3 mb-2 rounded shadow"
          >
            <span
              className={`flex-1 ${
                todo.done ? "line-through text-gray-400" : ""
              }`}
            >
              {todo.text}
            </span>
            <div className="flex gap-2">
              <button
                onClick={() => toggleDone(index)}
                className={`px-2 py-1 rounded ${
                  todo.done
                    ? "bg-green-400 text-white hover:bg-green-500"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {todo.done ? "Undo" : "Done"}
              </button>
              <button
                onClick={() => deleteTodo(index)}
                className="px-2 py-1 rounded bg-red-500 text-white hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}