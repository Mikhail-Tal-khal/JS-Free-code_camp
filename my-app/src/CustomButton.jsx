export const CustomButton = ()=>{
    const handleClick = () => {
        alert("Button clicked!");
    }

    return <button onClick={handleClick}>Like</button>;
}