import React, { Component } from 'react'
import Enhanced from './Enhanced'
 class Main extends Component {
  render() {
    const {clickHandle} = this.props 
    return (
      <>
       <button className='btn btn-primary btn-md' onClick={clickHandle}>Click</button> 
      </>
    )
  }
  
}
//most important to remember below line , how it is getting called a child first.

//Hoc ma design main component ma che ane logic che child component ma. Trick ama te che k enhanced component che te main component ne wrap kari ne rakhse. jevi main component ni file call thase tem te direct enhance ni andar jase to tene function tarike banavu padse kem k tene parent ma as a props mokalva padse
export default Enhanced(Main);      


//1) main component will be wraped by enhanced/other component
//2) Enhanced component created with class component and entire will be wrapped in function component