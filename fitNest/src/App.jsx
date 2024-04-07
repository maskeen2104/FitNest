// App.jsx
import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Login from './Login';
import Landing from './Landing'; // Assuming you split Landing content into a separate component

import './App.css';

const App = () => {
  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/register" element={<Register />} /> */}
      </Routes>
    </div>
  );
};

export default App;
