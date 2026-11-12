import { useState,useEffect } from "react"

const AutoCounter = () => {
    const [count, setCount] = useState(0);

    const StartCount = () => {
        const timer = setInterval(() => {       
            setCount(counter => counter + 1);
        }, 1000);
        return timer;
    }
   
    useEffect(() => {
       // mount
    const timer = StartCount();

    return () => {
      // unmount
      clearInterval(timer);
    }
    }, []);

    console.log("Anything written here will be printed in console on every render of this component");

    return (
        <div className="auto-counter">
            <h2>Auto Counter: {count} </h2>
            <p>This is an auto counter component.</p>
        </div>
    )
    
    }

export default AutoCounter;