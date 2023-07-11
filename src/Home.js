import React from "react";
import Header from "./component/header";
import Contact from "./Contact";
import About from "./About";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <>
     <div className="container">
      <Header />

      <Outlet/>
      {/* <h1>Home page</h1> */}
      </div>
    </>
  );
};

export default Home;
