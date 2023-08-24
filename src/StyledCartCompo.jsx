import React from 'react';

const StyledCartCompo = (props) => {
    return (
        <>
        <div  style={{backgroundColor: props.color,borderRadius:10}}>
         <div ><img src={props.imgdata} alt="image"  className='w-50 py-3' height={80} / ></div>   
        <h5 style={{fontSize:12}}>{props.product}</h5>
        <h6 style={{fontSize:12}}>{props.item}</h6>
        </div>
        </>
    );
};

export default StyledCartCompo;