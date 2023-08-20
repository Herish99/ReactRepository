import React from "react";
import { useState } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
} from "mdb-react-ui-kit";

const StateExampleCounting = () => {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState('Herish');

  // const increment = ()=> {
  //     setCount(count+1)
  // }
  const decrement = () => {
    setCount(count - 1);
  };
  const reset = () => {
    setCount(0);
  };

  const inputchange = (data) =>{
    const newValue = data.target.value

    setInputValue(newValue)
  }
  return (
    <>
      <h3>Counting with Increment and Decrement using state</h3>
      <div>
        <h4>Count : {count}</h4>
        <h3>{inputValue}</h3>
        <div>
          {/* <MDBBtn Btn className='mx-1' onClick={increment}>Increment</MDBBtn> */}

          {/* it can also be written like this inbuilt */}
          <MDBBtn Btn className="mx-1" onClick={() => {
              setCount(count + 1);
            }}
          >
            Increment
          </MDBBtn>
          <MDBBtn Btn className="mx-1" onClick={decrement}>
            Decrement
          </MDBBtn>
          <MDBBtn Btn className="mx-1" onClick={reset}>
            Reset
          </MDBBtn>
          <div className="p-3">
          <input type="text" placeholder="Write here..." onChange={inputchange} />
          </div>
        </div>
      </div>
    </>
  );
};

export default StateExampleCounting;
