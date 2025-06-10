import React from 'react';
import { motion } from 'framer-motion';
import './HeroSection.css'; 

const HeroSection = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut', delay: 0.2 } },
  };

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut', delay: 0.4 } },
  };

  const authorVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut', delay: 0.6 } },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut', delay: 0.8 } },
  };

  return (
    <div className="hero-carousel-section">
      <div className="carousel-background-gradient"></div> 
      <div className="carousel-slide-wrapper">
        <div className="carousel-slide">
          <div className="slide-content">
            <motion.div
              className="hot-recipes-badge"
              initial="hidden"
              animate="visible"
              variants={badgeVariants}
            >
              Hot Recipes
            </motion.div>
            <motion.h2
              className="slide-title"
              initial="hidden"
              animate="visible"
              variants={textVariants}
            >
              Spicy delicious<br />chicken wings
            </motion.h2>
            <motion.p
              className="slide-description"
              initial="hidden"
              animate="visible"
              variants={textVariants}
              transition={{ ...textVariants.visible.transition, delay: 0.1 }}
            >
              Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua enim ad minim
            </motion.p>

            <motion.div
              className="recipe-details"
              initial="hidden"
              animate="visible"
              variants={textVariants}
              transition={{ ...textVariants.visible.transition, delay: 0.2 }}
            >
              <div className="detail-item">
                <svg className="detail-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                <span>30 Minutes</span>
              </div>
              <div className="detail-item">
                <svg className="detail-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 19H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2z"></path><line x1="12" y1="12" x2="12" y2="12"></line><line x1="16" y1="12" x2="16" y2="12"></line><line x1="8" y1="12" x2="8" y2="12"></line></svg>
                <span>Chicken</span>
              </div>
            </motion.div>

            <div className="author-and-button">
              <motion.div
                className="author-info"
                initial="hidden"
                animate="visible"
                variants={authorVariants}
              >
                <img src="../src/assets/images/smilingchef.png" alt="Author Profile" className="author-pic" />
                <div className="author-text">
                  <div className="author-name">John Smith</div>
                  <div className="post-date">15 March 2022</div>
                </div>
              </motion.div>
              <motion.button
                className="view-recipes-button"
                initial="hidden"
                animate="visible"
                variants={buttonVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Recipes
                <svg className="button-arrow" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
              </motion.button>
            </div>
          </div>

          <motion.div
            className="slide-image-container"
            initial="hidden"
            animate="visible"
            variants={imageVariants}
          >
            <div className="handpicked-recipes-badge">
              <div className="badge-thumb">👍</div>
              <span>HANDPICKED RECIPES</span>
            </div>
            <img
              src="../src/assets/images/hero.png"
              alt="Spicy delicious chicken wings"
              className="slide-image"
              onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/500x500/E0F2F7/2C3E50?text=Image+Unavailable"; }}
            />
          </motion.div>
        </div>
      </div>
      
    </div>
  );
};

export default HeroSection;