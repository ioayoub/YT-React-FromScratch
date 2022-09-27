import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/components/_navigation.css";

const Navigation = () => {
    return (
        <div>
            <div className="navigation">
                <ul>
                    <Link to="/">
                        <li className='nav-active'>Accueil</li>
                    </Link>
                    <Link to="/about">
                        <li>A propos</li>
                    </Link>
                </ul>
            </div>
        </div>
    ); 
};

export default Navigation;