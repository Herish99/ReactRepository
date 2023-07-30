import React, { Component } from 'react'

export default class ChildOfMain extends Component {
  constructor(props) {
    super(props);
    
    this.state={
      DataOfChild:'any data'
    }
    this.props.parentmethodasprops(this.state.DataOfChild)
  }
  
  render() {
    return (
      <>
       <h3>Child Component</h3> 
       <p>State data of child:{this.state.DataOfChild}</p>
       <p>
        props data in child called from parent:{this.props.parenttochild}
       </p>
      </>
    )
  }
}
