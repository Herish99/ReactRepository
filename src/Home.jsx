import React from "react";
import "./home.css";

const Home = () => {
  return (
    <>
      <section className="h-head">
        <div className="row">
          <div className="col-8">
            <h5 className="col-light">Hi, i'm Herish Parmar</h5>
            <h3 className="col-drk fwB">FRONT END DEVELOPER</h3>
            <h5>A passionate front end developer from Gujarat, india </h5>
            <div className="icons d-flex">
              <div className="in-icon pe-3 fs-3">
                <a href="https://github.com/Herish99">
                <i class="fa-brands fa-github " style={{color: '##000000'}}></i>
                </a>
              </div>
              <div className="in-icon pe-3 fs-3">
                <a href="https://www.linkedin.com/in/herish-parmar-5a8a32132/">
                <i class="fa-brands fa-linkedin" style={{color: "#3b75d8"}}></i>
                </a>
              </div> 
            </div>
          </div>
          <div className="col-4">
            <img src="./images/img.jpg" alt="" />
          </div>
        <div className="icon-list w-75 py-5">
          <div className="d-flex w-50 line justify-content-between align-items-center">
            <h5 className="col-drk">Tech </h5>
            <div className="icons-type">
              
                <li>
                  <i className="fa-brands fa-html5" style={{color: '#d74f2d'}}></i>
                </li>
                <li>
                  <i className="fa-brands fa-css3" style={{color: "#3b75d8"}}></i>
                </li>
                <li>
                  <i className="fa-brands fa-js" style={{color: "#f9f61f"}}></i>
                </li>
                <li>
                  <i className="fa-brands fa-react" style={{color: "#669af5"}}></i>
                </li>
                <li>
                  <i className="fa-brands fa-bootstrap" style={{color: "#124eb5"}}></i>
                </li>
              
            </div>
          </div>
        </div>
        </div>
      </section>
    </>
  );
};

export default Home;
