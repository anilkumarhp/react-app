import { useState } from "react";


const UseState = () => {
    let userData = { 
      firstName: '', 
      lastName: '', 
      email: '', 
    }
    const [user, setUser] = useState(userData)

    const onChangeHandler = (data) => {
        setUser({...user, [data.target.name]: data.target.value});
    };

    const onResetHandler = () => { setUser(userData) };

    return (
        <>
            <label>First Name: <input  name="firstName" type='text' value={user.firstName} onChange={onChangeHandler} ></input></label><br />
            <label>Last Name: <input  name="lastName" type='text' value={user.lastName} onChange={onChangeHandler} ></input></label><br />
            <label>Email: <input  name="email" type='email' value={user.email} onChange={onChangeHandler} ></input></label><br />
            <p> {user.firstName} { " " } {user.lastName} {" "} {user.email} </p><br />
            <button onClick={onResetHandler} style={{padding: "10px 25px", backgroundColor: "#04AA6D"}}> Reset </button>

        </>
    )
}


export default UseState;
