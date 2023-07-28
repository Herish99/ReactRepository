import React, { Component } from "react";
import ChildofComposition from "./12.1ChildofComposition";

export default class CompositionVsInheritance extends Component {
  render() {
    return (
      <>
        <h5>
          Main functionality of composition and inheritance is that a structure
          can be change by parent component and its base structured remains same
          in its child. for example in below cards , there can be requirements
          like in some cards we dont need paragraph or description then that can
          be removed or in some paragraph we might require more paragraph ot
          title tags link h1, h2 etc. then we can add according to our structure
          requirements.
          <b>
            Remember [this.props.children] must to be used in its child
            component to acccess this kind functionality.
          </b>
          <p>
            props ma child ma fixed structure banavi nakhta ane parent mathi[this.prop.xyz] kari ani value change karta jem k title name , description, other values etc. 
          </p>
          <p className="my-3">
            ChildofComposition je component che te opening and closing tag vado
            banavo pade etle ene compose karyu kevay (banavu kevay) ane ani vache j content lakhay tene children mathi inherite karyu kevay etle ene inheritance kevay. 
          </p>
        </h5>

        {/* parent component */}
        <div className="row my-3">
          <div className="col-3">
            <ChildofComposition>
              {/* <h2>description</h2> */}
              <p>
                Aa card ma description ni jarur nathi to amaa thi te tag remove kari nakhvano.
              </p>
            </ChildofComposition>
          </div>
          <div className="col-3">
            <ChildofComposition title= "aa title props thi banavelu che, composiVSinheri thi nahi">
              <h2>description with image req no p tag</h2>
              {/* <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laborum, expedita?
              </p> */}
              <h4>thanks</h4>
            </ChildofComposition>
          </div>
          <div className="col-3">
            <ChildofComposition title="Custom1">
              <h2>description</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laborum, expedita?
              </p>
              <h4>Thanks</h4>
              <h5>hii there</h5>
            </ChildofComposition>
          </div>
          <div className="col-3">
            <ChildofComposition title="Custom2">
              <h2>description</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laborum, expedita?
              </p>
              <h4>thanks</h4>
            </ChildofComposition>
          </div>
        </div>
      </>
    );
  }
}
