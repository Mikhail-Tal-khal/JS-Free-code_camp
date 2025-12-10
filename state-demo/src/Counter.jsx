import { useState } from "react";

export const Counter=()=>{
    
    const [count, setCount]= useState (0);
    //CurrentValue, setterFunction = useState (InitialValue)

    console.log("Counter rendered with count:", count);
    
    const handleClick =()=>{
        setCount(count + 1);
    }
    return<button onClick={handleClick}>Count: {count}</button>
}