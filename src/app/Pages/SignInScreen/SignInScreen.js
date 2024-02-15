import React, { useState } from "react";
import "./SignInscreen.css";
import {
  createUserWithEmailAndPassword
  
} from "firebase/auth";
import { auth } from "../../firebase";

const SignInScreen = () => {
  const [email,setEmail] =useState("")
  const [password,setPassword]= useState("")
  
  const register = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(
      auth, email, password
      
    )
      .then((authUser) => {
        console.log(authUser);
     
      })
      .catch((error) => {
        alert(error.message);
      });
  };

 
  return (
    <div className="signinScreen">
      <form>
        <h1>Sign In</h1>
        <input value={email} placeholder="Email" type="email" onChange={(e) => setEmail(e.target.value)}/>
        <input value={password} placeholder="Password" type="password"onChange={(e) => setPassword(e.target.value)}/>
        <button type="submit" >
          Sign In
        </button>

        <h4>
          <span className="signinScreen_gray">New to Netflix? </span>
          <span className="signinScreen_link" onClick={register}>
            Sign Up now
          </span>
        </h4>
      </form>
    </div>
  );
};


//export default SignInScreen;
//export { SignInScreen };
export default SignInScreen;
