import React, { useState } from "react";

import Button from "./components/Button";
import ResetButton from "./components/ResetButton";
import "./App.css";


export default function App() {
  const [counter, setCounter] = useState(0);

  let incrementCounter = () => {
    setCounter(counter + 1);
  };

  let decrementCounter = () => {
    setCounter(counter - 1);
  };

  let resetCounter = () => {
    setCounter(0);
  };

  return (
    <div className="counter background">
      <div className="backgroundcounter">
        <div class="counter">
          <h3 class="blink">Digital Counter</h3>
          <h1>{counter}</h1>
        </div>
        <div>
          <div>
          <Button title={"-"} action={decrementCounter} />
          <Button title={"+"} action={incrementCounter} />
          </div>
          <ResetButton title={"Reset"} action={resetCounter} />
        </div>
      </div>
    </div>
  );
}

