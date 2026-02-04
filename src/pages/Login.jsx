import { useState } from "react";
import api from "../api/api";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/login", {
        email,
        password,
      });

      if (res.data === "Login Successful") {
        navigate("/dashboard");
      } else {
        alert(res.data);
      }
    } catch (error) {
      alert("Invalid email or password");
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <h2>Login</h2>

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      <button type="submit">Login</button>

      <p>
        New user? <Link to="/register">Register</Link>
      </p>
    </form>
  );
}

export default Login;
