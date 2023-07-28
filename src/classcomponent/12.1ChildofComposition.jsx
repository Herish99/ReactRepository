import React, { Component } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardHeader,
  MDBCardFooter,
  MDBBtn,
} from "mdb-react-ui-kit";

export default class ChildofComposition extends Component {
  render() {
    return (
      <>
        {/* child component of composition */}
        {/* Inheritance */}

        {/* <div>
            <div className="card-header">
                <h2>Heading</h2>
            </div>
            <div className="card-body">
                {this.props.children}
            </div>
        </div> */}


        <MDBCard alignment="center">
          <MDBCardHeader>{this.props.title}</MDBCardHeader>
          <MDBCardBody>
            <MDBCardTitle>Special title treatment</MDBCardTitle>
            <MDBCardText>
             {this.props.children}
            </MDBCardText>
            <MDBBtn href="#">Button</MDBBtn>
          </MDBCardBody>
          <MDBCardFooter className="text-muted">2 days ago</MDBCardFooter>
        </MDBCard>
      </>
    );
  }
}
