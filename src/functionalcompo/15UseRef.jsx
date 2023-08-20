import React , {useRef} from 'react';

const UseRef = () => {
//How do browser will know that on button click , input should get focus. So for that we write below code and passing ref={inputref} in input
    const inputRef = useRef(null)
    
    const clickhandle = () => {
        console.log(inputRef.current.value);
        // this above code represent the current value of input will be displayed in console while btn gets clicked. So this represents that input gets accessed with btn using ref. so we can build now focus too.
            inputRef.current.focus() // focus() is inbuilt function
    }

    return (
        <>
            <h1>Herish</h1>
            <input type="text" placeholder='Write something' ref={inputRef}/>
            <button className='btn btn-primary btn-sm mx-2' onClick={clickhandle}>Change name</button>

            <p>Task to perfom with ref example is that on btn click input should get focused using ref hool.</p>
            <p>In javascript we know how to manipulate dom  with document.getElementByID, but in react we cant manipulate dom because it has virtual dom. So to Manipulate Dom in react we can use ref . This above example is simple, but main use of ref will be when btn clicked on child / parent we should excess data from each other respectively.</p>
        </>
    );
};

export default UseRef;