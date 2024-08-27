
import React, { useState, useEffect } from "react";
import './registration.css';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase";
import { setDoc, doc } from "firebase/firestore";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'; 

function Registration() {
  const navigate = useNavigate();

  const initialValues = { username: "", email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [showError, setShowError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validate(formValues);
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      setIsSubmit(true);
      setShowError(false);

      try {
        const userCredential = await createUserWithEmailAndPassword(auth, formValues.email, formValues.password);
        const user = userCredential.user;

        if (user) {
          await setDoc(doc(db, "Users", user.uid), {
            username: formValues.username,
            email: formValues.email,
          });

          toast.success("Registration successful! You can now log in.", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
          });

        
        }
      } catch (error) {
        toast.error(`Registration failed: ${error.message}`, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
        });
      }
    } else {
      setShowError(true);
      toast.error("Please correct the errors in the form.", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
      });
    }
  };

  const handleLogin = (e) => {
    e.preventDefault(); 
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      navigate('/success', { replace: true });
    } else {
      toast.error("Error! check again.", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
      });
    }
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
     
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
      errors.email = "Invalid email format!";
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
      errors.password = "Password cannot exceed 10 characters";
    }
    return errors;
  };

  return (
    <div className="container">
      {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div className="ui message success"><p>Registration successful! You can now log in.</p></div>
      ) : showError && (
        <div className="ui message error">
          <p>There are errors in the form. Please correct them.</p>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <h1>Registration Form</h1>
        <div className="ui divider"></div>
        <div className="ui form">
          <div className="field">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Username"
              value={formValues.username}
              onChange={handleChange}
              aria-label="Username"
            />
            <p className="error-message">{formErrors.username}</p>
          </div>
          <div className="field">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Email"
              value={formValues.email}
              onChange={handleChange}
              aria-label="Email"
            />
            <p className="error-message">{formErrors.email}</p>
          </div>
          <div className="field password-field">
            <label htmlFor="password">Password</label>
            <div className="password-container">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                placeholder="Password"
                value={formValues.password}
                onChange={handleChange}
                aria-label="Password"
              />
              <button
                type="button"
                className="toggle-password"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
            <p className="error-message">{formErrors.password}</p>
          </div>
          <button className="fluid ui button blue" type="submit">Sign Up</button>
          <button
            type="button" 
            className="fluid ui button blue"
            onClick={handleLogin}
          >
            Login
          </button>
        </div>
      </form>

      <ToastContainer className="toast-container-custom" />
    </div>
  );
}

export default Registration;
