import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [history, setHistory] = useState([]);

  const updateCount = (newValue) => {
    setHistory([...history, newValue]);
    setCount(newValue);
  };

  const increment = () => {
    updateCount(count + 1);
  };

  const decrement = () => {
    updateCount(count - 1);
  };

  const reset = () => {
    updateCount(0); 
  };

  const hardReset = () => {
    setCount(0);
    setHistory([]);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">Counter with History</h1>

      <div className="text-5xl font-bold mb-6">{count}</div>

      <div className="space-x-3 mb-6">
        <button
          onClick={increment}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Increment
        </button>

        <button
          onClick={decrement}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Decrement
        </button>

        <button
          onClick={reset}
          className="bg-gray-500 text-white px-4 py-2 rounded"
        >
          Reset
        </button>

        <button
          onClick={hardReset}
          className="bg-black text-white px-4 py-2 rounded"
        >
          Hard Reset
        </button>
      </div>

      <div className="w-full max-w-md bg-white shadow p-4 rounded">
        <h2 className="text-xl font-semibold mb-2">History</h2>

        {history.length === 0 ? (
          <p className="text-gray-500">No history yet</p>
        ) : (
          <ul className="list-disc pl-5">
            {history.map((value, index) => (
              <li key={index}>{value}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;