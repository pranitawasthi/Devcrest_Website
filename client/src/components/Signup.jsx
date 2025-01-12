import React from "react";
import { Link } from "react-router-dom";

export const Signup = () => {
  return (
    <>
    
    <div className="signup-container">
     
      <form className="signup-form">
        <label htmlFor="email" >Email:</label>
        <input type="email" name="email" id="email" className="input-field" placeholder="email"/><br />
        
        <label htmlFor="username">Username:</label>
        <input type="text" name="username" id="username" className="input-field" placeholder="username"/><br />
        
        <label htmlFor="password">Password:</label>
        <input type="password" name="password" id="password" className="input-field" placeholder="password"/><br />
        
        <button type="submit" className="submit-button">Sign Up</button>
      </form>
      <p>
        Already have an account? <Link to="/login" className="login-link">Login</Link>
      </p>
    </div>
    </>
  );
};
