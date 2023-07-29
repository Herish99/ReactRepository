import React, { Component } from 'react'

export default class ChildOfMain extends Component {
  render() {
    return (
      <>
       <h3>Child Component</h3> 
       <p>
        State data in child called from parent:{this.props.parenttochild}
       </p>
      </>
    )
  }
}
