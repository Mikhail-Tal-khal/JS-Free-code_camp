import { useState } from "react";

export const PrevStateCounter = () => {
    const [count, setCount] = useState(0);
    console.log("Render phase: Component rendering with count =", count);

    const handleClick =()=>{
        setCount((prev) => {
            console.log("First update fn:prevcount =", prev);
            return prev + 1;
        })
        setCount((prev) => {
            console.log("Second update fn:prevcount =", prev);
            return prev + 5;
        });
        setCount((prev) => {
            console.log("Third update fn:prevcount =", prev);
            return prev + 10;
        });
    }

    return (
        <div>
            <h2>Count: {count}</h2>
            <button onClick={handleClick}>Increment</button>
        </div>
    )
}