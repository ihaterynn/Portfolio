import React, { useEffect, useRef } from 'react';
import './Profile.css'; 

import ProfilePicture from '../assets/profile/9.jpg';
import PythonLogo from '../assets/profile/PythonLogo.png';
import JavaLogo from '../assets/profile/JavaLogo.png';
import JavascriptLogo from '../assets/profile/JavascriptLogo.png';
import ReactLogo from '../assets/profile/ReactLogo.png';
import ReactNativeLogo from '../assets/profile/ReactNativeLogo.png';
import TensorflowLogo from '../assets/profile/TensorflowLogo.png';
import KerasLogo from '../assets/profile/KerasLogo.png';
import ResumeImage from '../assets/profile/Resume.png'; 

const Profile = () => {
    const ryanRef = useRef(null);

    useEffect(() => {
        const typeDeleteAnimation = () => {
            const text = "Ryan!";
            let direction = 'typing';
            let index = 0;
            let animationFrameId;
            
            const animate = () => {
                if (ryanRef.current) {
                    if (direction === 'typing') {
                        ryanRef.current.textContent = text.slice(0, index);
                        index++;
                        if (index > text.length) {
                            direction = 'deleting';
                            animationFrameId = setTimeout(animate, 2000);
                        } else {
                            animationFrameId = setTimeout(animate, 300);
                        }
                    } else {
                        index--;
                        ryanRef.current.textContent = text.slice(0, index);
                        if (index === 0) {
                            direction = 'typing';
                            animationFrameId = setTimeout(animate, 1000);
                        } else {
                            animationFrameId = setTimeout(animate, 200);
                        }
                    }
                }
            };
            
            animate();

            return () => {
                if (animationFrameId) {
                    clearTimeout(animationFrameId);
                }
            };
        };
      
        const cleanup = typeDeleteAnimation();
        return cleanup;
    }, []);

    return (
        <div className="profile-container">
            <div className="profile-header">
                <div className="profile-info">
                    <h1>Hey, call me <span ref={ryanRef}></span></h1>
                    <p>Final Year Computer Science Degree Student at Sunway University</p>
                    <p>
                        Aspiring AI engineer with an interest in Blockchain, specializing in deep learning with a focus on
                        computer vision within the rapidly advancing AI industry. Driven to deploy innovative AI solutions
                        across web and mobile platforms using Python, React, and TensorFlow. Enthusiastic about
                        leveraging hackathons as a platform to refine and apply my expertise in real-world scenarios.
                        My curiosity and hunger for knowledge drives me to expand my knowledge in the world of Technology.
                    </p>
                </div>
                <div className="profile-picture">
                    <img src={ProfilePicture} alt="Ryan Chan" />
                </div>
            </div>

            <hr className="line-separator" />

            <div className="tech-stack">
                <h2>Tech Stack</h2>
                <div className="tech-stack-list">
                    <div className="tech-item">
                        <img src={PythonLogo} alt="Python" />
                        <span>Python</span>
                    </div>
                    <div className="tech-item">
                        <img src={JavaLogo} alt="Java" />
                        <span>Java</span>
                    </div>
                    <div className="tech-item">
                        <img src={JavascriptLogo} alt="JavaScript" />
                        <span>JavaScript</span>
                    </div>
                    <div className="tech-item">
                        <img src={ReactLogo} alt="React" />
                        <span>React</span>
                    </div>
                    <div className="tech-item">
                        <img src={ReactNativeLogo} alt="React Native" />
                        <span>React Native</span>
                    </div>
                    <div className="tech-item">
                        <img src={TensorflowLogo} alt="TensorFlow" />
                        <span>TensorFlow</span>
                    </div>
                    <div className="tech-item">
                        <img src={KerasLogo} alt="Keras" />
                        <span>Keras</span>
                    </div>
                </div>
            </div>

            <hr className="line-separator" />

    
            <div className="resume-section">
                <h2>Resume</h2>
                <div className="resume-card">
                    <img src={ResumeImage} alt="Resume" className="resume-image" />
                </div>
            </div>
        </div>
    );
};

export default Profile;
