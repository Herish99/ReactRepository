import React from 'react';
import Sections from './component/Sections';
import Header from './component/Header';


const Logo = () => {
    return (
        <>
            

            <Sections dynh="Model S" description="Order Online For Touchless Delivery" backgroundImg={process.env.PUBLIC_URL + 'image/2.jpg'}   leftButton='Custom Order' rightButton='Existing Inventory'/>   
            <Sections dynh="Model 3" description="Order Online For Touchless Delivery" backgroundImg={process.env.PUBLIC_URL + 'image/1.jpg'} leftButton='Custom Order' rightButton='Existing Inventory'/>   
            <Sections dynh="Model X" description="Order Online For Touchless Delivery" backgroundImg={process.env.PUBLIC_URL + 'image/3.jpg'} leftButton='Custom Order' rightButton='Existing Inventory'/>   
            <Sections dynh="Model y" description="Order Online For Touchless Delivery" backgroundImg={process.env.PUBLIC_URL + 'image/4.jpg'} leftButton='Custom Order' rightButton='Existing Inventory'/>   
            <Sections dynh="Interior" description="Order Online For Touchless Delivery" backgroundImg={process.env.PUBLIC_URL + 'image/5.jpg'} leftButton='Custom Order' rightButton='Existing Inventory'/>   
            <Sections dynh="Solar Roof" description="Order Online For Touchless Delivery" backgroundImg={process.env.PUBLIC_URL + 'image/6.jpg'} leftButton='Custom Order' rightButton='Existing Inventory'/>   
            <Sections dynh="Powerwall" description="Order Online For Touchless Delivery" backgroundImg={process.env.PUBLIC_URL + 'image/7.jpg'} leftButton='Custom Order' rightButton='Existing Inventory'/>   
        </>
    );
};

export default Logo;