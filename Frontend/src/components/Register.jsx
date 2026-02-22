import { useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.post("/auth/register", form);
      alert("Registered successfully");
      navigate("/");
    } catch (err) {
      alert("Registration failed");
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Enter Name"
          onChange={handleChange}
        />
        <input
          name="email"
          placeholder="Enter Email"
          onChange={handleChange}
        />
        <input
          name="password"
          type="password"
          placeholder="Enter Password"
          onChange={handleChange}
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;