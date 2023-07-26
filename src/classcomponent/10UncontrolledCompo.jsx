import React, { Component, createRef } from "react";

export default class UncontrolledCompo extends Component {
    constructor(props){
        super(props);
        this.input= React.createRef();
    }


    clickhandle = () => {
        console.log(this.input);            // output: {current: input}
        console.log(this.input.current);    // output: <input type="text" name="" id="" fdprocessedid="b64xd">
        console.log(this.input.current.value);  // output: gives value written in input
        
    }
  render() {
    return (
      <>
        <h2>Uncontrolled compo</h2>
        <p>Uncontrolled Components: Uncontrolled Components are the components that are not controlled by the React state and are handled by the DOM (Document Object Model). So in order to access any value that has been entered we take the help of refs. Value that are entered using 'reference' then it is called uncontrolled component</p>
        <p>Controlled and uncontrolled are mostly used in form tag.</p>
        <p>Uncontrolled component are not to be used as it is not prefered. Controlled component is highly prefered.</p>

        <form action="" method="post">
            <input type="text" ref={this.input} name="" id="" />
            <input type="button" value="Click" onClick={this.clickhandle}/>
        </form>
      </>
    );
  }
}
