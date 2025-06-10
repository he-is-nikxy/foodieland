import React from 'react';
import { motion } from 'framer-motion';
import './Testimonials.css';
import InstagramPost from './InstagramPost'; 

function Testimonials() {
  const posts = [
    {
      id: 1,
      image: './src/images/salad.webp',
      description: 'The vegetables dishes need to have certain vitamins to these people',
      likes: 'Craig_love and 44,686',
      date: 'September 18',
    },
    {
      id: 2,
      image: './src/images/icecream.webp',
      description: 'Sweet food can bring someone into happiness as long as they don\'t eat too much',
      likes: 'Craig_love and 44,686',
      date: 'September 18',
    },
    {
      id: 3,
      image: './src/images/tacos.webp',
      description: 'What are you doing before start cooking? prepare the tools or ingredients?',
      likes: 'Craig_love and 44,686',
      date: 'September 18',
    },
    {
      id: 4,
      image: './src/images/burger.jpeg',
      description: 'Stew never be wrong, it\'s suitable for you who want romantic dinner',
      likes: 'Craig_love and 44,686',
      date: 'September 18',
    },
  ];

  return (
    <div className="app">
      <div className="header-section">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="main-title"
        >
          Check out @foodieland on Instagram
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="subtitle"
        >
          Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua enim ad minim
        </motion.p>
      </div>

      <div className="instagram-posts-container">
        {posts.map((post) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: post.id * 0.1 }}
            whileHover={{ scale: 1.03, boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)" }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <InstagramPost post={post} />
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: posts.length * 0.1 + 0.3 }}
        className="button-container"
      >
        <a style={{textDecoration:"none"}} href="https://he-is-nikxy.github.io/nikhil-mern-dev/" target="_blank" rel="noopener noreferrer">
          <button className="visit-instagram-button">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="instagram-icon"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            Visit Our Instagram
          </button>
        </a>
      </motion.div>
    </div>
  );
}

export default Testimonials;