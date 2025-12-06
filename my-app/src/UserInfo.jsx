export const UserInfo=({name,age,city,email})=>{
    return(
        <div>
            <h3>User Information</h3>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>City: {city}</p>
            <p>Email: {email}</p>
        </div>
    );
}