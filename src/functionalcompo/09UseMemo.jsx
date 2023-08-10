import React from 'react';
import { useState,useMemo } from 'react';

const UseMemo = () => {
    
    const [wordIndex, setWordIndex] = useState(0);
    const words = ["hey", "this", "is", "cool"];
    const word = words[wordIndex];
    const computeLetterCount = (word) => {
        console.log("called computeLetterCount");
        let i = 0;
        while (i < 100000) i++;
        return word.length;
    }
    // const letterCount = computeLetterCount(word)
    const letterCount =useMemo(()=> computeLetterCount(word))

    return (
        <>
            <h1>UseMemo</h1>
            <p>useMemo is a React Hook that lets you cache the result of a calculation between re-renders.</p>
            "{word}" has {letterCount} letters
            <button onClick={() => {
                if (wordIndex + 1 === words.length) {
                    setWordIndex(0);
                } else {
                    setWordIndex(wordIndex + 1);
                }
            }}>
                Click
            </button>
            <p>UseMemo functionality is that it memorizes the 'value'.Difference of  useMemo and useCallback is, in callback it memorizes the full function and in memo it memorized the value.</p>
            <h4>Lets understand in easy language.</h4>
            <p>Imagine you're a chef in a restaurant kitchen. You often need to prepare the same ingredients over and over again, like chopping vegetables or boiling pasta. Now, let's relate this to programming:

            In React, when you create a component, it can perform various tasks. Sometimes, you might have a task that takes some input and gives you an output after doing some calculations. Just like the chef doesn't want to chop the same vegetables repeatedly, you don't want your component to redo the same calculations unnecessarily. This is where useMemo comes in.

            useMemo is like a smart helper for React components. It's used to remember the result of a task (a calculation or some data processing) so that if the input hasn't changed, the component doesn't have to redo that task again. It's like saying to React, "Hey, I've done this before, and the input is the same, so just give me the result you remember."

            This can be really useful when your component does heavy calculations or processes large amounts of data. By using useMemo, you save time and resources, just like how a chef saves time by using pre-chopped vegetables.</p>



            
        </>
    );
};

export default UseMemo;