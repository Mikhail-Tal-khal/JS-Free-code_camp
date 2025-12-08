export const CustomButton = ()=>{
    const handleClick = (e) => {
        console.log("Clicked element:", e.target);
        console.log("Click Coordinates: X =", e.clientX, ", Y =", e.clientY);
        console.log("Which Mouse button?", e.button);
        
        alert("Button clicked!");
    }

    return <button onClick={handleClick}>Like</button>;
}