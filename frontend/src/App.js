import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Placements from './pages/Placements';
import Academics from './pages/Academics';
// Add other pages when ready: Placements, Academics, etc.

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/Placements" element={<Placements/>}/>
        <Route path="/Academics" element={<Academics/>}/>
        {/* Add other routes here */}
      </Routes>
    </Router>
  );
}


export default App;
