import { useState } from "react";
import axios from "../api/axios";
import { toast } from "react-toastify";


function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("Sending:", {name,email,password});
      
      const response = await axios.post("http://localhost:8080/api/users/register", {
        name,
        email,
        password,
      });

      
      localStorage.setItem("token", response.data.token); // Save token
      toast.success("✅ Registration successful", { autoClose: 2500,
        closeButton: false,
      });
    } catch (error) {
      toast.error(`❌ ${error.response?.data?.message || "Registration failed"}`, { autoClose: 3000,
        closeButton:false,
       });
    }
  };

  return (
    <div className="register-page">
      <div className="register-box">
        <h2>Create Account 🎉</h2>
        <p>Register below to get started</p>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

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
              placeholder="Create a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit">Register</button>
        </form>
        <p className="footer-note">
          Already have an account? <a href="/login">Login</a>
        </p>
      </div>
    </div>
  );
}

export default Register;
