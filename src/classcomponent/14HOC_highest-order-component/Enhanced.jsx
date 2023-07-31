import React from 'react';

const Enhanced = (Originalcompo) => {
   
     class Newcomponent extends Component {
     render() {
        clickhandle = ()=>{
            console.log('inside enhanced');
        }
       return (
         <>
           <Originalcompo clickhandle={this.clickhandle}/>
         </>
       )
     }
   }
   return Newcomponent;
   
};

export default Enhanced;