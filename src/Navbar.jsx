import React from 'react';
import './Navbar.css'

const Navbar = () => {
    return (
        <>
         <div className="container">
            <div className="row">
            <div className="logo">Herish</div>    
            <div className="items">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact us</a></li>
                </ul>
            </div>
            </div>
        </div>   
        </>
    );
};

export default Navbar;