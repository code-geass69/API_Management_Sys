import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../services/auth';
import '../styles/signup.css'; // Reusing styles from signup

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const data = await login(formData);        
        localStorage.setItem('token', data.token); 
        localStorage.setItem('username', data.name);
        navigate('/'); 
    } catch (err) {
        setError(err.response?.data?.message || 'Invalid email or password');
    }
};

  return (
    <div className="signup-container">
      <div className="signup-card">
        <h1>Login</h1>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <form onSubmit={handleSubmit}>
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
          <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
          <button type="submit">Login</button>
        </form>
        <p>
          Don't have an account?{' '}
          <span onClick={() => navigate('/signup')} className="link">
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
