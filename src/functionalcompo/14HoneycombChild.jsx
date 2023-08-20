import React, { useEffect } from 'react';

const HoneycombChild = () => {
    //target 1 kyare achive thase, savthi pehla jyare component mount thai ane jyare change thai 
    //Target 2 , te mate apde useEffect use karsu, kem k jyare first time page load thai che ane component ne handle karvau hoi tyare apde useEffect use karsu.
    useEffect(()=>{
        let suffres = shuffle(arr)
        console.log('called inside suffle');
    })


    // Target 1 ===== shuffle of array values start.
    const arr = [1,2,3,4,5,6];
    const shuffle = (array)=>{
        for (let i = array.length-1; i > 0; i--) {
            const j = Math.floor(Math.random()* (i+1));
           const temp = array[i];
            array[i] = array[j];
            array[j]= temp            
            console.log(array[i]);
            // console.log('called inside suffle');
        }
        return array;
    }
    // Target 1 ===== shuffle of array values end.

    return (
        <>
            

        </>
    );
};

export default HoneycombChild;