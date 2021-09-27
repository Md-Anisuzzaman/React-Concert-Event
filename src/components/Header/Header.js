import React from 'react';
import './Header.css'
// import 'bootstrap/dist/css/bootstrap.css';

const Header = () => {
    return (
        <div className="header-container">
            <h1><span style={{color:'yellow'}}>Welcome!!..</span><span className = "text-info"> to concert event</span></h1>
            <p> Let's enjoy wonderfull concert event. An event that you can say as one of the most unique and memorable concert in your life</p>
            <h2>Total Budget : 5 Million </h2>
            <button className ="btn">Ticket Booking </button>

        </div>
    );
};

export default Header;