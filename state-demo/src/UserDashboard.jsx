import { useState } from "react";

export const UserDashboard = ({isPremium}) => {
    const [credits, setCredits] = useState(100);

    if(!isPremium){
        return <div>Upgrade to premium to see Credits</div>
    }

    return (
        <div>
            <h2>Your have {credits}Credits</h2>
            <button onClick={() => setCredits(credits + 10)}>Add 10 Credits</button>
        </div>
    )
}