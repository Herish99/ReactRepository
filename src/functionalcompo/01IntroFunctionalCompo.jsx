import React from 'react';

const IntroFunctionalCompo = () => {
    return (
        <>
            <h2>Functional Component Intro</h2>
      <p>This function is a valid React component because it accepts a single <q>props</q> (which stands for properties) object argument with data and returns a React element. We call such components <q>function components</q>  because they are literally JavaScript functions.</p>
      <h4>Functional Component</h4>
      <blockquote>
        <span className='text-primary'>function</span> <span className='text-info'>Welcome(props)</span>  &#123; <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; return &lt;h1&gt;Hello, &#123;props.name&#125;&lt;/h1&gt;; <br />
        &#125;<br />
      </blockquote>
        </>
    );
};

export default IntroFunctionalCompo;