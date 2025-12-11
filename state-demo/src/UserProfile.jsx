import { useState } from "react";

export const UserProfile = () => {
    const [user, setUser] = useState({
        name: "John Doe",
        age: 30,
        email: "batman@justicelegue.com",
        address:{
            city: "Gotham",
            country: "USA",
        }
    });

    console.log("Component rendering, user:", user );

    const updateName = () => {
        setUser({
            ...user,
            name: "kalvani",
        });
    }

    const updateAge = () => {
        setUser({
            ...user,
            age: user.age + 1,
        });
    }

    const updateMultiple = () => {
        setUser({
            ...user,
            name: "Alice",
            age: 28,
        })
    };

    const updateCity = () => {
        setUser({
            ...user,
            address: {
                ...user.address,
                city: "Metropolis",
            },
         })};

    return(
        <div>
            <h2>User Profile</h2>
            <p>Name: {user.name}</p>
            <p>Age: {user.age}</p>
            <p>Email: {user.email}</p>
            <p>City: {user.address.city}</p>
            <p>Country: {user.address.country}</p>
            <button onClick={updateName}>Change name to kalvani</button>
            <button onClick={updateAge}>Increase age by 1</button>
            <button onClick={updateMultiple}>Update Name and age</button>
            <button onClick={updateCity}>Move to Metropolis</button>
        </div>
    )
}