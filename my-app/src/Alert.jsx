import "./Alert.css";

export const Alert = ({ children, type = "Success" }) => {
    return (
        <div className={`alert ${type}`}>
            {children}
        </div>
    );
};
