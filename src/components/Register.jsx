import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProviders";

const Register = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const { user, createUser } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };


  const handleRegister = (event) => {
    event.preventDefault();
    
    setError("");
    setSuccess("");
    createUser(formData.email, formData.password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setSuccess("User Created  Successfully!");
        setFormData({
          name: "",
          email: "",
          password: "",
        });
         setTimeout(() => {
           setSuccess("");
         }, 5000);
      })
      .catch((error) => {
        console.log(error.message);
        setError("This email already used in another account");
          setTimeout(() => {
            setError("");
          }, 5000);
      });
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Register now!</h1>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                value={formData.name}
                placeholder="Your Name"
                name="name"
                className="input input-bordered"
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                value={formData.email}
                placeholder="Email"
                name="email"
                className="input input-bordered"
                onChange={handleInputChange}
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
                placeholder="Password"
                name="password"
                className="input input-bordered"
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
            {success && <p>{success}</p>}
            {error && <p>{error}</p>}
            <span>
              Already have an account?
              <Link to="/login">
                <button className="btn btn-link">Login</button>
              </Link>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
