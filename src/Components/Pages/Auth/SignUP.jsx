import React, { useState } from "react";
import LayOut from "../../LayOut/LayOut";
import Logo from "../../../assets/amazon_logo2.png";
import { Link } from "react-router-dom";
import "./SignUp.css";
import { auth } from "../../../Utility/firebas";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

function SignUP() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // console.log(email,password)

  const authHandler = async (e) => {
    e.preventDefault();
    // console.log(e.target.className);
    if ((e.target.className = "logIn_btn")) {
      signInWithEmailAndPassword(auth, email, password)
        .then((userInfo) => console.log(userInfo))
        .catch((err) => console.log(err));

      console.log(signInWithEmailAndPassword);
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userInfo) => console.log(userInfo))
        .catch((err) => console.log(err));
    }
  };

  return (
    <section className="signUp_Container">
      <Link to="/">
        <img src={Logo} alt="Logo" />
      </Link>

      <div className="SignUP_Box">
        <h1>Sign In</h1>
        <form action="" className="signUP_Form">
          <div>
            <label htmlFor="">E-mail</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="signup_Email"
            />
          </div>

          <div>
            <label htmlFor="">Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="signup_Password"
            />
          </div>
          <button type="submit" onClick={authHandler} className="logIn_btn">
            Sign In
          </button>
        </form>
        <p>
          By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>

        <button type="submit" onClick={authHandler} className="signUP_btn">
          Creaet Your Amazon Account
        </button>
      </div>
    </section>
  );
}

export default SignUP;
