import React from "react";
import LayOut from "../../LayOut/LayOut";
import Logo from "../../../assets/amazon_logo2.png";
import { Link } from "react-router-dom";
import "./SignUp.css";

function SignUP() {
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
            <input type="email" id="signup_Email" />
          </div>

          <div>
            <label htmlFor="">Password</label>
            <input type="password" id="signup_Password" />
          </div>
          <button className="logIn_btn">Sign In</button>
        </form>
        <p>
          By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>

        <button className="signUP_btn">Creaet Your Amazon Account</button>
      </div>
    </section>
  );
}

export default SignUP;
