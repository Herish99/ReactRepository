// import React,{Component} from 'react';

// const Enhanced = (Originalcompo) => {

//      class Newcomponent extends Component {
//      render() {
//         clickHandle = ()=>{

//             console.log('inside enhanced');
//         }
//        return (
//          <>
//            <Originalcompo clickhandle={this.clickHandle}/>
//          </>
//        )
//      }
//    }
//    return Newcomponent;

// };

// export default Enhanced;

import React, { Component } from "react";
const Enhanced = (OriginalComponent) => {
  class NewComponent extends Component {
    state = {
      user: "herish",
    };
    clickHandle = (data) => {
      console.log("called inside enhanced");
    };
    render() {
      return (
        <>
          {/* user = {this.state.user} */}
          <h5>
            //most important to remember below line ,<br/> how it is getting called a
            child first. //Hoc ma design main component ma che ane logic che
            child component ma. Trick ama te che k enhanced component che te
            main component ne wrap kari ne rakhse. jevi main component ni file
            call thase tem te direct enhance ni andar jase to tene function
            tarike banavu padse kem k tene parent ma as a props mokalva padse
          </h5>
          <OriginalComponent clickHanndle={this.clickHandle} />
        </>
      );
    }
  }
  return NewComponent;
};
export default Enhanced;
