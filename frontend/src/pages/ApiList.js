import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/api-list.css"; // Custom styles

const ApiList = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [apis, setApis] = useState([]);
  const [filteredApis, setFilteredApis] = useState([]);
  const [categories, setCategories] = useState([]);

  // Mock API Data (Replace with actual API call)
  useEffect(() => {
    const mockApis = [
      { id: 1, name: "OpenWeather", category: "Weather", description: "Get real-time weather data" },
      { id: 2, name: "Stripe", category: "Payments", description: "Process online payments easily" },
      { id: 3, name: "Twilio", category: "Communication", description: "Send SMS and make calls" },
      { id: 4, name: "Google Maps", category: "Location", description: "Integrate maps into your app" },
      { id: 5, name: "Spotify", category: "Music", description: "Access music streaming data" },
    ];

    const uniqueCategories = [...new Set(mockApis.map(api => api.category))];

    setApis(mockApis);
    setFilteredApis(mockApis);
    setCategories(uniqueCategories);
  }, []);

  // Search Functionality
  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    setFilteredApis(apis.filter(api => api.name.toLowerCase().includes(query)));
  };

  return (
    <div className="api-list-container">
      {/* Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search APIs..."
          value={searchQuery}
          onChange={handleSearch}
        />
      </div>

      {/* Top APIs Section */}
      <section className="top-apis">
        <h2>🔥 Top APIs</h2>
        <div className="api-cards">
          {filteredApis.map(api => (
            <div key={api.id} className="api-card">
              <h3>{api.name}</h3>
              <p>{api.description}</p>
              <button onClick={() => navigate(`/api/${api.id}`)}>View Details</button>
            </div>
          ))}
        </div>
      </section>

      {/* Top Categories */}
      <section className="top-categories">
        <h2>📂 Top Categories</h2>
        <div className="category-list">
          {categories.map(category => (
            <div key={category} className="category-card">
              <h3>{category}</h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ApiList;
