// App.jsx
import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Login from './Login';
import Landing from './Landing'; // Assuming you split Landing content into a separate component
import Register from './Register';

import PushUps from './challenge/challenge1.jsx'
import AnotherPage from './challenge/challenge1Video.jsx'

import PushUps from './challenge/challenge1.jsx';
import Dashboard from './Dashboard.jsx';

import './App.css';

const App = () => {
  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path = "/challenge1" element = {<PushUps />} />

        <Route path = "/anotherPageChallenge1" element = {< AnotherPage />} />

        <Route path = "/dashboard" element = {<Dashboard />} />

      </Routes>
    </div>
  );
};

export default App;
