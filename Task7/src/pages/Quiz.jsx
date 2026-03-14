import { useState } from "react";
import { useNavigate } from "react-router-dom";

const questions = [
  {
    question: "What is the capital of Pakistan?",
    options: ["Karachi", "Lahore", "Islamabad", "Peshawar"],
    answer: "Islamabad",
  },
  {
    question: "2 + 2 equals?",
    options: ["3", "4", "5", "6"],
    answer: "4",
  },
  {
    question: "Which language is used for web apps?",
    options: ["Python", "HTML", "C++", "Java"],
    answer: "HTML",
  },
  {
    question: "React is a ___ library?",
    options: ["Backend", "Frontend", "Database", "Fullstack"],
    answer: "Frontend",
  },
  {
    question: "Which planet is known as Red Planet?",
    options: ["Earth", "Mars", "Venus", "Jupiter"],
    answer: "Mars",
  },
];

function Quiz() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState("");
  const navigate = useNavigate();

  const handleNext = () => {
    if (selected === questions[current].answer) {
      setScore(score + 1);
    }
    setSelected("");

    if (current < questions.length - 1) {
      setCurrent(current + 1);
    } else {
      navigate("/result", { state: { score } });
    }
  };

  const handlePrev = () => {
    if (current > 0) setCurrent(current - 1);
  };

  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-xl font-semibold mb-4">
        Question {current + 1} of {questions.length}
      </h2>

      <p className="mb-6 text-gray-700">{questions[current].question}</p>

      <div className="space-y-3 mb-6">
        {questions[current].options.map((opt) => (
          <label key={opt} className="flex items-center gap-2">
            <input
              type="radio"
              name="option"
              value={opt}
              checked={selected === opt}
              onChange={(e) => setSelected(e.target.value)}
              className="accent-blue-600"
            />
            {opt}
          </label>
        ))}
      </div>

      <div className="flex justify-between">
        <button
          onClick={handlePrev}
          disabled={current === 0}
          className="bg-gray-400 text-white px-4 py-2 rounded disabled:opacity-50"
        >
          Previous
        </button>

        <button
          onClick={handleNext}
          disabled={!selected}
          className="bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50"
        >
          {current === questions.length - 1 ? "Finish" : "Next"}
        </button>
      </div>
    </div>
  );
}

export default Quiz;