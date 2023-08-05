import React from "react";
import "./Sections.css";

const Sections = (props) => {
  return (
    <>
      <div className="wrap po-rel "style={{ backgroundImage: `url(${props.backgroundImg})` }}>

        <div className="d-flex h-100 fdirec-col">
            <div className="item_text padd_top">
              <p>{props.dynh}</p>
              <p>{props.description}</p>
            </div>
              <div className="item_button padd_top">
                <button className="leftButton">{props.leftButton}</button>
                <button className="RightButton">{props.rightButton}</button>
              </div>
       </div>
      </div>
    </>
  );
};

export default Sections;
