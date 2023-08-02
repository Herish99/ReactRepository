import React from "react";
import "./App.css";
// import { NavLink } from "react-router-dom";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Router from './Router'

const App = () => {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Home />}>
    //       <Route path="about" element={<About />} />
    //       <Route path="contact" element={<Contact />} />
    //     </Route>
    //   </Routes>
    // </BrowserRouter>

    <div>
      {/* <NavbarCompo/> */}
      <RouterProvider router={Router}/>
    </div>
  );
};

export default App;
