import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Episodes from './Episodes';

const AnimeDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Safely accessing the anime object from location.state
  const anime = location.state?.anime;

  // If there's no anime data (e.g., direct URL access), redirect or show an error message
  if (!anime) {
    return (
      <div className="p-8">
        <h1 className="text-2xl font-bold mb-4">Anime not found</h1>
        <button 
          onClick={() => navigate('/home')} 
          className="text-blue-500 mt-4 inline-block"
        >
          Go back to homepage
        </button>
      </div>
    );
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4 bg-slate-500 text-center ">{anime.title}</h1>
      <div className="flex items-start mb-4">
        <img 
          src={anime.images.jpg.image_url} 
          alt={anime.title} 
          className="w-96 h-96 object-cover rounded-lg mr-4" 
        />
        
        {/* Video Embed */}
        <video 
          className="w-full h-96 rounded-lg" 
          controls
          src="https://www.w3schools.com/html/mov_bbb.mp4"  // Replace with actual video source
        >
          Your browser does not support the video tag.
        </video>
      </div>

      <p className="mb-4">{anime.synopsis}</p>
      <a 
        href={anime.url} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-blue-500 mt-4 inline-block"
      >
        More Info
      </a>
      
      <Episodes />
    </div>
  );
};

export default AnimeDetail;
