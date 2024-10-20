import React from 'react';
import './Connect.css';

import LinkedInLogo from '../assets/connect/LinkedInLogo.png';
import GithubLogo from '../assets/connect/GithubLogo.png';
import InstaLogo from '../assets/connect/InstaLogo.png';
import SpotifyLogo from '../assets/connect/SpotifyLogo.png';

const Connect = () => {
  return (
    <div className="connect-container">
      <h1>🌐 Let's Connect</h1>
      <div className="link-row">
        <div className="social-item">
          <a href="https://www.linkedin.com/in/ryan-chan-jing-yi-310377288/" target="_blank" rel="noopener noreferrer">
            <img src={LinkedInLogo} alt="LinkedIn" className="social-icon" />
            <p>LinkedIn</p>
          </a>
        </div>
        <div className="social-item">
          <a href="https://github.com/ihaterynn" target="_blank" rel="noopener noreferrer">
            <img src={GithubLogo} alt="GitHub" className="social-icon" />
            <p>GitHub</p>
          </a>
        </div>
        <div className="social-item">
          <a href="https://www.instagram.com/ryanncjy/" target="_blank" rel="noopener noreferrer">
            <img src={InstaLogo} alt="Instagram" className="social-icon" />
            <p>Instagram</p>
          </a>
        </div>
        <div className="social-item">
          <a href="https://open.spotify.com/user/30vxro1a8w9a9nh6sqoetyffh?si=9f7e6f0c48474ac1" target="_blank" rel="noopener noreferrer">
            <img src={SpotifyLogo} alt="Spotify" className="social-icon" />
            <p>Spotify</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Connect;
