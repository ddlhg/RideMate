import React from "react";
import "./Registerpage.css";

function Registerpage() {
  return (
    <div className="register-page">
      <h1>
        <a href="/">RideMate</a>
      </h1>
      <form className="register-form">
        <h1>Register</h1>
        <p className="register-info">
          Please fill this registration form out to create an account.
        </p>
        <label for="First Name" className="register-label">
          <b>First Name</b>
        </label>
        <input
          type="text"
          className="input-field-register"
          placeholder="Type your first name"
          name="first name"
          required
        />
        <label for="First Name" className="register-label">
          <b>Last Name</b>
        </label>
        <input
          type="text"
          className="input-field-register"
          placeholder="Type your last name"
          name="last name"
          required
        />
        <label for="Last Name" className="register-label">
          <b>Email</b>
        </label>
        <input
          type="text"
          className="input-field-register"
          placeholder="Type your email"
          name="email"
          required
        />
        <label for="First Name" className="register-label">
          <b>Password</b>
        </label>
        <input
          type="text"
          className="input-field-register"
          placeholder="Type your password"
          name="password"
          required
        />
      </form>
      <button className="submit-button">Create Account</button>
      <div className="link-to-register">
        <p className="login-link">
          If you have an account, click <a href="/login"> here</a>
        </p>
      </div>
    </div>
  );
}

export default Registerpage;
