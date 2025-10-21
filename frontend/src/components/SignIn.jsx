import React from "react";
import '../styles/SignIn.css';
import { useNavigate } from "react-router-dom";

function SignIn() {

    const navigate = useNavigate();

    const handleNavigate = (e) => {
        e.preventDefault();
        navigate('/signup');
    }

    return (
        <div className="sign-in-container">
            <form className="sign-in-form">
                <h2>Log In</h2>
                <input type="text" placeholder="Email/Phone"/>
                <input type="password" placeholder="Password"/>
                <button className="sign-in-button" type="submit">Sign In</button>
                <a href="/">Forgot Password?</a>
                <hr />
                <button className="create-account-button" onClick={handleNavigate}>Create New Account</button>
            </form>
        </div>
    );
}

export default SignIn;