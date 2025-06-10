
import React, { useState } from 'react';
import './FoodRecipes.css';
import { motion } from 'framer-motion';
import { FaClock, FaUtensils, FaSearch } from 'react-icons/fa';

const dishes = [
  { name: 'Pizza', img: './src/images/pizza.jpeg', desc: 'Classic Italian delight with cheese & herbs.', time: '20', type: 'Snack' },
  { name: 'Burger', img: './src/images/burger.jpeg', desc: 'Juicy beef patty with fresh veggies.', time: '15', type: 'Snack' },
  { name: 'Noodles', img: './src/images/noodles.webp', desc: 'Stir-fried noodles with veggies and sauce.', time: '10', type: 'Noodles' },
  { name: 'Salad', img: './src/images/salad.webp', desc: 'Healthy mix of greens & fruits.', time: '5', type: 'Healthy' },
  { name: 'Pasta', img: './src/images/pasta.jpeg', desc: 'Creamy Alfredo pasta with mushrooms.', time: '18', type: 'Snack' },
  { name: 'Sushi', img: './src/images/sushi.webp', desc: 'Japanese rolls with rice & seafood.', time: '30', type: 'Healthy' },
  { name: 'Sandwich', img: './src/images/sandwich.jpeg', desc: 'Grilled sandwich with veggies & cheese.', time: '10', type: 'Breakfast' },
  { name: 'Fries', img: './src/images/fries.jpeg', desc: 'Crispy potato fries with seasoning.', time: '12', type: 'Snack' },
  { name: 'Tacos', img: './src/images/tacos.webp', desc: 'Mexican delight with spicy fillings.', time: '25', type: 'Snack' },
  { name: 'Steak', img: './src/images/steak.jpeg', desc: 'Grilled steak with herbs.', time: '35', type: 'Main Course' },
  { name: 'Dosa', img: './src/images/dosa.webp', desc: 'South Indian rice crepe.', time: '20', type: 'Breakfast' },
  { name: 'Ice Cream', img: './src/images/icecream.webp', desc: 'Sweet frozen dessert in various flavors.', time: '0', type: 'Sweet' },
];

const FoodRecipes = () => {
  const [filter, setFilter] = useState('All');
  const [sortOrder, setSortOrder] = useState('asc');
  const [search, setSearch] = useState('');

  const uniqueTypes = ['All', ...new Set(dishes.map(d => d.type))];

  const filteredDishes = dishes
    .filter(d => (filter === 'All' || d.type === filter))
    .filter(d => d.name.toLowerCase().includes(search.toLowerCase()));

  const sortedDishes = filteredDishes.sort((a, b) =>
    sortOrder === 'asc' ? parseInt(a.time) - parseInt(b.time) : parseInt(b.time) - parseInt(a.time)
  );

  return (
    <section className="recipes">
      <h2>Food Recipes</h2>

      <div className="controls">
        <input
          type="text"
          placeholder="Search dishes..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />

        <select onChange={e => setSortOrder(e.target.value)} value={sortOrder}>
          <option value="asc">Sort by Time: Low to High</option>
          <option value="desc">Sort by Time: High to Low</option>
        </select>
      </div>

      <div className="filters">
        {uniqueTypes.map((type, i) => (
          <button
            key={i}
            className={filter === type ? 'active' : ''}
            onClick={() => setFilter(type)}
          >
            {type}
          </button>
        ))}
      </div>

      <div className="recipes-grid">
        {sortedDishes.map((dish, index) => (
          <motion.div
            key={index}
            className="recipe-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <img src={dish.img} alt={dish.name} />
            <h3>{dish.name}</h3>
            <p className="desc">{dish.desc}</p>
            <div className='timeType'>
              <p className="info"><FaClock className="icon" /> {dish.time} mins</p>
              <p className="info"><FaUtensils className="icon" /> {dish.type}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FoodRecipes;
