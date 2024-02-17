import React, { useState } from "react";
import "./SignInScreen.css";
import HomeScreen from "../HomeScreen";

const SignInScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "kkailas113@gmail.com" && password === "12345") {
      setLoggedIn(true);
     // console.log("Email matches password. Redirecting to homepage...");
      //console.log("kailas");
    } else {
      alert("Please enter correct email and password");
     // console.log("Email does not match password.");
    }
  };

  // Render SignInScreen if not logged in, else render HomeScreen
  return (
    <div>
      {!loggedIn ? (
        <div className="signinScreen">
          <form onSubmit={handleSubmit}>
            <h1>Sign In</h1>
            <input
              value={email}
              placeholder="Email"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              value={password}
              placeholder="Password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Sign In</button>

            <h4>
              <span className="signinScreen_gray">New to Netflix? </span>
              <span className="signinScreen_link">Sign Up now</span>
            </h4>
          </form>
        </div>
      ) : (
        <HomeScreen />
      )}
    </div>
  );
};

export default SignInScreen;
