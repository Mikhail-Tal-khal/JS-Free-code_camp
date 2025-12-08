import { ActionButton } from "./ActionButton"

export const ContactForm =()=>{
    const handleSendMessage = () => {
        alert("Message sent!");
    }
    return(
        <div>
            <h2>Contact Us</h2>
            <ActionButton text="Submit" onClick={handleSendMessage} />
        </div>
    )
}