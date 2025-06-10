import React from 'react';
import { motion } from 'framer-motion';
import './Footer.css'; 

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
        when: 'beforeChildren', 
        staggerChildren: 0.1, 
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.footer
      className="footer"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible" 
      viewport={{ once: true, amount: 0.3 }} 
    >
      <div className="newsletter-section-wrapper">
        <div className="newsletter-section">
          <motion.h2
            className="newsletter-title"
            variants={itemVariants}
          >
            Deliciousness to your inbox
          </motion.h2>
          <motion.p
            className="newsletter-subtitle"
            variants={itemVariants}
          >
            Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim
          </motion.p>
          <motion.div className="newsletter-form" variants={itemVariants}>
            <input type="email" placeholder="Your email address..." className="email-input" />
            <button className="subscribe-button">Subscribe</button>
          </motion.div>
          <img src="../src/assets/images/salad.webp" alt="Vegetables" className="newsletter-decoration-left" />
          <img src="../src/assets/images/tacos.webp" alt="Salad Bowl" className="newsletter-decoration-right" />
        </div>
      </div>

      <div className="footer-content">
        <div className="footer-left">
          <motion.h3 className="footer-logo" variants={itemVariants}>Foodieland</motion.h3>
          <motion.p className="footer-description" variants={itemVariants}>
            Lorem ipsum dolor sit amet, consectetuipisicing elit,
          </motion.p>
        </div>
        <motion.nav className="footer-nav" variants={itemVariants}>
          <motion.ul className="footer-links">
            <motion.li variants={itemVariants}><a href="#recipes">Recipes</a></motion.li>
            <motion.li variants={itemVariants}><a href="#blog">Blog</a></motion.li>
            <motion.li variants={itemVariants}><a href="#contact">Contact</a></motion.li>
            <motion.li variants={itemVariants}><a href="#about-us">About us</a></motion.li>
          </motion.ul>
        </motion.nav>
      </div>

      <div className="footer-bottom">
        <motion.p className="copyright" variants={itemVariants}>
          Made with ❤️ by <a href="https://he-is-nikxy.github.io/nikhil-mern-dev/" target="_blank" rel="noopener noreferrer">Nikhil Khemani</a>
        </motion.p>
        <motion.div className="social-icons" variants={itemVariants}>
          <a href="https://he-is-nikxy.github.io/nikhil-mern-dev/" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
          </a>
          <a href="https://he-is-nikxy.github.io/nikhil-mern-dev/" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-twitter"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
          </a>
          <a href="https://he-is-nikxy.github.io/nikhil-mern-dev/" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
          </a>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;