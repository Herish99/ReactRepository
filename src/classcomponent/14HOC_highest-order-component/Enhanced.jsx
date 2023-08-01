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

import React, { Component } from 'react';
const Enhanced = (OriginalComponent) => {
    class NewComponent extends Component {

        state = {
            user:'herish'
        }
        clickHandle = (data) => {
            console.log("called inside enhanced" ,);
            
        }
        render() {
            return <>

                <OriginalComponent clickHanndle={this.clickHandle} />
            </>
        }
    }
    return NewComponent;
}
export default Enhanced;