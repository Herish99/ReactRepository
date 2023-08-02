import React from "react";


import { Route, Routes } from "react-router-dom";
import FunctionalCompoMenu from "./FunctionalCompoMenu";
import IntroFunctionalCompo from "./MainComponent/functionalcompo/01IntroFunctionalCompo";
import ReactjsRenderingInterviewQustions from "./MainComponent/functionalcompo/02ReactjsRenderingInterviewQustions";
import StateInFunctionalCompo from "./MainComponent/functionalcompo/03StateInFunctionalCompo";

const FunctionalCompoRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element = {<FunctionalCompoMenu/>}>
          <Route path="functionalintro" element =<IntroFunctionalCompo/> />
          <Route path="renderingFunctionalcompo" element =<ReactjsRenderingInterviewQustions/> />
          <Route path="stateinFunctionalcompo" element =<StateInFunctionalCompo/> />
        </Route>
      </Routes>
    </>
  );
};

export default FunctionalCompoRouter;
