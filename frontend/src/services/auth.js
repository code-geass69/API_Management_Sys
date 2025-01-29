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
  const { data } = await API.post('/auth/login', credentials);
  return data;
};

// Fetch user profile (requires authentication token)
export const getUserProfile = async (token) => {
  const { data } = await API.get('/auth/profile', {
    headers: { Authorization: `Bearer ${token}` },
  });
  return data;
};
