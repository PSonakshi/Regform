import React from 'react';
import './Success.css';
import { Link } from 'react-router-dom';

function Success() {
  return (
    <div className="success-container">
      <div className="success1">
        <div className="success-box">
          <h1> Login Successful! </h1>
          <p>Thank you for logging in. You can now access our exclusive features.</p>
          <Link to="/" className="btn btn-primary">
            Go to Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Success;