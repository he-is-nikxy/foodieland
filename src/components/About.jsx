

import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  return (
    <section className="about">
      <motion.div 
        className="about-image"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <img src="./src/images/about.png" alt="About Foodieland" />
      </motion.div>
      <motion.div 
        className="about-content"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2>Welcome to Foodieland</h2>
        <p>
          We are passionate about food and love sharing delicious recipes from around the world. Whether you're a beginner or a seasoned chef, we’ve got something for everyone.
        </p>
        <p>
          Join us on a journey of taste, creativity, and culinary joy. Explore, cook, and enjoy recipes that bring happiness to your table.
        </p>
      </motion.div>
    </section>
  );
};

export default About;
