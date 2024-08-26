import React, { useState, useEffect } from "react";
import './registration.css';
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from "firebase/auth";
import{auth } from "../firebase"
import { getFirestore, collection, addDoc } from "firebase/firestore";

function Registration() {
  const navigate = useNavigate();

  const initialValues = { username: "", email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [showError, setShowError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    setShowError(true);
     try{
     await  createUserWithEmailAndPassword(auth, email, password);
     const user = auth.currentUser;
     console.log(user);
    } catch(error){
      console.log(error.message);
    }
  };

  const handleLogin = () => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      navigate('/success', { replace: true });
    }
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username) {
      errors.username = "Username is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be at least 4 characters";
    } else if (!/(?=.*[a-z])/.test(values.password)) {
      errors.password = "Password must contain at least one lowercase letter";
    } else if (!/(?=.*[A-Z])/.test(values.password)) {
      errors.password = "Password must contain at least one uppercase letter";
    } else if (!/(?=.*\d)/.test(values.password)) {
      errors.password = "Password must contain at least one number";
    } else if (!/(?=.*[!@#$%^&*_+=-{};':"\\|,.<>\/?])/.test(values.password)) {
      errors.password = "Password must contain at least one special character";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    return errors;
  };

  return (
    <div className="container">
    {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div className="ui message success"><p>successfull for login click again</p></div>
      ) : showError && (
        <div className="ui message error">
          <p>There are errors in the form. Please check the fields.</p>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <h1>Login Form</h1>
        <div className="ui divider"></div>
        <div className="ui form">
          <div className="field">
            <label>Username</label>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formValues.username}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.username}</p>
          <div className="field">
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={formValues.email}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.email}</p>
          <div className="field password-field">
            <label>Password</label>
            <div className="password-container">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={formValues.password}
                onChange={handleChange}
              />
              <button
                type="button"
                className="toggle-password"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>
          <p>{formErrors.password}</p>
        <button className="fluid ui button blue"  onClick={handleSubmit}>Sign Up</button>
        <button className="fluid ui button blue" onClick={handleLogin}>Login</button>
      </div>
    </form>
  </div>
);
}



export default Registration;