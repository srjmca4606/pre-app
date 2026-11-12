import { useState,useEffect } from "react";
import Button from "./Button";

const Counter = () => {

      // let counterValue = 1;
  const [counterValue, setCounterValue] = useState(1);

  const increment = () => {
    setCounterValue(counterValue + 1);
  } 
  
  const decrement = () => {
    setCounterValue(counterValue - 1);
  }
  const reset = () => {
    setCounterValue(0);
  }

  useEffect(() => {
    increment
    }, []
);

    return <section className="mb-10 flex flex-col">
    <h2 className="text-2xl">Count is</h2>
    <p className="text-xl">{counterValue}</p>
    <div className="flex gap-4 mb-4 justify-center">
      <Button text="Decrement" onClick={decrement}></Button>
      <Button text="Increment" onClick={increment}></Button>
    </div>
    <div className="flex justify-center">
      <Button text="Reset" onClick={reset}></Button>
    </div>
  </section>
}

export default Counter