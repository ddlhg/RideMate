import React from 'react';
import './Login.css';
import rideshareuser from "./images/rideshare-user.png";

function Login() {

    return (
        <div className="login-page">
            <div className="image-container">
                <img className="floating-image" src={rideshareuser} alt="Floating" />
            </div>
            <div className="login-container">
                <h2>Login</h2>
                <form>
                    <div className="input-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" />
                    </div>
                    <div className="button-group">
                        <a href="//" className="login-button">Login</a>
                        <a href="//" className="signup-button">Sign Up</a>
                    </div>
                </form>
            </div>
        </div>
    );

}

export default Login;
