import React from 'react';
import './Login.css';
import rideshareuser from "../images/rideshare-user.png";

function Login() {
    return (
        <div className="login-page">
            <h1>
        <a href="/">RideMate</a>
      </h1>
            <div className="image-container">
                <img className="floating-image" src={rideshareuser} alt="Floating" />
            </div>
            <div className="login-container">
                <h2>Login</h2>
                <form>
                    <div className="input-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" placeholder='Username'/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" placeholder='Password'/>
                    </div>
                    <div className="button-group">
                        <a href="//" className="login-button">Login</a>
                        <p className='create-account-link'>If you want to make an account click<a href="/register" className="signup-button"> here</a></p>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
