import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/home.css";

const Home = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const storedUsername = localStorage.getItem("username");
    if (token) {
        setIsLoggedIn(true);
        setUsername(storedUsername || "User"); 
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <div className="home-container">
      {/* Navbar */}
      <nav className="navbar">
        <h1 className="logo">API Manager</h1>

        {/* Right side navbar */}
        <div className="nav-links">
          {isLoggedIn ? (
            <>
              <span onClick={() => navigate("/dashboard")}>Dashboard</span>
              <span onClick={() => navigate("/api-list")}>Explore APIs</span>
              <div className="profile-menu">
                <img
                  src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?t=st=1738351999~exp=1738355599~hmac=42855f285509c6120f66f3d9f9b251675600f75c8a6044a9c0ba3e6144641e9c&w=740"
                  alt="Profile"
                  className="profile-pic"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                />

                {isDropdownOpen && (
                  <div className="dropdown">
                    <span onClick={() => navigate("/settings")}>Settings</span>
                    <span onClick={() => navigate("/edit-profile")}>Edit Profile</span>
                    <span onClick={handleLogout}>Logout</span>
                  </div>
                )}
              </div>
            </>
          ) : (
            <>
              <span onClick={() => navigate("/login")}>Login</span>
              <span onClick={() => navigate("/signup")}>Sign Up</span>
            </>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero">
        {isLoggedIn && (
          <h2 className="welcome-message">Welcome, {username}! 🎉</h2>
        )}
        <h1>Discover and Manage APIs Easily</h1>
        <p>The one-stop platform to explore, manage, and test APIs effortlessly.</p>

        <button onClick={() => navigate("/api-list")}>
          {isLoggedIn ? "Let's Explore" : "Get Started"}
        </button>
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
