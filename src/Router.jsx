import { createBrowserRouter } from "react-router-dom";
import React from "react";
import Home from "./Home";
import Aboutus from "./Aboutus";
import Contactus from "./Contactus";
import MainHeader from "./commonComponents/Header"
import Examples from "./Examples";
import { Suspense } from "react";

// import ClassCompoRouter from "./ClassCompoRouter";

// anonymous function is passed in below after react.lazy.
//We are passing another function as argument in anonymous function. 
//As function is passed as an argument , we called it as anonymous callback function.

//lazy loading shu perform kari rahyu che.
// Lazy Loading ne samjavu hoi to em samjavi saakay.......... React.lazy e ek function che jeni ander apde j argument pass kari rahiya chiye te anonymous callback value tarike jay che. 
//=> To ama anonymous callback value shu hase? 
//=> apde je component or route import karaviye te.

//=================== method 1 start ===================


// const ClassCompoRoute = React.lazy(()=>{return import("./ClassCompoRouter")})


const ClassCompoRoute = React.lazy(()=>{
  return new Promise((resolve) => {
    setTimeout(()=> resolve(import("./ClassCompoRouter")),1000)
  })
})
//=================== method 1 end ===================
// when we are using arrow function and in it we have a curly brackets then its compulsory to use 'return'. OR else we know arrow function on default return a single value if we remove curly brackets as shown below.

// =====================method number 2 ======================
// const ClassCompoRoute = React.lazy(()=> import("./ClassCompoRouter"))
// =====================method number 2 ======================


const router = createBrowserRouter([
    {
      // path: "/",
      // element: <><MainHeader/></>,
      // element: <><Home/></>,
    },
    {
      path: "/",
      element: <><MainHeader/><Home/></>,
      // element: <><Aboutus/></>,
    },
    {
      path: "/aboutus",
      element: <><MainHeader/><Aboutus/></>,
      // element: <><Aboutus/></>,
    },
    {
      path: "/contactus",
      element: <><MainHeader/><Contactus/></>,
      // element: <><Contactus/></>,
    },
    {
      path: "/examples",
      element: <><MainHeader/><Examples/></>,
      children:[{
        // path : "classcompo",   *(star) darshave che k classcompo router che ani ander pan router che.
        path : "classcompo/*",
        // element: <>testing</>,
        element: <Suspense fallback= "Loading..."><ClassCompoRoute/></Suspense>
        // element: <Suspense fallback= "Loading...">data</Suspense>
      }]
    },
    
  ]);

  export default router;


