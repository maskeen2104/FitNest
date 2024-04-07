// App.jsx
import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Login from './Login';
import Landing from './Landing'; // Assuming you split Landing content into a separate component
import Register from './Register';
import Explore from './Explore';

import PushUps from './challenge/challenge1.jsx'
import PullUps from './challenge/challenge2.jsx'

import AnotherPage from './challenge/challenge1Video.jsx'
import AnotherPageChallenge2 from  './challenge/anotherPageChallenge2.jsx'
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
        <Route path = "/challenge2" element = {<PullUps />} />

        <Route path = "/anotherPageChallenge1" element = {< AnotherPage />} />
        <Route path = "/anotherPageChallenge2" element = {< AnotherPageChallenge2 />} />
        <Route path = "/dashboard" element = {<Dashboard />} />
        <Route path = "/explore" element = {<Explore/>} />

      </Routes>
    // </div>
  );
};

export default App;
