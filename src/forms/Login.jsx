import React, {useState} from 'react';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';



const Login = () => {

  const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const createPassword = (e) =>{
      e.preventDefault();
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log(user);
          navigate('/home');
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
    }

  return (
    <form>
      <div>
        <label>Email</label><br />
        <input type='email' name='email' id='email' placeholder='Email Id' value={email} onChange={ (e)=>{setEmail(e.target.value)} }/><br />
        <label>Password</label><br />
        <input type='password' name='password' id='password' placeholder='Password' value={password} onChange={ (e)=>{setPassword(e.target.value)} }/><br /><br />
        <input type='submit' value="Login" onClick={createPassword}/>
      </div>
    </form>
  )
}

export default Login