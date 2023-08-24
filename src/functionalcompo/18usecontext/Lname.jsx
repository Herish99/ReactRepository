import React, { useContext } from 'react';
import { fname } from './18UseContext';

const Lname = () => {
    const lname = useContext(fname)
    return (
        <>
         <h5>{lname} parmar</h5>   
        </>
    );
};

export default Lname;