import React from 'react';
import Sections from './component/Sections';


const Logo = () => {
    return (
        <>
            <Sections dynh="Model S" backgroundImg={process.env.PUBLIC_URL + 'image/2.jpg'}   leftButton='Custom Order' rightButton='Existing Inventory'/>   
            <Sections dynh="Model 3" backgroundImg={process.env.PUBLIC_URL + 'image/1.jpg'} leftButton='Custom Order' rightButton='Existing Inventory'/>   
            <Sections dynh="Model X" backgroundImg={process.env.PUBLIC_URL + 'image/3.jpg'} leftButton='Custom Order' rightButton='Existing Inventory'/>   
            <Sections dynh="Model y" backgroundImg={process.env.PUBLIC_URL + 'image/4.jpg'} leftButton='Custom Order' rightButton='Existing Inventory'/>   
            <Sections dynh="Interior" backgroundImg={process.env.PUBLIC_URL + 'image/5.jpg'} leftButton='Custom Order' rightButton='Existing Inventory'/>   
            <Sections dynh="Solar Roof" backgroundImg={process.env.PUBLIC_URL + 'image/6.jpg'} leftButton='Custom Order' rightButton='Existing Inventory'/>   
            <Sections dynh="Powerwall" backgroundImg={process.env.PUBLIC_URL + 'image/7.jpg'} leftButton='Custom Order' rightButton='Existing Inventory'/>   
        </>
    );
};

export default Logo;