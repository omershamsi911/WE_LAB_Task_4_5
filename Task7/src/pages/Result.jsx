import { Link, useLocation } from "react-router-dom";

function Result() {
  const location = useLocation();
  const score = location.state?.score || 0;

  return (
    <div className="text-center mt-20">
      <h1 className="text-4xl font-bold mb-6">Quiz Completed!</h1>
      <p className="text-gray-700 text-lg mb-6">
        You scored <span className="font-semibold">{score}</span> out of 5
      </p>
      <Link
        to="/"
        className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700"
      >
        Go Back Home
      </Link>
    </div>
  );
}

export default Result;