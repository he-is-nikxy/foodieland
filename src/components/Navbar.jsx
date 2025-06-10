import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {

      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);


    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  const menuVariants = {
    hidden: { opacity: 0, x: '100vw' },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 70,
        damping: 10,
        staggerChildren: 0.1,
        when: 'beforeChildren',
      },
    },
    exit: {
      opacity: 0,
      x: '100vw',
      transition: {
        type: 'spring',
        stiffness: 70,
        damping: 10,
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const menuItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <motion.nav className={`navbar ${isSticky ? 'sticky' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-logo">Foodieland</div>

        <div className="menu-icon" onClick={toggleMenu}>
          <div className={`burger ${isOpen ? 'open' : ''}`}></div>
          <div className={`burger ${isOpen ? 'open' : ''}`}></div>
          <div className={`burger ${isOpen ? 'open' : ''}`}></div>
        </div>

        <ul className="nav-links">
          <li><a onClick={() => handleScrollTo('home-section')}>Home</a></li>
          <li><a onClick={() => handleScrollTo('recipes-section')}>Recipes</a></li>
          <li><a onClick={() => handleScrollTo('blog-section')}>Blog</a></li>
          <li><a onClick={() => handleScrollTo('contact-section')}>Contact</a></li>
          <li><a onClick={() => handleScrollTo('about-us-section')}>About us</a></li>
        </ul>

        <div className="social-icons">
          <a href="https://he-is-nikxy.github.io/nikhil-mern-dev/" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
          </a>
          <a href="https://he-is-nikxy.github.io/nikhil-mern-dev/" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-twitter"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
          </a>
          <a href="https://he-is-nikxy.github.io/nikhil-mern-dev/" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
          </a>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.ul
              className="mobile-nav-links"
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <motion.li variants={menuItemVariants}><a onClick={() => handleScrollTo('home-section')}>Home</a></motion.li>
              <motion.li variants={menuItemVariants}><a onClick={() => handleScrollTo('recipes-section')}>Recipes</a></motion.li>
              <motion.li variants={menuItemVariants}><a onClick={() => handleScrollTo('blog-section')}>Blog</a></motion.li>
              <motion.li variants={menuItemVariants}><a onClick={() => handleScrollTo('contact-section')}>Contact</a></motion.li>
              <motion.li variants={menuItemVariants}><a onClick={() => handleScrollTo('about-us-section')}>About us</a></motion.li>

              <motion.div className="mobile-social-icons" variants={menuItemVariants}>
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
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;