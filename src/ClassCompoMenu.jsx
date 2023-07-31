import React, { Component } from 'react'
import { Link, Outlet } from 'react-router-dom'

export default class ClassCompoMenu extends Component {
  render() {
    return (
      <>
       <ol>
        <li><Link to="classintro">Intro of class component </Link>  </li>
        <li><Link to="stateinclass">State in class component </Link>  </li>
        <li><Link to="propsinclass">Props in class component </Link>  </li>
        <li><Link to="statelifecycle">State Lifecycle in class component </Link>  </li>
        <li><Link to="statelifecycleloader">State Lifecycle Loader </Link>  </li>
        <li><Link to="conditionalrendering">Conditional Rendering </Link>  </li>
        <li><Link to="listandkeys">List and Keys</Link>  </li>
        <li><Link to="restandspread">Rest and Spread</Link>  </li>
        <li><Link to="uncontrolled">Uncontrolled component</Link>  </li>
        <li><Link to="controlled">Controlled component</Link>  </li>
        <li><Link to="compositionvsinheritance">Composition vs Inheritance</Link>  </li>
        <li><Link to="statelifting">State Lifting in class component</Link>  </li>
        <li><Link to="hoc">High Order Component in class component</Link>  </li>
        <Outlet/>
        {/* If outet is not applied then inside cintent will not be shown so its compulsory to write outlet when we are dealing with child router or router inside another router */}      
       </ol>
      </>
    )
  }
}
