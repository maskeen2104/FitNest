import React from 'react'
import ReactDOM from 'react-dom/client'
import MAIN2 from './MAIN2.jsx'
import { BrowserRouter } from 'react-router-dom';

import App from './App'

import './index.css'
import Register from './Register.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);