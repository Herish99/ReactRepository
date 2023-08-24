import React from "react";
import styles from "./styled.module.css";
import StyledCartCompo from "./StyledCartCompo";

const Styled = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.navstyle}>
          <nav className="d-flex justify-content-between align-items-center py-3">
            <div className="logo">Styled Component</div>
            <div className="navlist">
              <ul className={styles.dipsfl}>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">contact</a>
                </li>
                <li>
                  <a href="#">Products</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.sec1}>
          <h1 className={styles.custhead}> Don't miss amazing grocery deals</h1>
          <h3 className="py-3">Sign up for daily newspaper</h3>
          <div className="py-3">
            <input
              type="text"
              className={styles.custinput}
              placeholder="Search..."
            />
            <span className="btn btn-primary btn-sm">Subscibe</span>
          </div>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.sec2}>
          <ul className={styles.dipsfl}>
            <li>
              <h5>Featured Categories</h5>
            </li>
            <li>Coke and Milk</li>
            <li>Coffee and Tea</li>
            <li>Pet Foods</li>
            <li>vegetables</li>
          </ul>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.custcards}>
          <div className={styles.custRow}>
            <div className="col-1">
              <StyledCartCompo
                product="Snacks"
                item="10"
                color="red"
                imgdata="https://images.unsplash.com/photo-1517093602195-b40af9688b46?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c25hY2tzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
              />
            </div>
            <div className="col-1">
              <StyledCartCompo
                product="vegetables"
                item="8"
                color="aqua"
                imgdata="https://images.unsplash.com/photo-1579113800032-c38bd7635818?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHZlZ2V0YWJsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
              />
            </div>
            <div className="col-1">
              <StyledCartCompo
                product="black Pulm"
                item="5"
                color="blue"
                imgdata="https://media.istockphoto.com/id/155149878/photo/a%C3%A7ai-berry-fruit-acai.webp?b=1&s=170667a&w=0&k=20&c=NPg20sPk3383s3xuSj8mpVqq3q1rl5ZTq-DlhwF5YQY="
              />
            </div>
            <div className="col-1">
              <StyledCartCompo
                product="Red chery"
                item="31"
                color="pink"
                imgdata="https://images.unsplash.com/photo-1528821154947-1aa3d1b74941?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hlcnJ5fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
              />
            </div>
            <div className="col-1">
              <StyledCartCompo
                product="Red wine"
                item="56"
                color="lime"
                imgdata="https://plus.unsplash.com/premium_photo-1664284045404-502142046c1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2luZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
              />
            </div>
            <div className="col-1">
              <StyledCartCompo
                product=" banana"
                item="22"
                color="bisque"
                imgdata="https://images.unsplash.com/photo-1603833665858-e61d17a86224?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmFuYW5hfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
              />
            </div>
            <div className="col-1">
              <StyledCartCompo
                product=" strawberry"
                item="20"
                color="tan"
                imgdata="https://media.istockphoto.com/id/477834644/photo/fresh-strawberries-background.webp?b=1&s=170667a&w=0&k=20&c=gccioa8WogvUMEuYSz-DhGMmF1zdqmlSk-LvFGbssN0="
              />
            </div>
            <div className="col-1">
              <StyledCartCompo
                product="custurd apple"
                item="6"
                color="tomato"
                imgdata="https://media.istockphoto.com/id/477834644/photo/fresh-strawberries-background.webp?b=1&s=170667a&w=0&k=20&c=gccioa8WogvUMEuYSz-DhGMmF1zdqmlSk-LvFGbssN0="
              />
            </div>
            <div className="col-1">
              <StyledCartCompo
                product="Coffee & Tea"
                item="26"
                color="teal"
                imgdata="https://images.unsplash.com/photo-1514483935006-b311818acf27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dGVhJTIwbmFkJTIwY29mZmVlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
              />
            </div>
            <div className="col-1">
              <StyledCartCompo
                product="Headphones"
                item="16"
                color="yellow"
                imgdata="https://images.unsplash.com/photo-1514483935006-b311818acf27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dGVhJTIwbmFkJTIwY29mZmVlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Styled;
