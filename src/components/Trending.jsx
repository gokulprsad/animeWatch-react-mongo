import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Trending = () => {
    const [trend, setTrend] = useState([]);
    const [error, setError] = useState(null);
    const navigate = useNavigate(); // Correctly call useNavigate

    useEffect(() => {
        async function apicall() {
            try {
                const res = await axios.get('https://api.jikan.moe/v4/top/anime');
                setTrend(res.data.data);
                setError(null);
            } catch (error) {
                // setError('An error occurred while fetching the data please reload the page');
            }
        }

        apicall();
    }, []); 
    
    const handleCardClick = (anime) => {
        navigate(`/anime/${anime.mal_id}`, { state: { anime } }); // Navigate to detail page with anime data
    };

    return (
        <div className="overflow-x-auto scrollbar-hide p-4 mt-4 ">
            <h1 className='text-xl font-bold text-gray-800 bg-slate-200 mb-3 rounded-2xl pl-3'>TRENDINGS</h1>
            {error && <p className="text-red-500">{error}</p>}
            <div className="flex space-x-4 ">
                {trend && trend.length > 0 && trend.slice(0, 10).map((item, index) => (
                    <div 
                        key={index} 
                        onClick={() => handleCardClick(item)} // Pass the item to the click handler
                        className="min-w-[200px] h-[350px] bg-cyan-500 rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 cursor-pointer" // Added cursor-pointer for better UX
                    >
                        <img 
                            src={item.images.jpg.image_url} 
                            alt={item.title}
                            className="w-full h-[200px] object-cover"
                        />
                        <div className="p-4">
                            <h3 className="text-black text-lg font-semibold truncate hover:text-black">{item.title}</h3>
                            <p className="text-black text-sm">Rank: {item.rank}</p>
                                <p className="text-black text-xs truncate">Score: {item.score}</p> 
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Trending;
