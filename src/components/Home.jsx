import React from 'react';
import Navbar from './Dashboard/Navbar';
import Carousel from './Dashboard/Carousel';
import Trending from './Trending';
import Section from './Section';
import Footer from './Footer';
import CommentSection from './CommentSection';
import Latest from './Latest';

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto">
        <Carousel />
        <Trending />
        <Section />
        <Latest />
      </div>

      <CommentSection />
      <Footer />
    </div>
  );
};

export default Home;
