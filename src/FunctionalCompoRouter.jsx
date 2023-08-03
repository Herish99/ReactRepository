import React from "react";


import { Route, Routes } from "react-router-dom";
import FunctionalCompoMenu from "./FunctionalCompoMenu";
import IntroFunctionalCompo from "./functionalcompo/01IntroFunctionalCompo";
import ReactjsRenderingInterviewQustions from "./functionalcompo/02ReactjsRenderingInterviewQustions";
import StateInFunctionalCompo from "./functionalcompo/03StateInFunctionalCompo";
import PropsinFunctionalCompo from "./functionalcompo/04PropsinFunctionalCompo";

const FunctionalCompoRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element = {<FunctionalCompoMenu/>}>
          <Route path="functionalintro" element =<IntroFunctionalCompo/> />
          <Route path="renderingFunctionalcompo" element =<ReactjsRenderingInterviewQustions/> />
          <Route path="stateinFunctionalcompo" element =<StateInFunctionalCompo/> />
          <Route path="propsinFunctionalcompo" element =<PropsinFunctionalCompo/> />
        </Route>
      </Routes>
    </>
  );
};

export default FunctionalCompoRouter;
