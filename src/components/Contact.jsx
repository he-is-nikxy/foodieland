import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Contact.css'; 

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    enquiryType: 'Advertising',
    messages: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you shortly.'); 
    setFormData({
      name: '',
      email: '',
      subject: '',
      enquiryType: 'Advertising',
      messages: '',
    })
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <div className="contact-page-container">
      <motion.h1
        className="contact-title"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
      >
        Contact us
      </motion.h1>

      <div className="contact-content-wrapper">
        <motion.div
          className="chef-image-container"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        >
          <img
            src="../src/assets/images/smilingchef.png" 
            alt="Smiling Chef"
            className="chef-image"
            onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/400x500/E0F2F7/2C3E50?text=Chef+Image+Unavailable"; }}
          />
        </motion.div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <motion.div className="form-group" variants={itemVariants} initial="hidden" animate="visible" transition={{ delay: 0.4 }}>
              <label htmlFor="name" className="form-label">NAME</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name..."
                className="form-input"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </motion.div>
            <motion.div className="form-group" variants={itemVariants} initial="hidden" animate="visible" transition={{ delay: 0.5 }}>
              <label htmlFor="email" className="form-label">EMAIL ADDRESS</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your email address..."
                className="form-input"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </motion.div>
          </div>

          <div className="form-row">
            <motion.div className="form-group" variants={itemVariants} initial="hidden" animate="visible" transition={{ delay: 0.6 }}>
              <label htmlFor="subject" className="form-label">SUBJECT</label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Enter subject..."
                className="form-input"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </motion.div>
            <motion.div className="form-group" variants={itemVariants} initial="hidden" animate="visible" transition={{ delay: 0.7 }}>
              <label htmlFor="enquiryType" className="form-label">ENQUIRY TYPE</label>
              <div className="select-wrapper">
                <select
                  id="enquiryType"
                  name="enquiryType"
                  className="form-select"
                  value={formData.enquiryType}
                  onChange={handleChange}
                >
                  <option value="Advertising">Advertising</option>
                  <option value="Partnership">Partnership</option>
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Feedback">Feedback</option>
                </select>
                <span className="select-arrow">&#9662;</span>
              </div>
            </motion.div>
          </div>

          <motion.div className="form-group full-width" variants={itemVariants} initial="hidden" animate="visible" transition={{ delay: 0.8 }}>
            <label htmlFor="messages" className="form-label">MESSAGES</label>
            <textarea
              id="messages"
              name="messages"
              placeholder="Enter your messages..."
              className="form-textarea"
              value={formData.messages}
              onChange={handleChange}
              rows="6"
              required
            ></textarea>
          </motion.div>

          <motion.button
            type="submit"
            className="submit-button"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.9 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Submit
          </motion.button>
        </form>
      </div>
    </div>
  );
};

export default Contact;