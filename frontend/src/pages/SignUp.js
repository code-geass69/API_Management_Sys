import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signup } from '../services/auth';
import '../styles/signup.css';

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccessMessage('');

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      const data = await signup({
        name: formData.name,
        email: formData.email,
        password: formData.password,
      });

      console.log('User Registered:', data);
      setSuccessMessage('Sign-up successful! Redirecting to login...');

      // Delay navigation to login page for better UX
      setTimeout(() => {
        navigate('/login');
      }, 2500);
    } catch (err) {
      if (err.response?.status === 409) {
        setError('Email already exists. Please login or try another email.');
      } else {
        setError(err.response?.data?.message || 'Failed to register');
      }
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <h1>Sign Up</h1>
        {error && <p className="error-message">{error}</p>}
        {successMessage && <p className="success-message">{successMessage}</p>}
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required/>
          <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required/>
          <input type="password" name="confirmPassword" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleChange} required />
          <button type="submit">Sign Up</button>
        </form>
        <p>
          Already have an account?{' '}
          <span onClick={() => navigate('/login')} className="link">
            Login
          </span>
        </p>
        <p>
          <span onClick={() => navigate('/')} className="link">
            Continue Without Signing
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
