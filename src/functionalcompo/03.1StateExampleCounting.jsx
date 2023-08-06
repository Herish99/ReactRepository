import React from 'react';
import { useState } from 'react';
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn
  } from 'mdb-react-ui-kit';

const StateExampleCounting = () => {

    const [count , setCount] = useState(0)

    // const increment = ()=> {
    //     setCount(count+1)
    // }
    const decrement = () => {
        setCount(count-1)
    }
    const reset = () => {
        setCount(0)
    }
    return (
        <>
        <h3>
            Counting with Increment and Decrement using state
        </h3>
        <div className=''>
        <h4 >Count : {count}</h4>

        <div >
        {/* <MDBBtn Btn className='mx-1' onClick={increment}>Increment</MDBBtn> */}

        {/* it can also be written like this inbuilt */}
        <MDBBtn Btn className='mx-1' onClick={() => {setCount(count+1)}}>Increment</MDBBtn>
        <MDBBtn Btn className='mx-1' onClick={decrement}>Decrement</MDBBtn>
        <MDBBtn Btn className='mx-1' onClick={reset}>Reset</MDBBtn>
        </div>
        </div>

        

        </>
    );
};

export default StateExampleCounting 