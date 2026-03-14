import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";

function App() {
  return (
    <Router>
      {/* Navbar */}
      <nav className="bg-gray-900 text-white px-8 py-4 flex justify-between items-center">
        <Link to="/" className="font-bold text-lg hover:text-gray-300">
          QuizApp
        </Link>
      </nav>

      <div className="p-8 bg-gray-100 min-h-screen">

        <Routes>
          {/* Home Page */}
          <Route
            path="/"
            element={
              <div className="max-w-2xl mx-auto text-center mt-20">
                <h1 className="text-5xl font-bold mb-6">Welcome to the Quiz App</h1>
                <p className="text-gray-600 mb-8">
                  Test your knowledge with 5 simple questions. Try to score as high as possible!
                </p>
                <Link
                  to="/quiz"
                  className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
                >
                  Start Quiz
                </Link>
              </div>
            }
          />

          {/* Quiz Page */}
          <Route path="/quiz" element={<Quiz />} />

          {/* Result Page */}
          <Route path="/result" element={<Result />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;