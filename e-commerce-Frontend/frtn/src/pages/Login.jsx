import React, { useState } from "react";
import axios from "axios";
// import { useTheme } from "../context/ThemeContext";
// import { Link} from "react-router-dom";
import { toast } from "react-toastify";


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/api/users/login", {
        email,
        password,
      });

    
      localStorage.setItem("token", response.data.token); // Save token
      toast.success("✅ Login successful",{autoClose:2500,
        closeButton:false,
      });
    } catch (error) {
      toast.error(`❌ ${error.response?.data?.message || "Login failed"}`,{ autoClose:3000,
        closeButton:false,
       })
    }
  };

return (
  <div className="card">
    <div className="login-page">
      <div className="login-box">
        <h2>Welcome Back 👋</h2>
        <p>Please login to your account</p>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit">Login</button>
        </form>
        <p className="footer-note">Don't have an account? <a href="/register">Register</a></p>
      </div>
    </div>
    </div>
  );


}

export default Login;
