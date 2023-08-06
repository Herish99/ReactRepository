import React from 'react';
import { useState , useEffect } from 'react';
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn
  } from 'mdb-react-ui-kit';

const UseEffectinCompo = () => {
    const [count , setCount] = useState(0)

    // *******************************
     useEffect(()=>{
        console.log("UseEffect called");
        
    },[])

    // when above use-effect is used without dependencies means '[]' .then it will be called once when component mounted.

    //Above hook gets to work only one time when component gets mounted because it does not have dependencies. And it comes under the point 1)initialization and 2) Mounting
    // ********************************
    //When below use-effect is used with {dependencies means [count]} , then it will be called as many times as  when a value gets changed in that component. Observe Console.log. Basically in this example when a state changes then this use-effect task gets called at every change.
    
    //Below hook gets into work again and again as the value of state changes because we have added dependencies which is called 3)'updatation' which comes after getting 2) Mounted.

    useEffect(()=>{
        console.log("UseEffect called as value gets changed" ,count);
        
    },[count])
    // ********************************
    // Now the points come for 4) UnMounting
    // As we knnow useEffect is cllback function which means it will die on completion of work. So we can write it as below with using return and then  function inside of it and that will be used as unmounting.

    useEffect(()=>{
        console.log("UseEffect called as value gets changed" ,count);
        
        return function () {
            console.log("unmounting called");
        }

    },[])    // Remember during unmounting we should keep the dependencies empty.
    // *********************************

    // ******* Alternate way of below is shown ********
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
            Counting with Increment and Decrement using state with explanation of useEffect in it
        </h3>
        <p>useEffect is a React Hook that lets you synchronize a component with an external system.</p>
            <p>useEffect(setup, dependencies?)</p>
            <p>Call useEffect at the top level of your component to declare an Effect:</p>
        <p>To use UseEffect we need to understand lifecycle in component. Steps that being goes through are 1) initialization 2) Mounting 3) Updation 4) Unmounting. Basically when we need to do task in middle, during running work cycle component then at that time we us useEffect.</p>
        <p>useEffect basically takes callback function and its second parameter is 'Dependencies'</p>
        <p>UseEffect ni andar apde kai task kariye chiye to te kyare apply thai jyare te ekay component mount thai.</p>

        <h2>Empty dependency</h2>
            <p>An Effect with empty dependencies doesn’t re-run when any of your component’s props or state change.</p>

            <blockquote>
                &nbsp;&nbsp;    function ChatRoom(&#123; roomId&#125;) &#123;  <br />
                &nbsp;&nbsp;&nbsp;&nbsp;        useEffect(() =&gt; &#123;  <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;            fetch("https://dummyjson.com/products").then((res)=&gt;res.json()).then((result)=&gt;) <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;            connection.connect(); <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;            return () =&gt; connection.disconnect(); <br />
                &nbsp;&nbsp;&nbsp;&nbsp;        &#125;, []); // ✅ All dependencies declared <br />
                &nbsp;&nbsp;     &#125;
            </blockquote>




            <h2>Specifying reactive dependencies </h2>
            <blockquote>
                &nbsp;&nbsp;    function ChatRoom(&#123; roomId&#125;) &#123;  <br />
                &nbsp;&nbsp;&nbsp;&nbsp;        useEffect(() =&gt; &#123;  <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;            fetch("https://dummyjson.com/products").then((res)=&gt;res.json()).then((result)=&gt;) <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;            connection.connect(); <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;            return () =&gt; connection.disconnect(); <br />
                &nbsp;&nbsp;&nbsp;&nbsp;        &#125;, [state]); // ✅ All dependencies declared <br />
                &nbsp;&nbsp;     &#125;
            </blockquote>
            <h2>Updating state based on previous state from an Effect </h2>
            <p>When you want to update state based on previous state from an Effect, you might run into a problem:</p>
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
        <br />
        <br />
        <br />

        

        </>
    );
};

export default UseEffectinCompo;