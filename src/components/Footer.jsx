import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white p-8 mt-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h4 className="font-bold text-lg mb-4">About Us</h4>
          <p className="text-gray-400 mb-2">
            We are dedicated to bringing you the latest and greatest in anime.
            Join us to explore your favorite genres, discover hidden gems, and be part of our vibrant community!
          </p>
          <p className="text-gray-400">
            <strong>Contact us:</strong> <a href="">gokulprasad.sp@gmail.com</a>
          </p>
        </div>
        <div>
          <h4 className="font-bold text-lg mb-4">Our Team</h4>
          <ul className="space-y-2 text-gray-400">
          <li>
              <a href="https://www.linkedin.com/in/gokul-prasad-3a07b927b/" className="hover:underline">Gokul Prasad S😎</a>
            </li>
              <li>
              <a href="https://www.linkedin.com/in/gokul-prasad-3a07b927b/" className="hover:underline">Chad GPT🤖</a>
            </li>
           
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-lg mb-4">Community</h4>
          <ul>
            <li className="hover:underline">Join our Community Forum</li>
            <li className="hover:underline">Upcoming Anime Events</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-lg mb-4">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="https://github.com/gokulprsad" className="text-gray-400 hover:text-white">
              <FaGithub size={24} />
            </a>
            <a href="https://www.linkedin.com/in/gokul-prasad-3a07b927b/" className="text-gray-400 hover:text-white">
              <FaLinkedin size={24} />
            </a>
            <a href="https://x.com/g0kulPrasad" className="text-gray-400 hover:text-white">
              <FaTwitter size={24} />
            </a>
          </div>
          <p className="text-gray-400 mt-4">Subscribe to our newsletter for the latest updates!</p>
          <input 
            type="email" 
            placeholder="Enter your email" 
            className="p-2 rounded mt-2 border border-gray-600 bg-gray-800" 
          />
          <button className="bg-cyan-500 text-white py-2 px-4 rounded mt-2 hover:bg-cyan-600">
            Subscribe
          </button>
        </div>
      </div>
      <div className="text-center text-sm mt-8 border-t border-gray-700 pt-4">
        &copy; {new Date().getFullYear()} Anime World. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
