import React from "react";
import { useState,useCallback } from "react";


let functioncount = new Set()

const UseCallbackFunction = () => {
  const [count , setcount] = useState(0)
  const [numberData , setnumberData] = useState(0)


  //===============USING CALLBACK HOOK , START ================

  const incrementcounter = useCallback(() =>{
    setcount(count+1);
  },[count]);

  const decrementcounter = useCallback(()=>{
    setcount(count-1);
  },[count]);
  
  const incrementnumber = useCallback(()=>{
    setnumberData(numberData+1);
  },[numberData])

  //===============USING CALLBACK HOOK , ENDS ================





  // ==================WITHOUT USING CALLBACK HOOK START ===================

   
    // const incrementcounter = ()=>{
    //   setcount(count+1);
    // };

    // const decrementcounter = ()=>{
    //   setcount(count-1);
    // };

    // const incrementnumber = ()=>{
    //   setnumberData(numberData + 1);
    // };

    const reset = () =>{
      setcount(0)
      setnumberData(0)
    };
//================WITHOUT USING CALLBACK HOOK ENDS ==================

    //we have used this set method so that we can debug in console log, else we wont notice any change.

    functioncount.add(incrementcounter)
    functioncount.add(decrementcounter)
    functioncount.add(incrementnumber)
    console.log('functioncount data', functioncount);
    console.log('functioncount size', functioncount.size);
  return (


    <>
    <h1>UseCallback in Function Component </h1>

    <h4>Counter : {count}</h4>
    <h4>Numbers: {numberData}</h4>

    <button className="btn btn-primary px-2 mx-2" onClick={incrementcounter}>counter +</button>
    <button className="btn btn-primary px-2 mx-2" onClick={decrementcounter}>counter -</button>
    <button className="btn btn-primary px-2 mx-2" onClick={incrementnumber}>Number</button>
    <button className="btn btn-primary px-2 mx-2" onClick={reset}>Reset</button>

    <p>
      Imagine you're a painter, and you often use the same set of paintbrushes
      to create different artworks. Now, each time you need a specific brush,
      you could search for it in your toolbox, but that would take time.
      Instead, you keep the brushes you frequently use within arm's reach, so
      you can quickly grab the right brush whenever you need it. In programming
      terms, you're "caching" the brushes you use frequently. In React, when you
      create functions inside a component, like event handlers or callbacks,
      they get recreated every time the component renders. This can lead to
      unnecessary re-renders of child components, especially if they're passed
      as props. This is where useCallback comes in: useCallback allows you to
      "cache" a function so that it's not recreated every time your component
      renders. This can help you avoid unnecessary re-renders of child
      components that depend on these functions. It's like keeping your
      frequently used paintbrushes close at hand, so you don't have to search
      for them every time you need them.
      </p>
      
      
    </>
  );
};

export default UseCallbackFunction;
