import { Link } from "react-router-dom";
import "./Auth.css";

function Login() {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Sign In</h2>

        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />

        <button>Login</button>

        <p>
          Don’t have an account?
          <Link to="/"> Create Account</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
