// import { useState } from "react";

// export const SimpleCounter = () => {
//     const [count, setCount] = useState(0);
//     console.log("Render phase: Component rendering with count =", count);

//     const handleClick =()=>{
//         console.log("Before setCount, count is:", count);
//         setCount(count + 1);
//         console.log("Still in trigger phase. After setCount, count is still:", count);
//     }

//     return (
//         <div>
//             <h2>Count: {count}</h2>
//             <button onClick={handleClick}>Increment</button>
//         </div>
//     )
// }