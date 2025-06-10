
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './PopularCategories.css';

const categories = [
  { name: 'Breakfast', img: './src/images/dosa.webp' },
  { name: 'Vegan', img: './src/images/salad.webp' },
  { name: 'Meat', img: './src/images/steak.jpeg' },
  { name: 'Dessert', img: './src/images/icecream.webp' },
  { name: 'Lunch', img: './src/images/dosa.webp' },
  { name: 'Chocolate', img: './src/images/icecream.webp' },
  { name: 'Pizza', img: './src/images/pizza.jpeg' },
  { name: 'Burger', img: './src/images/burger.jpeg' },
  { name: 'Noodles', img: './src/images/noodles.webp' },
  { name: 'Salad', img: './src/images/salad.webp' },
  { name: 'Pasta', img: './src/images/pasta.jpeg' },
  { name: 'Sushi', img: './src/images/sushi.webp' }
];

const PopularCategories = () => {
  const [showAll, setShowAll] = useState(false);

  return (
    <section className="categories">
      <div className="categories-header">
        <motion.h2 
          className="categories-title"
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.6 }}
        >
          Categories
        </motion.h2>
        <button className="view-all-btn" onClick={() => setShowAll(!showAll)}>
          {showAll ? 'Hide Categories' : 'View All Categories'}
        </button>
      </div>
      <div className={`category-scroll ${showAll ? 'show-all' : ''}`}>
        {categories.map((cat, index) => (
          <motion.div 
            key={index} 
            className="category-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <img src={cat.img} alt={cat.name} />
            <p>{cat.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PopularCategories;

