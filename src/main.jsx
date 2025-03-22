import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Routes, Route, Link } from 'react-router-dom';
import App from './App';
import HealthRunningTracker from './HealthRunningTracker';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/tracker' element={<HealthRunningTracker />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
