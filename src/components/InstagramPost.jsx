import React from 'react';
import './InstagramPost.css'; 
const InstagramPost = ({ post }) => {
    return (
        <div className="instagram-post">
            <div className="post-header">
                <img src="../src/assets/images/about.png" alt="Profile" className="profile-pic" />
                <div className="profile-info">
                    <span className="username">Foodieland.</span>
                    <span className="location">Tokyo, Japan</span>
                </div>
                <div className="options-icon">...</div>
            </div>
            <div className="post-image-container">
                <img src={post.image} alt="Instagram Post" className="post-image" />
            </div>
            <div className="post-actions">
                <div className="left-actions">
                    <svg className="action-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                    <svg className="action-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L2 22l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                    <svg className="action-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><line x1="22" y1="2" x2="15" y2="22"></line></svg>
                </div>
                <div className="right-action">
                    <svg className="action-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>
                </div>
            </div>
            <div className="post-likes">Liked by **{post.likes}**</div>
            <div className="post-description">
                <span className="username">Foodieland.</span> {post.description}
            </div>
            <div className="post-date">{post.date}</div>
        </div>
    );
};

export default InstagramPost;