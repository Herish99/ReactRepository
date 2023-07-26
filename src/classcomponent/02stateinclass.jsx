import React, { Component } from "react";

export default class Stateinclass extends Component {
  // This constructor is made to bind 'this' keyword if normal function is used. As a default this keyword  will not work
  // constructor(props) {
  //     super(props);
  //     this.clickHandleCustom=this.clickHandleCustom.bind(this)
  // }

  state = {
    name: "Taylor",
    age: 42,
  };
  uname = "Rahul";

  clickHandleCustom = () => {
    this.setState({ name: "testing" });
    this.uname = "Heris ";
  };

  // -------------------using below function will give error as State is not defined----------------------
  // clickHandleCustom (){
  //     this.setState({ name:"testing" })
  //     this.uname="test"
  // }
  render() {
    let uname = "test";
    return (
      <>
        <h3>State in Class Component</h3>
        <p>
          State is used so that it can handle virtual DOM. State will work in
          arrow function , on building a normal function it will not work
          because binding is required to it. Then, how to bind? so for that we
          use a constructor . A constructor is prepared and in it super is
          build, after building it we bind 'this' keyword in it. In Short 'this'
          keyword doesnt work in normal function while it works in arrow
          function without writing any extra code.
        </p>
        <p>
          Whithout using state, we have a problem that a variable cannot be
          changed dynamically. So to overcome this problem State has been
          introduced. As a new method use arrow function only.Arrow function ma
          memory allocation nathi.
        </p>
        <p>
          for Example, uname = "test" che. have button na click upar 'uname'
          change thai javu joiye je thase nai. shukam nai thai..... kem k react
          js che te virtual DOM upar kam kare che. virtual DOM etle k te ek
          reference DOM banave ane tema [current,next ane previous] upar j kaam
          kare. jya Virtual DOM hoi ane tya data change karava hoi tyare 'state'
          use karvu pade.
        </p>
        On clicking button, username is changed dynamically ==== user name is
        {this.uname}
        {this.state.name}
        {/* <button onClick={()=>{ uname="test" }}>Click</button> ----------inbuild function  */}
        <button onClick={this.clickHandleCustom}>Click</button>
      </>
    );
  }
}
