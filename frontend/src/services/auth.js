import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000', // Replace with your backend server's base URL
});

// Register a new user
export const signup = async (userData) => {
  const { data } = await API.post('/auth/signup', userData);
  return data;
};

// Login a user
export const login = async (credentials) => {
  try {
      const { data } = await API.post('/auth/login', credentials);
      console.log("Login API Response:", data);  // ✅ Log the response
      return data;
  } catch (error) {
      console.error("Login API Error:", error.response?.data || error.message);
      throw error;
  }
};


// Fetch user profile (requires authentication token)
export const getUserProfile = async (token) => {
  const { data } = await API.get('/auth/profile', {
    headers: { Authorization: `Bearer ${token}` },
  });
  return data;
};

