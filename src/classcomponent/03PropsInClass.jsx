import React, { Component } from "react";
import ChildOfProps from "./04ChildOfProps";

export default class PropsInClass extends Component {
  render() {
    return (
      <>
        <div className="row">
          <div className="col-lg-3">
            <ChildOfProps
              imagedata="https://mdbootstrap.com/img/new/standard/nature/184.webp"
              dynamictitle="1st Title"
              dynamiccontent="hello ipsum dolor sit amet, consectetur adipisicing elit. Asperiores voluptate, deserunt possimus incidunt numquam deleniti"
            />
          </div>
          <div className="col-lg-3">
            <ChildOfProps
              imagedata="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdxEoyLcvwRd9Q5TcFSFmo7cYHzndmcybvBQt0PpqC&s"
              dynamictitle="2nd Title"
              dynamiccontent="hiii ipsum dolor sit amet, consectetur adipisicing elit. Asperiores voluptate, deserunt possimus incidunt numquam deleniti"
            />
          </div>
          <div className="col-lg-3">
            <ChildOfProps
              imagedata="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdxEoyLcvwRd9Q5TcFSFmo7cYHzndmcybvBQt0PpqC&s"
              dynamictitle="3rd Title3"
              dynamiccontent="welcome ipsum dolor sit amet, consectetur adipisicing elit. Asperiores voluptate, deserunt possimus incidunt numquam deleniti"
            />
          </div>
        </div>

        {/* To avoid writing repitative and lengthy code like below we make a component which is shown in '04ChildOfProps' The same work is done above with clean code.*/}

        {/* <div className="col-lg-3">
          <MDBCard>
          <MDBCardImage
            src="https://mdbootstrap.com/img/new/standard/nature/184.webp"
            position="top"
            alt="..."
          />
          <MDBCardBody>
            <MDBCardTitle>Card title</MDBCardTitle>
            <MDBCardText>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </MDBCardText>
            <MDBBtn href="#">Button</MDBBtn>
          </MDBCardBody>
        </MDBCard>
          </div> */}
      </>
    );
  }
}
