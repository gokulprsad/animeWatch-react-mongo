import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';  // Hook to get the current anime ID from the route

const Episodes = () => {
    const { animeId } = useParams();  // Get anime ID from the URL parameters
    const [episodes, setEpisodes] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function apiCall() {
            try {
                const res = await axios.get(`https://api.jikan.moe/v4/anime/${animeId}/episodes`);  // Fetch episodes for the current anime
                setEpisodes(res.data.data);  // Store the episode data
            } catch (error) {
                setError('Failed to fetch episodes');
                console.error('Error fetching episodes:', error);
            }
        }

        apiCall();
    }, [animeId]);  // Re-run effect when the animeId changes

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Episodes</h2>
            
            {error && <p className="text-red-500">{error}</p>}
            
            {/* Episodes Container */}
            <div className="grid grid-cols-10 gap-2">
                {episodes.length > 0 ? (
                    episodes.map((episode, index) => (
                        <button 
                            key={index} 
                            className="bg-blue-500 text-white text-sm px-2 py-1 rounded-md hover:bg-blue-700 transition-all"
                        >
                            {episode.title || `Episode ${index + 1}`}  {/* Episode title */}
                        </button>
                    ))
                ) : (
                    <p>No episodes available.</p>
                )}
            </div>
        </div>
    );
}

export default Episodes;
