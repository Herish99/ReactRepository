import React from "react";
import { Link, Outlet } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="head">
        <nav className="row .nav-bg">
          <ul className="logo">
            <Link to={"/"}><svg xmlns="http://www.w3.org/2000/svg" width="150" height="50" viewBox="0 0 278.7 36.3" id="tesla"><path fill="#5e5e5e" d="M238.1 14.4v21.9h7V21.7h25.6v14.6h7V14.4h-39.6M244.3 7.3h27c3.8-.7 6.5-4.1 7.3-7.3H237c.8 3.2 3.6 6.5 7.3 7.3M216.8 36.3c3.5-1.5 5.4-4.1 6.2-7.1h-31.5V.1h-7.1v36.2h32.4M131.9 7.2h25c3.8-1.1 6.9-4 7.7-7.1H125v21.4h32.4V29H132c-4 1.1-7.4 3.8-9.1 7.3h41.5V14.4H132l-.1-7.2M70.3 7.3h27c3.8-.7 6.6-4.1 7.3-7.3H62.9c.8 3.2 3.6 6.5 7.4 7.3M70.3 21.6h27c3.8-.7 6.6-4.1 7.3-7.3H62.9c.8 3.2 3.6 6.5 7.4 7.3M70.3 36.3h27c3.8-.7 6.6-4.1 7.3-7.3H62.9c.8 3.2 3.6 6.6 7.4 7.3M0 .1c.8 3.2 3.6 6.4 7.3 7.2h11.4l.6.2v28.7h7.1V7.5l.6-.2h11.4c3.8-1 6.5-4 7.3-7.2V0L0 .1"></path></svg></Link>
          </ul>
          <ul>
            <li>
              <Link to={"/models"}>Model S</Link>
            </li>
            <li>
              <Link to={"/modele"}>Model 3</Link>
            </li>
            <li>
              <Link to={"/modelx"}>Model X</Link>
            </li>
            <li>
              <Link to={"/modely"}>Model Y</Link>
            </li>
            <li>
              <Link to={"#"}>Powerwall</Link>
            </li>
            <li>
              <Link to={"#"}>Solar Roof</Link>
            </li>
          </ul>

          <ul>
            <li>
              <Link to={'#'}>SHOP</Link>
            </li>
            <li>
              <Link to={'#'}>TESLA</Link>
            </li>
            <li>
              <Link to={'#'}>ACCOUNT</Link>
            </li>
          </ul>
        </nav>
      </header>
      {/* <Outlet/> */}
    </>
  );
};

export default Header;
