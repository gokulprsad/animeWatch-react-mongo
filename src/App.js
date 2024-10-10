// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import Register from './components/Register';
import AnimeDetail from './components/AnimeDetails';
import Footer from './components/Footer';

function App() {
  return (
    <div className='bg-teal-100'>
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />       {/* Login page */}
        <Route path="/home" element={<Home />} />    {/* Home page after login */}
        <Route path="/register" element={<Register />} />  {/* Register page */}
        <Route path="/anime/:id" element={<AnimeDetail />} /> {/* Anime detail page */}
        <Route path="/footer" element={<Footer />} /> {/* Anime detail page */}
      </Routes>
    </Router>
    </div>
  );
}

export default App;
