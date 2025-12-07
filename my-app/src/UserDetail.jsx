export const UserDetail = ({ name, isOnline, hideOffline, isPremium, isNewUser , role}) => {
    if (hideOffline && !isOnline) {
        return null;
    }
    let roleBadge = null;
    if (role === "admin") {
        roleBadge = " 🛡️ Admin";
    } else if (role === "moderator") {
        roleBadge = " 🔧Moderator";
    } else if (role === "Vip"){
        roleBadge = " 💎Vip";
    }

    if (isOnline) {
        return (
            <div>
                <h3>
                    {name}
                    {isPremium && " ⭐"}
                    {isNewUser && " 🆕"}
                    {roleBadge}
                </h3>
                <span>{isOnline ? "🟢 Online" : "🔴 Offline"}</span>
                <p>{isOnline ? "Available for Chat" : "Not Available"}</p>
                {
                    isOnline ? (<button>Send message</button>) :
                        (<small>Last seen 2 hours ago</small>)
                }
            </div>
        );
    }
}