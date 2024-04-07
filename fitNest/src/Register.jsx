import * as React from "react";
import './Register.css'

function Header() {
  return (
    <header className="header">
      <div className="logo-container">
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/d3798a9d0b87570754db1150e552bd05cfe9bd70eadfc7764a0f07862ac781ae?apiKey=6dc1b1172a21495ea8a406717dc53c8f&" alt="FitNest logo" className="logo" />
        <h1 className="logo-text">FitNest</h1>
      </div>
      <div className="login-button">
        <span className="login-text">Log in</span>
      </div>
    </header>
  );
}

function SignupForm() {
  return (
    <main className="signup-container">
      <h2 className="signup-title">Create a Wellness account</h2>
      <form>
        <div className="form-group">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="form-input"
            placeholder="Enter your name"
            aria-label="Enter your name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            type="text"
            id="username"
            className="form-input"
            placeholder="Enter your username"
            aria-label="Enter your username"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="form-input"
            placeholder="Enter your password"
            aria-label="Enter your password"
          />
        </div>
        <button type="submit" className="signup-button">
          Sign up
        </button>
      </form>
    </main>
  );
}

function Register() {
  return (
      <div className="container">
        <Header />
        <SignupForm />
      </div>
  );
}
export default Register;