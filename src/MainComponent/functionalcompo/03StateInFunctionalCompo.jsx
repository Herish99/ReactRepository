import React from 'react';
import { useState } from 'react';


let ClickHandleOutside = () => {
    console.log('called outside');
    // The purpose of writting This Outside function is representing the scope, in Functional component even if the function is written outside of Component it is still accessible . 
}

const StateInFunctionalCompo = () => {

    let user = "Herish"
    let fname = 'parmar'
    const [state , setState] = useState(fname) // Main syntex, it can also written like below 
    const [firstIndexDefault , Changetobemade] = useState(user) // inside name can be changed   

    let ClickHandleInside = () => {

        // The purpose of writting this function is that we cannot change data or variable on click because we are working on virtual DOM hich can be clearly visible in console that console data changes but the dom data is not changing. So to solve this problem React has given us a HOOK called 'useState()', which is ready-made function. if Anything written inside in parenthsis then it is known as default to be shown on screen. 
        // console.log('called inside');
        // console.log(user);
        user = "data"
        console.log(user);
        Changetobemade("PHD") // state has been used.
    }

    let ChangeVariable = () => {
        setState("Hp")
    }
    

    return (
        <>
            <h3>State in Functional component</h3>
            <button onClick={ClickHandleInside}>Function Inside Component</button>
            <strong>
            <div>inside data (Before using state): {user}</div>
            <div>state user Inside (After using state): {firstIndexDefault}</div>
            </strong><br />
            <p>The purpose of writting this inside function is that we cannot change data or variable on click because we are working on virtual DOM which can be clearly visible in console that console data changes but the dom data is not changing. So to solve this problem React has given us a HOOK called 'useState()', which is ready-made function. if Anything written inside in parenthsis then it is known as default to be shown on screen.</p>
            
            <button onClick={ClickHandleOutside}>Function Outside Component</button>
            <p>The purpose of writting This Outside function is representing the scope, in Functional component even if the function is written outside of Component it is still accessible which is great advantage. </p>
                
            <button onClick={ChangeVariable}>Change Varibale with state</button>
            <div>state user : {state}</div>
        </>
    );
};

export default StateInFunctionalCompo;