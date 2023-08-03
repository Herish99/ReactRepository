import React from "react";
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn
  } from 'mdb-react-ui-kit';

const ChildOfProps = (props) => {
  return (
    <>
      <MDBCard>
        {/* <MDBCardImage
          backgroundImg={process.env.PUBLIC_URL + "https://mdbootstrap.com/img/new/standard/nature/184.webp"}
        /> */}
        <MDBCardImage
          src="https://mdbootstrap.com/img/new/standard/nature/184.webp"
          position="top"
          alt="..."
        />
        <MDBCardBody>
          <MDBCardTitle>{props.Dyntitle}</MDBCardTitle>
          <MDBCardText>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </MDBCardText>
          <MDBBtn href="#">Button</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </>
  );
};

export default ChildOfProps;
