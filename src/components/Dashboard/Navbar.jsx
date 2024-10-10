import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');  // Store search query
  const [error, setError] = useState(null);  // Store error if any
  const navigate = useNavigate();

  const handleSearch = async () => {
    if (searchQuery.trim()) {
      try {
        // API call to search for anime based on searchQuery
        const response = await axios.get(`https://api.jikan.moe/v4/anime?q=${searchQuery}&limit=1`);
        const animeData = response.data.data[0]; // Get the first result from the search

        if (animeData) {
          // Navigate to the AnimeDetail page, passing anime data in state
          navigate(`/anime/${animeData.mal_id}`, { state: { anime: animeData } });
        } else {
          setError('No anime found');
        }
      } catch (error) {
        console.error('Error fetching search results:', error);
        setError('Error fetching anime. Please try again.');
      }
    } else {
      setError('Please enter a valid search query');
    }
  };

  return (
    <nav className="bg-emerald-200 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/footer">
          <img src='logo.jpeg' alt="Logo" className="h-10" />
          <h1 className='text-2xl font-bold absolute top-5 left-14'>ANI WATCH</h1>
        </Link>

        {/* Search Bar */}
        <div className="flex items-center ml-auto">
          <input
            type="text"
            placeholder="Search..."
            className="p-2 border border-black rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            style={{ width: '300px', height: '40px' }}
            value={searchQuery}  // Set input value from state
            onChange={(e) => setSearchQuery(e.target.value)}  // Update state on input change
          />
          <button 
            className="bg-blue-500 text-black p-2 rounded-r-lg hover:bg-blue-600" 
            style={{ height: '40px' }}
            onClick={handleSearch}  // Handle search click
          >
            Search
          </button>
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-4 mr-5 ml-5">
          <li>
            <Link to="/home" className="text-black hover:underline">Home</Link>
          </li>
          <li>
            <Link to="/register" className="text-black hover:underline">Register</Link>
          </li>
          <li>
            <Link to="/" className="text-black hover:underline">Login</Link>
          </li>
        </ul>
      </div>

      {/* Error Message */}
      {error && <p className="text-red-500 text-center mt-2">{error}</p>}
    </nav>
  );
};

export default Navbar;
