import React from "react";
import './Sections.css';


const Sections = (props) => {
  return (
    <>
      <div
        className="wrap po-rel"
        style={{ backgroundImage: `url(${props.backgroundImg})`} }
      >
          <div className="padd_top"></div>
        <div className="item_text">
          <p>{props.dynh}</p>
          <p>Order Online For Touchless Delivery</p>
        </div>
        <div>
          <div className="padd_top"></div>
          <div className="padd_top"></div>
          <div className="padd_top"></div>
          <div className="padd_top"></div>
          <div className="padd_top"></div>
          <div className="padd_top"></div>
        <div className="item_button padd_top">
          <button className="leftButton">{props.leftButton}</button>
          <button className="RightButton">{props.rightButton}</button>
        </div>
          <div className="padd_top"></div>
        <img src="" alt="" />
        </div>
      </div>
    </>
  );
};

export default Sections;
