import React, { useState } from "react";


const Calculator = () => {
  const [input, setInput] = useState("")

  function Display(value) {
    setInput(input + value);
  }

  function Clear() {
    setInput("");
  }

  function Calculation() {
    let Answers = eval(input);
    setInput(Answers);
  }

  return (
    <section className='py-24 px-4 relative'>
      <div
        className="container mx-auto max-w-5xl">
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-4 text-glow">
          Calculator
        </h2>
        <form className="h-[490px] w-full max-w-[380px] rounded-xl p-5 gradient-border card-hover bg-card mx-auto">
          <input type="text" readOnly value={input}
                 className="px-2 sm:pr-2 text-end font-semibold text-lg sm:text-xl h-[45px] w-full bg-background text-foreground focus:outline-none rounded-xl gradient-border"/>
          <div
            className='text-foreground font-semibold grid grid-cols-4 grid-rows-5 text-2xl sm:text-3xl gap-y-2 my-3 items-center justify-center'>
            <span
              className="h-14 w-14 sm:h-[70px] sm:w-[70px] rounded-full flex justify-center items-center cursor-pointer bg-card gradient-border text-foreground border border-border"
              onClick={Clear}>C</span>
            <span
              className="h-14 w-14 sm:h-[70px] sm:w-[70px] rounded-full flex justify-center items-center cursor-pointer bg-card gradient-border text-foreground border border-border"
              onClick={() => Display("+/-")}>+/-</span>
            <span
              className="h-14 w-14 sm:h-[70px] sm:w-[70px] rounded-full flex justify-center items-center cursor-pointer bg-card gradient-border text-foreground border border-border"
              onClick={() => Display("%")}>%</span>
            <span
              className="h-14 w-14 sm:h-[70px] sm:w-[70px] rounded-full flex justify-center items-center cursor-pointer cosmic-button"
              onClick={() => Display("/")}>÷</span>
            <span
              className="h-14 w-14 sm:h-[70px] sm:w-[70px] rounded-full flex justify-center items-center cursor-pointer bg-card gradient-border text-foreground border border-border"
              onClick={() => Display("7")}>7</span>
            <span
              className="h-14 w-14 sm:h-[70px] sm:w-[70px] rounded-full flex justify-center items-center cursor-pointer bg-card gradient-border text-foreground border border-border"
              onClick={() => Display("8")}>8</span>
            <span
              className="h-14 w-14 sm:h-[70px] sm:w-[70px] rounded-full flex justify-center items-center cursor-pointer bg-card gradient-border text-foreground border border-border"
              onClick={() => Display("9")}>9</span>
            <span
              className="h-14 w-14 sm:h-[70px] sm:w-[70px] rounded-full flex justify-center items-center cursor-pointer cosmic-button"
              onClick={() => Display("*")}>×</span>
            <span
              className="h-14 w-14 sm:h-[70px] sm:w-[70px] rounded-full flex justify-center items-center cursor-pointer bg-card gradient-border text-foreground border border-border"
              onClick={() => Display("4")}>4</span>
            <span
              className="h-14 w-14 sm:h-[70px] sm:w-[70px] rounded-full flex justify-center items-center cursor-pointer bg-card gradient-border text-foreground border border-border"
              onClick={() => Display("5")}>5</span>
            <span
              className="h-14 w-14 sm:h-[70px] sm:w-[70px] rounded-full flex justify-center items-center cursor-pointer bg-card gradient-border text-foreground border border-border"
              onClick={() => Display("6")}>6</span>
            <span
              className="h-14 w-14 sm:h-[70px] sm:w-[70px] rounded-full flex justify-center items-center cursor-pointer cosmic-button"
              onClick={() => Display("-")}>-</span>
            <span
              className="h-14 w-14 sm:h-[70px] sm:w-[70px] rounded-full flex justify-center items-center cursor-pointer bg-card gradient-border text-foreground border border-border"
              onClick={() => Display("1")}>1</span>
            <span
              className="h-14 w-14 sm:h-[70px] sm:w-[70px] rounded-full flex justify-center items-center cursor-pointer bg-card gradient-border text-foreground border border-border"
              onClick={() => Display("2")}>2</span>
            <span
              className="h-14 w-14 sm:h-[70px] sm:w-[70px] rounded-full flex justify-center items-center cursor-pointer bg-card gradient-border text-foreground border border-border"
              onClick={() => Display("3")}>3</span>
            <span
              className="h-14 w-14 sm:h-[70px] sm:w-[70px] rounded-full flex justify-center items-center cursor-pointer cosmic-button"
              onClick={() => Display("+")}>+</span>
            <span
              className="h-14 w-14 sm:h-[70px] sm:w-[70px] rounded-full flex justify-center items-center pl-2 cursor-pointer bg-card gradient-border text-foreground border border-border"
              onClick={() => Display("0")}>0</span>
            <span
              className="h-14 w-14 sm:h-[70px] sm:w-[70px] rounded-full flex justify-center items-center cursor-pointer bg-card gradient-border text-foreground border border-border"
              onClick={() => Display(".")}>.</span>
            <span
              className="col-span-2 h-14 sm:h-[70px] rounded-full flex justify-center items-center cursor-pointer cosmic-button"
              onClick={Calculation}>=</span>
          </div>
        </form>
      </div>
    </section>
  )
};

export default Calculator;