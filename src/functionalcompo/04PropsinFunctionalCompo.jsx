import React from "react";
import ChildOfProps from "./05ChildOfProps";

const PropsinFunctionalCompo = () => {
  return (
    <>
      <div className="row">
        <div className="col-lg-3">
          <ChildOfProps Dyntitle= 'Title 1'/>
        </div>
        <div className="col-lg-3">
          <ChildOfProps Dyntitle= 'Title 2'/>
        </div>
        <div className="col-lg-3">
          <ChildOfProps Dyntitle= 'Title 3'/>
        </div>
        <div className="col-lg-3">
          <ChildOfProps Dyntitle= 'Title 4'/>
        </div>
        <div className="col-lg-3">
          <ChildOfProps Dyntitle= ''/>
        </div>
        <div className="col-lg-3">
          <ChildOfProps Dyntitle= 'Title 4'/>
        </div>
      </div>
    </>
  );
};

export default PropsinFunctionalCompo;
