import React from 'react';

import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Challenge1 from './pages/challenge1';
import Challenge2 from './pages/challenge2';
import Challenge3 from './pages/challenge3';
import Challenge5 from './pages/challenge5';
import Challenge4 from './pages/challenge4';

function App() {
  return (
    <Routes>
      <Route path="/challenge1" element={<Challenge1 />} />
      <Route path="/challenge2" element={<Challenge2 />} />
      <Route path="/challenge3" element={<Challenge3 />} />
      <Route path="/challenge4" element={<Challenge4 />} />
      <Route path="/challenge5" element={<Challenge5 />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
