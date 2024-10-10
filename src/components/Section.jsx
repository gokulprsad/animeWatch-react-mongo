import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Section = () => {
    const [animeData, setAnimeData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://api.jikan.moe/v4/top/anime');
                setAnimeData(response.data.data.slice(0, 20)); // Limit to 20 items
                setError(null)
            } catch (error) {
                // setError('Error fetching data: ' + error.message);
                // console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="p-8 bg-emerald-300 rounded-2xl">
            {error && <p className="text-red-500">{error}</p>}
            <div className="grid grid-cols-4 gap-4 mb-8 ">
                <h2 className="text-xl font-bold text-gray-800 bg-slate-100 rounded-xl text-center">Top Trend</h2>
                <h2 className="text-xl font-bold text-gray-800 bg-slate-100 rounded-xl text-center">Top Fav</h2>
                <h2 className="text-xl font-bold text-gray-800 bg-slate-100 rounded-xl text-center">Most Popular</h2>
                <h2 className="text-xl font-bold text-gray-800 bg-slate-100 rounded-xl text-center">Top Anime</h2>
            </div>
            <div className="grid grid-cols-4 gap-4">
                {animeData.map((anime, index) => (
                    <div key={index} className="flex items-center bg-lime-100 p-4 rounded-lg shadow-md">
                        <img 
                            src={anime.images.jpg.image_url} 
                            alt={anime.title} 
                            className="w-24 h-24 object-cover rounded-lg mr-4"
                        />
                        <div>
                            <h4 className="text-md font-semibold text-gray-700">
                                <a className='hover:text-blue-500' href={anime.url}>{anime.title}</a>
                            </h4>
                            <p className="text-sm text-gray-600">
                                {anime.synopsis ? anime.synopsis.slice(0, 60) + '...' : 'No synopsis available'}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Section;
