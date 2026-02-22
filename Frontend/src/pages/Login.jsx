import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../css/Login.css";
import API from "../services/api";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("/auth/login", {
        email,
        password,
      });

      localStorage.setItem("token", res.data.token);
      navigate("/dashboard");
    } catch (err) {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-card">
        <img src="/Assets/idms_logo.svg" alt="logo" />
        <div className="login-title"></div>
        <div className="login-subtitle">Welcome to HR Admin Panel</div>

        <form onSubmit={handleLogin}>
          <div className="login-input-group">
            <label>User Name</label>
            <input
              type="email"
              placeholder="Enter User Name"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="login-input-group">
            <label>Enter Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="login-options">
            <div>
              <input type="checkbox" /> Show Password
            </div>
            <div>
              <input type="checkbox" /> Remember Me
            </div>
          </div>

          <button type="submit" className="login-btn">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
export default Login;
