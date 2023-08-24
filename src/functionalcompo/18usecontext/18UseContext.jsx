import React, { createContext } from 'react';
import Fname from './Fname';
import Lname from './Lname';

export const fname = createContext() 

const UseContext = () => {
    return (
        <>
        <fname.Provider value={'Herish'}>
         <h1>UseContext</h1>
         <h5>Usecontext is used in replace of props to send data from parent to child or grandchild without affecting a heraarchy.</h5>
         <h5>3 points to remember to use UseContext
            <li>create</li>
            <li>provider</li>
            <li>usecontext</li>
         </h5>

         {/* <Fname/> */}
         <Lname/>
         </fname.Provider>

         
        </>
    );
};

export default UseContext;
// export {fname};