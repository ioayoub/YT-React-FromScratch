import React from 'react';
import '../styles/components/_logo.css';

// C:\Users\Unaekor\OneDrive\Bureau\Projects\React\ytfromscratch\public\assets\img\main.jpg

const Logo = () => {
    return (
        <div className='logo'>
            <img src="./logo192.png" alt="Logo React" />
            <h3 id="logotitle">React World</h3>
        </div>
    );
};

export default Logo;