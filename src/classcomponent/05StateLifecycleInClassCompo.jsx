import React, { Component } from "react";
import PropTypes from "prop-types";

class StateLifecycleInClassCompo extends Component {
  constructor(props) {
    super(props);
    console.log("constructor called");
    this.state = {
      name: "Test",
      age: 15,
      status: true,
    };
  }

  //State life cycle etle shu? State sharu thai tyathi lai ne state chalse tya sudhi tene kevay state life cycle, koni ander chalse ,to kai component ni andar.
  //Constructor is a method which is invoked by default when objects are created in js while,
  //Constructor is a method which is invoked by default when components are called in react js.
  //Constructor never returns. it is used when to initiallize something like for eg 'state'.
  //Super etle parent nu constructor. super vagar props , state vapri no shakay.
  //Constructor shu kare che?...jevu component called thase tyare savthi pehla constructor call thase.

  // componentWillMount() {

  // }

  componentDidMount() {
    console.log("componentDidMount called");
  }

  // componentWillReceiveProps(nextProps) {

  // }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate called");
    return true
    // return false
    //condition or restriction provide karvu hoi state ma tyare use thai.for example Age 100 karta vadhare hoi tene entry nahi tevi condition nakhvi hoi tyare aa use thai. 
    //return true hase to change thava lagse condition ane false hase to change nai thava dai.
    //if return is false then data will not change but it will get clicked. render and constructor are not called.
    // whenever button is pressed then this will invoke.
  }

  // componentWillUpdate(nextProps, nextState) {

  // }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
    this.setState({ status: null });
    // during exit, inlast this will invoke.component mathi exit thav tyare aa invoke thai.
  }

  render() {
//render is responsible for returing the jsx . 
    console.log("render called");
    <div className="py-5"></div>;

    return (
      <div>
        state life cycle State Value : {this.state.name} <br />
        <button
          className="btn btn-sm btn-primary"
          onClick={() => {
            console.log("btn Clicked");
            this.setState({ status: !this.state.status });
          }}
        >
          Change State {JSON.stringify(this.state.status)}
        </button>
      </div>
    );
  }
}

export default StateLifecycleInClassCompo;
