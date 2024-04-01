import React, {useState} from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from '../firebase';
import { useNavigate } from 'react-router-dom';


const Registration = () => {

    const navigate = useNavigate();

    const [userEmail, setUserEmail] = useState('');
    const [password, setPassword] = useState('');


    const createUser = (e) =>{
        e.preventDefault();
        createUserWithEmailAndPassword(auth, userEmail, password)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                console.log("successfull...",user);
                navigate('/login');
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });
    } 


  return (
    <form autoComplete='off'> 
      <div>
        <label>Username</label><br />
        <input type='text' name='uname' id='uname' placeholder='Username'/><br />
        <label>Email</label><br />
        <input type='email' name='email' id='email' placeholder='Email Id' value={userEmail} onChange={ (e)=>{setUserEmail(e.target.value)} }/><br />
        <label>Password</label><br />
        <input type='password' name='password' id='password' value={password} onChange={ (e)=>{setPassword(e.target.value)} }  placeholder='Password'/><br /><br />
        <input type='submit' value="Registration" onClick={createUser}/>
      </div>
    </form> 
  )
}

export default Registration