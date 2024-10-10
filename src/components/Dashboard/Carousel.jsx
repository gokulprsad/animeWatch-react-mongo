import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = () => {
  const [animeImages, setAnimeImages] = useState([]);
  const navigate = useNavigate(); // Initialize navigate function

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // 3 seconds interval
    arrows: false,
  };

  // Fetch the top anime images from Jikan API
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await axios.get('https://api.jikan.moe/v4/top/anime');
        const topAnime = res.data.data.slice(0, 5); // Get top 5 anime
        const images = topAnime.map((anime) => ({
          imageUrl: anime.images.jpg.image_url,
          title: anime.title,
          synopsis: anime.synopsis,
          rating: anime.score,
          mal_id: anime.mal_id,
          animeData: anime, // Pass the full anime data
        }));
        setAnimeImages(images);
      } catch (error) {
        console.error('Error fetching anime images:', error);
      }
    };

    fetchImages();
  }, []);

  // Handle "Watch Now" click
  const handleWatchNow = (anime) => {
    // Navigate to the AnimeDetail page and pass the anime data via state
    navigate(`/anime/${anime.mal_id}`, { state: { anime } });
  };

  return (
    <div className="relative z-10 mt-3"> {/* Lower z-index for the carousel */}
      {animeImages.length > 0 ? (
        <Slider {...settings}>
          {animeImages.map((anime, index) => (
            <div key={index} className="relative h-96">
              <img
                src={anime.imageUrl}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />

              {/* Overlay with Title, Synopsis, and Rating */}
              <div className="absolute left-4 bottom-4 bg-black bg-opacity-70 text-white p-4 rounded-lg w-1/3 ">
                <h3 className="text-lg font-bold mb-2">{anime.title}</h3>
                <p className="text-sm mb-2">{anime.synopsis ? anime.synopsis.slice(0, 100) + '...' : 'No synopsis available'}</p>
                <p className="text-sm font-semibold">Rating: {anime.rating ? anime.rating : 'N/A'}</p>
              </div>

              {/* Watch Now and Details Buttons */}
              <div className="absolute inset-0 flex justify-center items-center">
                <button 
                  className="bg-cyan-500 text-white py-2 px-6 rounded-full text-lg absolute right-2 bottom-2 hover:bg-cyan-600 transition duration-300"
                  onClick={() => handleWatchNow(anime.animeData)} // Pass anime data on click
                >
                  Watch Now
                </button>
                <button 
                  className="bg-cyan-500 text-white py-2 px-6 rounded-full text-lg absolute bottom-20 right-2 hover:bg-cyan-600 transition duration-300"
                  onClick={() => window.open(`https://myanimelist.net/anime/${anime.mal_id}`, '_blank')}
                >
                  Details {'>'}
                </button>
              </div>
            </div>
          ))}
        </Slider>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Carousel;
