import React from 'react';
import './Hobbies.css'; 

// Importing the videos
import DrumsVideo from '../assets/hobbies/Drums/Spark Again Collab _ Aimer.mp4';
import BenchVideo from '../assets/hobbies/Powerlifting/Bench.mp4';
import DeadliftVideo from '../assets/hobbies/Powerlifting/Deadlift.mp4';
import SquatVideo from '../assets/hobbies/Powerlifting/Squat.mp4';

const Hobbies = () => {
    return (
        <div className="hobbies-container">
            {/* Drumming Section */}
            <section className="hobby-section drumming-section">
                <h2 className="drumming-title">Drumming</h2>
                <h3 className="drumming-subtitle">P/S I'm the one on the right</h3>
                <div>
                    {/* Drums video */}
                    <video className="hobby-media" controls>
                        <source src={DrumsVideo} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className="additional-media">
                    {/* Additional pictures */}
                    <img src="path_to_your_drum_picture1.jpg" alt="" className="hobby-media" /> 
                    <img src="path_to_your_drum_picture2.jpg" alt="" className="hobby-media" />
                </div>
                <p className="hobby-description">
                    Drumming is a way for me to express myself musically, where I can let loose. As I play a song, I’m completely in the moment, feeling each hit and every beat. 
                    It’s a surreal experience where everything else fades away, leaving just me and the music. 
                    To jam with others is the true form of ecstasy, amplifying the energy and connection through every shared rhythm.
                </p>
            </section>
            <hr className="hobby-separator" />

            {/* Powerlifting Section */}
            <section className="hobby-section powerlifting-section">
                <h2 className="powerlifting-title">Powerlifting</h2>
                <div className="powerlifting-videos">
                    {/* Powerlifting videos side by side */}
                    <video className="powerlifting-media" controls>
                        <source src={BenchVideo} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <video className="powerlifting-media" controls>
                        <source src={DeadliftVideo} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <video className="powerlifting-media" controls>
                        <source src={SquatVideo} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className="powerlifting-stats">
                    <p>Bodyweight: 50kg</p>
                    <p>Squat: 100kg</p>
                    <p>Bench: 70kg</p>
                    <p>Deadlift: 130kg</p>
                </div>
                <p className="hobby-description">
                    Powerlifting may seem simple, but it's more than just lifting heavy weights; it's about challenging myself and striving to improve my strength with each session. The sport is all about consistency, discipline, and pushing yourself even on days when you don't feel like it. I focus on the big three lifts: bench press, deadlift, and squat, aiming to push my limits and achieve personal records and hopefully step onto the big stage one day.
                </p>

            </section>
        </div>
    );
};

export default Hobbies;
