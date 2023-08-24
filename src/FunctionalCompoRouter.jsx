import React from "react";


import { Route, Routes } from "react-router-dom";
import FunctionalCompoMenu from "./FunctionalCompoMenu";
import IntroFunctionalCompo from "./functionalcompo/01IntroFunctionalCompo";
import ReactjsRenderingInterviewQustions from "./functionalcompo/02ReactjsRenderingInterviewQustions";
import StateInFunctionalCompo from "./functionalcompo/03StateInFunctionalCompo";
import PropsinFunctionalCompo from "./functionalcompo/04PropsinFunctionalCompo";
import StateExampleCounting from "./functionalcompo/03.1StateExampleCounting";
import UseEffectinCompo from "./functionalcompo/06UseEffect";
import UseLayoutEffect from "./functionalcompo/07useLayoutEffect";
import StyledComponent from "./functionalcompo/08StyledComponent";
import UseMemo from "./functionalcompo/09UseMemo";
import UseCallbackFunction from "./functionalcompo/10UseCallback";
import UseImperative from "./functionalcompo/11UseImperative";
import HoneyCombInterviewtask from "./functionalcompo/13HoneyCombInterviewtask";
import UseRef from "./functionalcompo/15UseRef";
import UseDebug from "./functionalcompo/16UseDebug";
import UseDeffered from "./functionalcompo/17UseDeffered";
import UseContext from "./functionalcompo/18usecontext/18UseContext";

const FunctionalCompoRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element = {<FunctionalCompoMenu/>}>
          <Route path="functionalintro" element =<IntroFunctionalCompo/> />
          <Route path="renderingFunctionalcompo" element =<ReactjsRenderingInterviewQustions/> />
          <Route path="stateinFunctionalcompo" element =<StateInFunctionalCompo/> />
          <Route path="stateexample" element =<StateExampleCounting/> />
          <Route path="propsinFunctionalcompo" element =<PropsinFunctionalCompo/> />
          <Route path="useEffect" element =<UseEffectinCompo/> />
          <Route path="uselayoutEffect" element =<UseLayoutEffect/> />
          <Route path="styled" element =<StyledComponent/> />
          <Route path="usememo" element =<UseMemo/> />
          <Route path="usecallback" element =<UseCallbackFunction/> />
          <Route path="imperative" element =<UseImperative/> />
          <Route path="honeycombtask" element =<HoneyCombInterviewtask/> />
          <Route path="useref" element =<UseRef/> />
          <Route path="usedebug" element =<UseDebug/> />
          <Route path="usedefered" element =<UseDeffered/> />
          <Route path="usecontext" element =<UseContext/> />
        </Route>
      </Routes>
    </>
  );
};

export default FunctionalCompoRouter;
