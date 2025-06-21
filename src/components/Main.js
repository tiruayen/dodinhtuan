// src/components/Main.js
import React from 'react';
import './Main.css';
import Home from './pages/Home';
import Intro from './pages/Intro';
import Contact from './pages/Contact';
const Main = ({ selectedMenu }) => {
    const renderContent = () => {
        switch (selectedMenu) {
            case 'Home':
                return <Home />;
            case 'About':
                return <Intro />;
            case 'Contact':
                return <Contact />;
            default:
                return <div>Please select a menu option.</div>; // Default case
        }
    };
    return (
        <main className="main">
            {renderContent()}
        </main>
    );
};
export default Main;