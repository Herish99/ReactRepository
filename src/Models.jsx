import React from "react";
import Sections from "./component/Sections";
import CarSpecs from "./component/CarSpecs";

const Models = () => {
  const myStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL + "image/s-bg.avif"})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    // height:'100vh',
  };
//   const myStyle2 = {
//     backgroundImage: `url(${process.env.PUBLIC_URL + "image/s2-bg.avif"})`,
//     backgroundSize: "cover",
//     backgroundRepeat: "no-repeat",
//     height:'100vh',
//   };

  return (
    <>
      <div className="bg">
        <Sections
          dynh="Model S "
          description="Explore Inventory"
          backgroundImg={process.env.PUBLIC_URL + "image/s-bg.avif"}
          leftButton="Order Now"
          rightButton="Demo Drive"
        />

        <div className="solo-img custom-img-1">
          {/* <img src={process.env.PUBLIC_URL + "image/5.jpg"} alt="" /> */}
          <div className="title">High tech Intriour</div>
        </div>
        <div className="video-cont">
        <video  className="video" autoPlay loop src={process.env.PUBLIC_URL +"image/video.webm"} ></video>
        </div>

        <div className="container padd_top">
          <div className="row">
            <div className="col-50">
              <img src={process.env.PUBLIC_URL + "image/s-inter.avif"} alt="" />
            </div>
            <div className="col-50">
              <p>
                <b>Stay Connected</b>
              </p>
              <p>
                Instantly connect with multi-device Bluetooth, or fast charge
                devices with wireless and 36-watt USB-C charging.
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-50">
              <p>
                <b>Immersive sound</b>
              </p>
              <p>
                A 22-speaker, 960-watt audio system with Active Road Noise
                Reduction offers immersive listening and studio-grade sound
                quality.
              </p>
            </div>
            <div className="col-50">
              <img src={process.env.PUBLIC_URL + "image/sound.png"} alt="" />
            </div>
          </div>

          <div className="row">
            <div className="col-50">
              <img src={process.env.PUBLIC_URL + "image/s-2.avif"} alt="" />
            </div>
            <div className="col-50">
              <p>
                <b>Room For Everyting</b>
              </p>
              <p>
                With front and rear trunks and fold-flat seats you can fit your
                bike without taking the wheel off—and your luggage too. Compare
                Models.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-img">
          <div style={myStyle}>
            <div className="row s-text">
              <li>
                <p>1020</p>
                <p>peak power</p>
              </li>
              <li>
                <p>9.23s</p>
                <p>@155mph 1/4 mile </p>
              </li>
              <li>
                <p>1.99s</p>
                <p>0-60mph</p>
              </li>
            </div>
          </div>
        </div>


        <div className="solo-img custom-bg-img">
        {/* <img src={process.env.PUBLIC_URL + "image/s2-bg.avif"} alt="" /> */}
        {/* both way are correct for bg img to place above and the appplied one*/}
        </div>


        <div className="container padd_top">
            <div className="row">
            <div className="col-50">
              <img src={process.env.PUBLIC_URL + "image/tire.avif"} alt="" />
            </div>
            <div className="col-50">
              <p>
                <b>Rentless Perfomance</b>
              </p>
              <p>
              Staggered, performance wheels and tires keep the car planted and help transfer maximum power down to the road.
              </p>
            </div>
            </div>


            <div className="row">
            <div className="col-50">
              <p>
                <b>Optimized Aerodynamics</b>
              </p>
              <p>
              Attention to detail on all exterior surfaces makes Model S the most aerodynamic production car on Earth.
              </p>
            </div>
            <div className="col-50">
              <img src={process.env.PUBLIC_URL + "image/bumpr.avif"} alt="" />
            </div>
            </div>


            <div className="row">
            <div className="col-50">
              <img src={process.env.PUBLIC_URL + "image/front.avif"} alt="" />
            </div>
            <div className="col-50">
              <p>
                <b>Refined Styling</b>
              </p>
              <p>
              An iconic silhouette meets refreshed, elegant proportions.
              </p>
            </div>
            </div>

            <CarSpecs/>

        </div>
      </div>
    </>
  );
};

export default Models;
