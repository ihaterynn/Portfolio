// src/pages/Projects.js
import React from 'react';
import './Projects.css';

import SnacklyDemo from '../assets/projects/Snackly/SnacklyDemoGIF.gif';
import OrijinLogo from '../assets/projects/Orijin/Logo2.png';
import OrijinDemo from '../assets/projects/Orijin/OrijinDemo.mp4';
import NutriAIDLogo from '../assets/projects/NutriAID/Logo.png';
import NutriAIDHomeScreen from '../assets/projects/NutriAID/HomeScreen.jpg';
import NutriAIDProfileDemo from '../assets/projects/NutriAID/ProfileDemo.gif';
import NutriAIDAnalysisDemo from '../assets/projects/NutriAID/AnalysisDemo.gif';

const Projects = () => {
    return (
        <div className="projects-container">
            <section className="project-section snackly-section">
                <div className="snackly-content">
                    <div className="snackly-description">
                        <h2 className="snackly-title">Snackly</h2>
                        <p className="snackly-hookline">AI Calorie & Nutrition Tracking Mobile App</p>
                        <div className="project-description">
                            <p>
                                Snackly is a mobile application that integrates cutting-edge technologies to enhance
                                the user experience in tracking nutritional intake. The app employs a hybrid deep learning neural network 
                                model for object detection, feature extraction, and global context analysis. 
                                Developed with React Native, Snackly connects to a Flask Server for backend services. 
                                This solution enables health-conscious individuals to monitor their diet closely.
                            </p>
                        </div>
                    </div>
                    <div className="snackly-media-container">
                        <img src={SnacklyDemo} alt="Snackly Demo" className="snackly-media" />
                    </div>
                </div>
            </section>
            <hr className="project-separator" />

            <section className="project-section">
                <div className="centered-title">
                    <img src={OrijinLogo} alt="Orijin Logo" className="orijin-logo" />
                    <div className="orijin-visit-site-button-container">
                        <button className="orijin-visit-site-button" onClick={() => window.open('https://ihaterynn.github.io/Orijin/', '_blank')}>
                            Visit Site
                        </button>
                    </div>
                    <p className="project-hookline">Transitioning traditional Gaming DRM using Web3 Solutions represented by an OnChain Game Marketplace</p>
                    <p className="project-hookline">P/S not my voiceover</p>
                </div>
                <div>
                    <video controls className="orijin-media">
                        <source src={OrijinDemo} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <p className="project-description">
                    Orijin is a blockchain-based Digital Rights Management (DRM) system designed to address
                    the challenges of traditional software licensing models. By leveraging tokenization and
                    smart contract technology, Orijin enables verifiable ownership and control over digital
                    assets. Each game is minted as a unique NFT with a private ID, preventing piracy and
                    ensuring secure transactions. The decentralized marketplace allows users to buy, sell,
                    and resell games securely, with royalties automatically paid to developers upon resale.
                    This innovative approach to gaming DRM promotes fair trade practices and enhances the
                    gaming economy.
                </p>
            </section>
            <hr className="project-separator" /> 

            <section className="project-section">
                <div className="centered-title">
                    <img src={NutriAIDLogo} alt="NutriAID Logo" className="nutriaid-logo" />
                    <div className="nutriaid-visit-site-button-container">
                        <button className="nutriaid-visit-site-button" onClick={() => window.open('https://ihaterynn.github.io/NutriAID/', '_blank')}>
                            Visit Site
                        </button>
                    </div>
                    <p className="project-hookline">Elevating Dietary Choices with NutriAID using OCR Technology!</p>
                </div>
                <div>
                    <img src={NutriAIDHomeScreen} alt="NutriAID Home Screen" className="nutriaid-media" />
                    <img src={NutriAIDProfileDemo} alt="NutriAID Profile Demo" className="nutriaid-media" />
                    <img src={NutriAIDAnalysisDemo} alt="NutriAID Analysis Demo" className="nutriaid-media" />
                </div>
                <p className="project-description">
                    NutriAID is a health-focused React application that empowers users to make informed dietary
                    choices by analyzing food labels using Optical Character Recognition (OCR). The app tailors
                    dietary recommendations based on user-provided health information such as allergies, chronic
                    conditions, and weight goals. With real-time analysis, NutriAID helps ensure that food choices
                    align with users' health objectives. The integration of AI-driven recommendations and blockchain
                    capabilities provides a seamless user experience while prioritizing safety and nutrition.
                </p>
            </section>
        </div>
    );
};

export default Projects;
