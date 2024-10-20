import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'; 
import Navbar from './components/Navbar';
import Profile from './pages/Profile';
import Projects from './pages/Projects';
import Hobbies from './pages/Hobbies';
import Connect from './pages/Connect';

const App = () => {
    return (
        <Router basename="/Portfolio">
            <Navbar />
            <div className="content">
                <Routes>
                    <Route path="/" element={<Navigate to="/profile" />} /> 
                    <Route path="/profile" element={<Profile />} /> 
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/hobbies" element={<Hobbies />} />
                    <Route path="/connect" element={<Connect />} />
                </Routes>
            </div>
        </Router>
    );
};


export default App;
