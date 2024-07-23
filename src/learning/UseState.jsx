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

// export default function UserState() { 
//     const [form, setForm] = useState({ 
//       firstName: 'Luke', 
//       lastName: 'Jones', 
//       email: 'lukeJones@sculpture.com', 
//     }); 
  
//     return ( 
//       <> 
//         <label> 
//           First name: 
//           <input 
//             value={form.firstName} 
//             onChange={e => { 
//               setForm({ 
//                 ...form, 
//                 firstName: e.target.value 
//               }); 
//             }} 
//           /> 
//         </label> 
//         <label> 
//           Last name: 
//           <input 
//             value={form.lastName} 
//             onChange={e => { 
//               setForm({ 
//                 ...form, 
//                 lastName: e.target.value 
//               }); 
//             }} 
//           /> 
//         </label> 
//         <label> 
//           Email: 
//           <input 
//             value={form.email} 
//             onChange={e => { 
//               setForm({ 
//                 ...form, 
//                 email: e.target.value 
//               }); 
//             }} 
//           /> 
//         </label> 
//         <p> 
//           {form.firstName}{' '} 
//           {form.lastName}{' '} 
//           ({form.email})
//         </p> 
//       </> 
//     ); 
//   } 