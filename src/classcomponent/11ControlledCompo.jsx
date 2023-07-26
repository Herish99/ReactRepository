import React, { Component } from "react";

export default class ControlledCompo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputData: "",
      username: "",
      password: "",
      formData:{},      //blank object in that future data will be stored like above which are not wraped(bunch).
    };
  }

  render() {
    return (
      <>
        <h2>Controlled compo</h2>
        <p>
          Controlled Components: In React, Controlled Components are those in
          which form's data is handled by the component's state. It takes its
          current value through props and makes changes through callbacks like
          onClick, onChange, etc. A parent component manages its own state and
          passes the new values as props to the controlled component.
        </p>
        <p>
          In HTML, form elements such as &lt;input&gt;, &lt;textarea&gt;, and
          &lt;select&gt; typically maintain their own state and update it based
          on user input. In React, mutable state is typically kept in the state
          property of components, and only updated with setState().
        </p>
        <p>
          We can combine the two by making the React state be the “single source
          of truth”. Then the React component that renders a form also controls
          what happens in that form on subsequent user input. An input form
          element whose value is controlled by React in this way is called a{" "}
          <q>controlled component</q>.
        </p>

        <p>
          For example, if we want to make the previous example log the name when
          it is submitted, we can write the form as a controlled component:
        </p>
        {JSON.stringify(this.state)}

        <form action="" method="post">
          <table>
            <tbody>
              <tr>
                <td>
                  <label htmlFor="text">Username</label>
                </td>
                <td>
                  {/* <input type="text" name="" id="text" onChange={(e) => {console.log(e.target.value);}} /> */}
                  <input
                    type="text"
                    name="inputData"
                    id="text"
                    placeholder="inputData"
                    onChange={(e) => {
                      this.setState({ inputData: e.target.value });
                    }}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="username"
                    placeholder="username"
                    id="text"
                    onChange={(e) => {
                      this.setState({ username: e.target.value });
                    }}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="password"
                    id="text"
                    placeholder="password"
                    onChange={(e) => {
                      this.setState({ password: e.target.value });
                    }}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="pass">password</label>
                </td>
                <td>
                  <input type="text" name="" id="pass" />
                </td>
              </tr>
            </tbody>
          </table>
        </form>

        {/* <p>As we have many inputs then doing it like this for every input not preffered. We can make 1 object and in that object we can wrap all data. As shown above in state as 'formData'</p> */}

        <form action="" method="post">
            {/* <input type="text" name="username" onChange={(event) =>{console.log(this.setState)}} /> */}
             {/*output:  ƒ (partialState, callback) {
      if (typeof partialState !== 'object' && typeof partialState !== 'function' && partialState != null) {
        throw new Error('setState(...): takes an object of state… */}


        {/* all inputs are to be stored in 1 wrapper at formData. below code represents that coding */}
            <input type="text" name="username" onChange={(event) =>{console.log(this.setState((data) =>({formData:{...data.formData,[event.target.name]:event.target.value}})))}} />
            <input type="text" name="password" onChange={(event) =>{console.log(this.setState((data) =>({formData:{...data.formData,[event.target.name]:event.target.value}})))}} />
            <input type="text" name="phone" onChange={(event) =>{console.log(this.setState((data) =>({formData:{...data.formData,[event.target.name]:event.target.value}})))}} />
            <input type="text" name="city" onChange={(event) =>{console.log(this.setState((data) =>({formData:{...data.formData,[event.target.name]:event.target.value}})))}} />
            {/* <input type="text" onChange={(event)=>{ this.setState((data)=>({formData:{...data.formData,[event.target.name]:event.target.value}})) }} name="username" id="" /> */}

        </form>
      </>
    );
  }
}
