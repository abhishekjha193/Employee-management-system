import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";
import "../css/login.css";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await API.post("/auth/login", formData);

      localStorage.setItem("token", res.data.token);
      navigate("/dashboard");

    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        
        <img
          src="/assets/idms_logo.svg"
          alt="IDMS Logo"
          className="logo"
        />

        <h3>Welcome to HR Admin Panel</h3>

        {error && <p className="error">{error}</p>}

        <form onSubmit={handleSubmit}>
          
          <label>User Name</label>
          <input
            type="email"
            name="email"
            placeholder="Enter User Name"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label>Enter Password</label>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Enter Password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <div className="options">
            <div>
              <input
                type="checkbox"
                onChange={() => setShowPassword(!showPassword)}
              />
              <span> Show Password</span>
            </div>

            <div>
              <input type="checkbox" />
              <span> Remember Me</span>
            </div>
          </div>

          <button type="submit">Login</button>

        </form>
      </div>
    </div>
  );
}

export default Login;