import React, {useRef, useState} from 'react';
import {Link} from "react-router-dom";
import {LogOut} from 'lucide-react';


const questionBank = [
  {
    question: "Is JSX a syntax extension for JavaScript used in React?",
    options: ["Yes", "No"],
    answer: "Yes"
  },
  {
    question: "Can a React component return more than one root element without using a wrapper like <div> or <>?</>?",
    options: ["Yes", "No"],
    answer: "No"
  },
  {
    question: "Does React use a virtual DOM to improve performance?",
    options: ["Yes", "No"],
    answer: "Yes"
  },
  {
    question: "Can you update React state directly by assigning a new value (e.g., state = value)?",
    options: ["Yes", "No"],
    answer: "No"
  },
  {
    question: "Is `useState` a React Hook for managing state in functional components?",
    options: ["Yes", "No"],
    answer: "Yes"
  },
  {question: "Do React components have to start with a lowercase letter?", options: ["Yes", "No"], answer: "No"},
  {
    question: "Can React be used to build mobile applications with React Native?",
    options: ["Yes", "No"],
    answer: "Yes"
  },
  {
    question: "Does React automatically re-render a component when its props change?",
    options: ["Yes", "No"],
    answer: "Yes"
  },
  {
    question: "Is it recommended to use the index of an array as a key when rendering lists in React?",
    options: ["Yes", "No"],
    answer: "No"
  },
  {
    question: "Does React support class-based components as well as functional components?",
    options: ["Yes", "No"],
    answer: "Yes"
  },
  {
    question: "Can you use multiple hooks like `useState` and `useEffect` inside a single functional component?",
    options: ["Yes", "No"],
    answer: "Yes"
  },
  {
    question: "Is the `render()` method required in functional components?",
    options: ["Yes", "No"],
    answer: "No"
  },
  {
    question: "Does React follow a one-way data flow architecture?",
    options: ["Yes", "No"],
    answer: "Yes"
  },
  {
    question: "Can you directly manipulate the DOM in React without using refs?",
    options: ["Yes", "No"],
    answer: "No"
  },
  {
    question: "Is React maintained by Facebook (Meta)?",
    options: ["Yes", "No"],
    answer: "Yes"
  },
  {
    question: "Do you need Node.js installed to run React in the browser?",
    options: ["Yes", "No"],
    answer: "No"
  },
];

const Quiz = () => {
  const [current, setCurrent] = useState(0); // текущий вопрос
  const [score, setScore] = useState(0);  // количество правильных
  const [selected, setSelected] = useState(null); // выбранный вариант
  const [finished, setFinished] = useState(false); // закончен ли тест

  const question = questionBank[current];
  const progress = Math.round(((current + 1) / questionBank.length) * 100);
  const cardRef = useRef(null);

  function handleSelectOption(option) {
    if (selected !== null) return; // не даём пере-выбирать
    setSelected(option);
    if (option === question.answer) setScore((s) => s + 1);
  }

  function handleNext() {
    if (current < questionBank.length - 1) {
      setCurrent((i) => i + 1);
      setSelected(null);
    } else {
      setFinished(true);
    }
    // авто-скролл к началу карточки на мобильных
    setTimeout(() => cardRef.current?.scrollIntoView({behavior: 'smooth', block: 'start'}), 0);
  }

  function handlePrev() {
    if (current > 0) {
      setCurrent((i) => i - 1);
      setSelected(null);
      setTimeout(() => cardRef.current?.scrollIntoView({behavior: 'smooth', block: 'start'}), 0);
    }
  }

  function handleRestart() {
    setCurrent(0);
    setScore(0);
    setSelected(null);
    setFinished(false);
  }

  return (
    <section className="py-24 px-4 relative">
      <div className="container mx-auto max-w-4xl">
        <div ref={cardRef}
             className="bg-card/70 bg-gradient-to-br from-primary/5 to-transparent flex flex-col gap-6 md:gap-8 backdrop-blur-sm p-5 sm:p-6 md:p-8 rounded-2xl shadow-xl border border-border w-full max-w-md mx-auto">

          <div className="flex items-center justify-between">
            <Link to="/#mini-apps">
              <button
                aria-label="Back to Mini Apps"
                className="inline-flex items-center gap-2 h-9 px-3 rounded-md border border-border bg-card hover:bg-card/80 active:scale-95 transition text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
              >
                <LogOut className="w-5 h-5 transform scale-x-[-1]"/>
              </button>
            </Link>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-center flex-1">
              {finished ? "Result" : `Question ${current + 1}`}
            </h2>
            <div className="w-16"/>
          </div>

          <div>
            <div className="h-2.5 w-full bg-border/60 rounded-full overflow-hidden">
              <div className="h-full bg-primary transition-all" style={{width: `${progress}%`}}/>
            </div>
            <div className="mt-2 text-xs text-foreground/70 text-right">{current + 1} / {questionBank.length}</div>
          </div>

          {!finished ? (
            <>
              {/* Вопрос */}
              <p className="text-base sm:text-lg md:text-xl font-medium text-foreground/90 text-center mt-1 md:mt-2">
                {question.question}
              </p>

              {/* Варианты */}
              <div className="grid grid-cols-2 gap-4 max-w-xs sm:max-w-xl mx-auto">
                {question.options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleSelectOption(option)}
                    className={`w-full px-4 py-4 md:py-3 rounded-xl border transition shadow text-base md:text-lg active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60
                      ${selected === option
                      ? option === question.answer
                        ? "bg-green-500/20 border-green-500"
                        : "bg-red-500/20 border-red-500"
                      : "bg-background/60 border-border hover:bg-primary/10 hover:border-primary"
                    }`}
                    disabled={selected !== null}
                  >
                    <span className="font-medium">{option}</span>
                  </button>
                ))}
              </div>

              {/* Навигация */}
              <div className="pt-2 flex items-center justify-between gap-3">
                <button
                  onClick={handlePrev}
                  className="h-11 px-5 rounded-md border border-border bg-card hover:bg-card/80 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed transition text-sm md:text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
                  disabled={current === 0}
                >
                  ← Prev
                </button>

                <button
                  onClick={handleNext}
                  className="h-11 px-5 rounded-md bg-primary text-primary-foreground hover:brightness-110 active:scale-95 shadow-md transition text-sm md:text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
                >
                  {current === questionBank.length - 1 ? "Finish" : "Next →"}
                </button>
              </div>
            </>
          ) : (
            <div className="text-center space-y-4">
              <p className="text-xl font-semibold">
                You scored {score} out of {questionBank.length}
              </p>
              <button
                onClick={handleRestart}
                className="px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:brightness-110 shadow-md transition"
              >
                Restart Quiz
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Quiz;