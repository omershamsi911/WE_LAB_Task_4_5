import { useState } from "react";

function App() {
  const [celsius, setCelsius] = useState("");
  const [fahrenheit, setFahrenheit] = useState("");
  const [history, setHistory] = useState([]);
  const [mode, setMode] = useState("C"); 

  const convert = () => {
    if (mode === "C") {
      if (celsius === "" || isNaN(celsius)) return;
      const f = (parseFloat(celsius) * 9) / 5 + 32;
      setFahrenheit(f.toFixed(2));

      setHistory((prev) => [
        { from: "C", input: celsius, to: "F", result: f.toFixed(2) },
        ...prev,
      ]);
    } else {
      if (fahrenheit === "" || isNaN(fahrenheit)) return;
      const c = ((parseFloat(fahrenheit) - 32) * 5) / 9;
      setCelsius(c.toFixed(2));

      setHistory((prev) => [
        { from: "F", input: fahrenheit, to: "C", result: c.toFixed(2) },
        ...prev,
      ]);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") convert();
  };

  const switchMode = () => {
    setMode(mode === "C" ? "F" : "C");
    setCelsius("");
    setFahrenheit("");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-8">
      <h1 className="text-4xl font-bold mb-6">Temperature Converter</h1>

      <div className="bg-white p-6 rounded shadow w-full max-w-md space-y-6">
        <div className="flex justify-between items-center mb-4">
          <span className="text-gray-700 font-medium">
            {mode === "C" ? "Enter Celsius" : "Enter Fahrenheit"}
          </span>
          <button
            onClick={switchMode}
            className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300"
          >
            Switch to {mode === "C" ? "Fahrenheit" : "Celsius"}
          </button>
        </div>
        <div>
          {mode === "C" ? (
            <input
              type="number"
              value={celsius}
              onChange={(e) => setCelsius(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Celsius"
              className="w-full border p-3 rounded focus:outline-blue-500"
            />
          ) : (
            <input
              type="number"
              value={fahrenheit}
              onChange={(e) => setFahrenheit(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Fahrenheit"
              className="w-full border p-3 rounded focus:outline-blue-500"
            />
          )}
        </div>
        {celsius !== "" || fahrenheit !== "" ? (
          <div className="bg-gray-100 p-3 rounded text-center text-lg">
            {mode === "C"
              ? `${celsius}°C = ${fahrenheit || "0"}°F`
              : `${fahrenheit}°F = ${celsius || "0"}°C`}
          </div>
        ) : null}

        <button
          onClick={convert}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Convert
        </button>
      </div>
      <div className="bg-white mt-8 p-6 rounded shadow w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-4">Conversion History</h2>

        {history.length === 0 ? (
          <p className="text-gray-500">No conversions yet.</p>
        ) : (
          <ul className="space-y-2 max-h-64 overflow-y-auto">
            {history.map((item, index) => (
              <li
                key={index}
                className={`p-2 border rounded flex justify-between ${
                  item.from === "C" ? "bg-blue-50" : "bg-green-50"
                }`}
              >
                <span>
                  {item.input}°{item.from} → {item.result}°{item.to}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;