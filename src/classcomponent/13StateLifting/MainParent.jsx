import React, { Component } from "react";
import ChildOfMain from "./ChildOfMain";

export default class MainParent extends Component {

  // state in Mainparent is just for revision about sending parent data to child using props ******start
  state = {
    parentData: "something",
  };
  // state in Mainparent is just for revision about sending parent data to child using props ******End

  //Bringing child data to parent, function / method shown below is a 1st step of procedure. 
  //Sending method to child component as shown in line 50 and that method/function is to be called in constuctor in child using props [button na click event upar pan banavi shakay]. And inside of that method/function as a argument we have to insert a child data that we have to send to parent. Now as passing parameter in method/function shown below as 'data' in parent component , we start getting data of child.
  method = (data) => {
    console.log("called", data);
    this.setState({ DataOfChild: data });
  };
  render() {
    return (
      <>
        <h2>State Lifting</h2>
        <details>
          <h5>
            Atyre sudhi upar na concepts ma apde parent na data child ma mokli
            rahya hata. state lifting ma apde child jode operate thayela data
            parent ma mokalvana.
          </h5>
          <p>
            Apde parent na data child ma mokalva hoi tyare apde props no use
            kariye chiye pan jyare child na data parent ma mokalva hoi tyare
            props no use thai te mate apde state lifting no concept use kariye
            chiye. state lifting ma data transfer karva mate method banavi pade
            ane te method mokalvi pade child component ma je parent ma execute
            karavu hoi te eg. as function banavu pade ane ema callback karavu
            pade.
          </p>
          <p>
            parent ma function/method banavani ane te as a props child ma
            mokalvanu. Te parent ni method apde child ni andar call karavani.
            Method call kya thase...to kai constructor ma call thase as a props.
            je method call thai ema as a argument [parenthasis ni andar] child
            na data mokalsu.{" "}
          </p>
        </details>

        <h3>Parent Component</h3>
        <p>State data of parent :{this.state.parentData}</p>
        <p>Child state data in parent: {this.state.DataOfChild}</p>
        <p></p>
        <ChildOfMain parentmethodasprops={this.method} parenttochild={this.state.parentData} />

        {/* parent na data child ma lai java mate apde props no use karyo che child ma. */}
      </>
    );
  }
}
