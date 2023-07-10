import React from 'react';
import ReactDOM from 'react-dom/client';
import FirstComponent from './Component.jsx'
import Babel from './01BabelinReactjs.jsx';
import Navbar from './Navbar.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<>
<FirstComponent/>
<Babel/>
<Navbar/>
{/* <Header/> */}
</>)

