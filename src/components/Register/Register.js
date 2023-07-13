import React from "react";
import "./Register.css";

function Register() {
  return (
    <div className="register-page">
      <form className="register-form">
        <h1>Register</h1>
        <p className="register-info">Please fill this registration form out to create an account.</p>
        <label for="First Name" className="register-label">
          <b>First Name</b>
        </label>
        <input type="text" className="input-field-register" placeholder="Type your first name" name="first name" required />
        <label for="First Name" className="register-label">
          <b>Last Name</b>
        </label>
        <input type="text"  className="input-field-register" placeholder="Type your last name" name="last name" required />
        <label for="Last Name" className="register-label">
          <b>Email</b>
        </label>
        <input type="text" className="input-field-register" placeholder="Type your email" name="email" required />
        <label for="First Name" className="register-label">
          <b>Password</b>
        </label>
        <input type="text" className="input-field-register" placeholder="Type your password" name="password" required />
      </form>
      <button className="submit-button">Create Account</button>
    </div>
  );
}

export default Register;
