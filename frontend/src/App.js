import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './pages/SignUp';
// import Home from './pages/Home';
// import Login from './pages/Login';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignUp />} />
        {/* <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
