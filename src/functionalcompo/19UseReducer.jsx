import React from "react";
import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "incremented_age": {
      return {
        name: state.name,
        age: state.age + 1,
      };
    }
    case "changed_name": {
      return {
        name: action.nextName,
        age: state.age,
      };
    }
  }
  throw Error("Unknown action: " + action.type);
}

const UseReducer = () => {
  const initialState = { name: "Taylor", age: 42 };

  const [state, dispatch] = useReducer(reducer, initialState);

  function handleButtonClick() {
    dispatch({ type: "incremented_age" });
  }

  function handleInputChange(e) {
    dispatch({
      type: "changed_name",
      nextName: e.target.value,
    });
  }
  return (
    <>
      <input value={state.name} onChange={handleInputChange} />
      <button onClick={handleButtonClick}>Increment age</button>
      <p>
        Hello, {state.name}. You are {state.age}.
      </p>

      <h5>
        useReducer is a React Hook that lets you add a reducer to your
        component.
        <li>
          Reducer means , suppose there are two function named increment and
          decrement which gets called on click handle causes increase in counts
          as we have studied in state hook. Now that both click handle are
          wrapped inside of reducer so that optimization can increased of react
          page. How it can be possible?
        </li>
        <li>
          its because we know the concept of memory allocation in lexical
          environment. As both the function / clickhandle are wrapped inside 1
          function named UseReduce its memory allocation gets improvised and
          optimization is achived.
        </li>
      </h5>
    </>
  );
};

export default UseReducer;
