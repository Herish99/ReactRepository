import React, { Component } from "react";
import ChildOfMain from "./ChildOfMain";

export default class MainParent extends Component {
  state = {
    parentData: "something",
  };
  render() {
    return (
      <>
        <h2>State Lifting</h2>
<details>
          <h5>
            Atyre sudhi upar na concepts ma apde parent na data child ma mokli
            rahya hata. state lifting ma apde child jode operate thayela data
            parent ma mokalvana.
          </h5>
        </details>

        <h3>Parent Component</h3>
        <p>State data in parent :{this.state.parentData}</p>
        <ChildOfMain parenttochild={this.state.parentData} />

        {/* parent na data child ma lai java mate apde props no use karyo che child ma. */}
      </>
    );
  }
}
