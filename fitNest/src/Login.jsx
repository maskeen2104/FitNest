import React from "react";
import "./Login.css"; // Ensure this CSS file includes the styles mentioned later
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <header className="header">
        <div className="logo-container">
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/d3798a9d0b87570754db1150e552bd05cfe9bd70eadfc7764a0f07862ac781ae?apiKey=6dc1b1172a21495ea8a406717dc53c8f&" alt="Logo" className="logo" />
          <span className="logo-text">FitNest</span>
        </div>
      </header>
      <div className="signup-container">
        <h1 className="signup-title">Welcome to FitNest</h1>
        <form>
          <div className="form-group">
            <input type="text" placeholder="Username" required className="form-input" />
          </div>
          <div className="form-group">
            <input type="password" placeholder="Password" required className="form-input" />
          </div>
          <div className="button-container"> {/* Button container for centering */}
            <button type="button" className="signup-button" onClick={() => navigate("/dashboard")}>Sign in</button>
            <button type="button" className="signup-button" onClick={() => navigate("/register")}>Create an account</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
