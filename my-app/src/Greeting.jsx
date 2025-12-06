export const Greeting = ({message = "Hallo", name = "Guest"}) => {
    return (
        <h2>
            {message}, {name}
        </h2>
    );
}