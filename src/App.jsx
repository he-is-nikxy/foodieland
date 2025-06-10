
import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection'; 
import Contact from './components/Contact';
import Footer from './components/Footer';
import Testimonials from './components/Testimonials';
import FoodRecipes from './components/FoodRecipes';
import About from './components/About';
import PopularCategories from './components/PopularCategories';


import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>

        <section id="home-section" className="section-padding-top">
          <HeroSection /> 
        </section>

        <section id="about-us-section" className="section-padding">
          <About />
        </section>

        <PopularCategories />

        <section id="recipes-section" className="section-padding">
          <FoodRecipes />
        </section>

        <section id="blog-section" className="section-padding">
          <Testimonials />
        </section>

        <section id="contact-section" className="section-padding">
          <Contact />
        </section>


      </main>
      <Footer />
    </div>
  );
}

export default App;