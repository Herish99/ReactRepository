//====================  Made using class component ====================


import React, { Component } from 'react'
import { Route, Routes } from 'react-router-dom'
import ClassCompoMenu from './ClassCompoMenu'
import Classcompointro from './classcomponent/01classcompointro'
import Stateinclass from './classcomponent/02stateinclass'
import PropsInClass from './classcomponent/03PropsInClass'
import StateLifecycleInClassCompo from './classcomponent/05StateLifecycleInClassCompo'
import StateLIfeCycleLoader from './classcomponent/06StateLIfeCycleLoader'
import ConditionalRendering from './classcomponent/07ConditionalRendering'
import ListAndKeys from './classcomponent/08ListAndKeys'
import RestandSpread from './classcomponent/09RestandSpread'
import UncontrolledCompo from './classcomponent/10UncontrolledCompo'
import ControlledCompo from './classcomponent/11ControlledCompo'
import CompositionVsInheritance from './classcomponent/12.0CompositionVsInheritance'
import MainParent from './classcomponent/13StateLifting/MainParent'
import Main from './classcomponent/14HOC_highest-order-component/Main'


// This ('ClassCompoRouter') is a child router of main router named 'Router.jsx'

export default class ClassCompoRouter extends Component {
  render() {
    return (
      <>
        <Routes>
            <Route path='/' element={<ClassCompoMenu/>}>
                <Route path='classintro' element= <Classcompointro/> />
                <Route path='stateinclass' element= <Stateinclass/> />
                <Route path='propsinclass' element= <PropsInClass/> />
                <Route path='statelifecycle' element= <StateLifecycleInClassCompo/> />
                <Route path='statelifecycleloader' element= <StateLIfeCycleLoader/> />
                <Route path='conditionalrendering' element= <ConditionalRendering/> />
                <Route path='listandkeys' element= <ListAndKeys/> />
                <Route path='restandspread' element= <RestandSpread/> />
                <Route path='uncontrolled' element= <UncontrolledCompo/> />
                <Route path='controlled' element= <ControlledCompo/> />
                <Route path='compositionvsinheritance' element= <CompositionVsInheritance/> />
                <Route path='statelifting' element= <MainParent/> />
                <Route path='hoc' element= <Main/> />

            </Route>
        </Routes>
      </>
    )
  }
}




// ============== made using functional component=========================
// import React from 'react';

// const ClassCompoRouter = () => {
//     return (
//         <div>
//             class component will be shown on click
//         </div>
//     );
// };

// export default ClassCompoRouter;