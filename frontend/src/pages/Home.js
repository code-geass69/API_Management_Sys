import React, { useState }  from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/home.css';

const Home = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="home-container">
      {/* Navbar */}
      <nav className="navbar">
        <h1 className="logo">API Manager</h1>
        <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>☰</button>
        <div className={`nav-links ${isOpen ? "open" : ""}`}>
          <span onClick={() => navigate("/login")}>Login</span>
          <span onClick={() => navigate("/signup")}>Sign Up</span>
          <span onClick={() => navigate("/api-list")}>Explore APIs</span>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero">
        <h1>Discover and Manage APIs Easily</h1>
        <p>The one-stop platform to explore, manage, and test APIs effortlessly.</p>
        <button onClick={() => navigate('/signup')}>Get Started</button>
      </header>

      {/* Features Section */}
      <section className="features">
        <h2>Why Choose Our API Manager?</h2>
        <div className="feature-list">
          <div className="feature">
            <h3>🔎 Search APIs</h3>
            <p>Find the best APIs across different categories quickly.</p>
          </div>
          <div className="feature">
            <h3>📄 API Documentation</h3>
            <p>Access well-structured documentation for seamless integration.</p>
          </div>
          <div className="feature">
            <h3>🔑 Token Management</h3>
            <p>Secure and manage your API keys effortlessly.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 API Management System. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
