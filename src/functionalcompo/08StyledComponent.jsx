import React from "react";
// import './08styled.css'
import styles from "./08 css/Container.module.css"; // Import css modules stylesheet as styles
const StyledComponent = () => {
  return (
    <>
      <div className={styles.container}>
        <h1>Styled Component</h1>
        <p>
          If we have applied css to particular component and on export to
          different component it will be applied to whole component even if we
          have not applied css which is a drawback of it , so to overcome that
          problem 'styled' has been introduced.
        </p>
        <p>
          We have made a file named 08styled.css and applied a bg color to
          container for only StyledComponent.jsx but it will be applied to full
          page wheerever container is used which is a drawback. Reason for this
          is that all file gets togather and gets exucution.{" "}
        </p>
        <h3>Solution</h3>
        <p></p>
        <p>
          <a
            target="blank"
            href="https://create-react-app.dev/docs/adding-a-css-modules-stylesheet/"
          >
            Css module in react
          </a>
        </p>
        <h2>Adding a CSS Modules Stylesheet</h2>
        <p>
          Should you want to preprocess a stylesheet with Sass then make sure to
          follow the installation instructions and then change the stylesheet
          file extension as follows: [name].module.css or [name].module.sass.
        </p>
        <p>
          Then import like this , import styles from './08
          css/Container.module.css'; // Import css modules stylesheet as styles
        </p>
      </div>
    <h3>Inline css (Not recomended to use)</h3>
    <p style={{color:'blueviolet', fontSize: '25px' }}> 
    brLorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda dolore, animi, exercitationem vero eum maiores quisquam natus eligendi libero voluptates illo in, consequuntur ut quae?</p>

    <h3>3rd Method Styled components</h3>
    <p>It is a plugin which should install first</p>
    
    <p><a href="https://styled-components.com/">Styled component</a></p>

    </>
  );
};

export default StyledComponent;
