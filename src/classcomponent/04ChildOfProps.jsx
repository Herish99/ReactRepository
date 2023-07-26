import React, { Component } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
} from "mdb-react-ui-kit";

export default class ChildOfProps extends Component {
  render() {
    return (
      <>
        <MDBCard>
          <MDBCardImage
            src={this.props.imagedata}
            position="top"
            alt="..."
          />
          <MDBCardBody>
            <MDBCardTitle>{this.props.dynamictitle}</MDBCardTitle>
            <MDBCardText>
              {this.props.dynamiccontent}
            </MDBCardText>
            <MDBBtn href="#">Button</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </>
    );
  }
}
