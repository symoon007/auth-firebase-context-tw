import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProviders";
import Home from "./Home";

const Login = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const { signIn } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleInputValue = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  console.log(formData);

  const handleLogin = (event) => {
    event.preventDefault();

    setError("");
    setSuccess("");

    signIn(formData.email, formData.password)
      .then(() => {
        setSuccess("Login successful!");
        setFormData({
          email: "",
          password: "",
        });

        setTimeout(() => {
          setSuccess('')
        }, 5000);
        
      })
      .catch(() => {
        setError("Login Failed! Check Email or Password");
          setTimeout(() => {
            setError("");
          }, 5000);
      });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                value={formData.email}
                placeholder="email"
                name="email"
                className="input input-bordered"
                onChange={handleInputValue}
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                value={formData.password}
                placeholder="password"
                name="password"
                className="input input-bordered"
                onChange={handleInputValue}
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
            {success && <p>{success}</p>}
            {error && <p>{error}</p>}

            <span>
              Don&apos;t have an account?
              <Link to="/register">
                <button className="btn btn-link">Register</button>
              </Link>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
