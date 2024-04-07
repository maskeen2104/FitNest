
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter
import './index.css';
import MAIN2 from "./MAIN2.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router> {/* Wrap MAIN2 in Router */}
      <MAIN2 />
    </Router>
  </React.StrictMode>,
);