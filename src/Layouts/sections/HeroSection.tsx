import React from 'react';
import { Link } from 'react-router-dom';


const HeroSection: React.FC = () => {
    return (
        <div>
            <section className="hero-section">
            <div className="hero-content">
                <div className="column-1">
                    <div className="hero-text">
                        <h1>Your finance, made simple</h1>
                        <p>Designed by GenZs, for GenZs. Manage your income and expenses, all in one place</p>
                        <Link to="/dashboard" className="button nav-signup">Try for free</Link>
                    </div>
    
                </div>
                <div className="column-2">
                    <div className="hero-image">
                        <img id="heroImage" src={`${process.env.PUBLIC_URL}/images/assets/notetaking.png`} alt="note-taking" />
                    </div>
                </div>
            </div>
        </section>
        </div>
    );
};

export default HeroSection;
