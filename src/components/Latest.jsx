import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Latest = () => {
    const [animeList, setAnimeList] = useState([]);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await axios.get('https://api.jikan.moe/v4/top/anime');
                setAnimeList(res.data.data.slice(0, 40)); // Limit to 40 items (8 per row, 5 rows)
                setError(null)
            } catch (error) {
                // setError('Failed to fetch anime data');
                console.error(error);
            }
        }

        fetchData();
    }, []);

    const handleCardClick = (animeId) => {
        navigate(`/anime/${animeId}`);  // Navigate to the anime details page
    };

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4 bg-slate-200 rounded-xl pl-3">Latest Anime</h2>
            
            {error && <p className="text-red-500">{error}</p>}
            
            <div className="grid grid-cols-8 gap-4">
                {animeList.length > 0 ? (
                    animeList.map((anime) => (
                        <div 
                            key={anime.mal_id} 
                            className="relative bg-white rounded-lg shadow-md transition-transform transform hover:scale-105 cursor-pointer"
                            onClick={() => handleCardClick(anime.mal_id)} // Navigate on card click
                        >
                            <img 
                                src={anime.images.jpg.image_url} 
                                alt={anime.title} 
                                className="w-full h-48 object-cover mb-2 rounded-t-lg"
                            />
                            <h3 className="text-lg font-semibold text-gray-700 text-center">{anime.title}</h3>

                            {/* Hovered Details Section */}
                            <div className="absolute inset-0 bg-gray-800 bg-opacity-90 opacity-0 hover:opacity-100 flex flex-col justify-center items-center text-white transition-opacity duration-300 p-4 rounded-lg">
                                <p className="mb-2 text-center">{anime.synopsis ? anime.synopsis.slice(0, 60) + '...' : 'No synopsis available'}</p>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>Loading anime...</p>
                )}
            </div>
        </div>
    );
}

export default Latest;
