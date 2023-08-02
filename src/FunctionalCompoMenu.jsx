import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const FunctionalCompoMenu = () => {
    return (
        <>
        <div className='col-lg-6 offset-lg-7'>
            <ol>
                <li><Link to="functionalintro">Intro Of Functional Component</Link></li>
                <li><Link to="renderingFunctionalcompo">Rendering Of Functional Component</Link></li>
                <li><Link to="stateinFunctionalcompo">State in Functional Component</Link></li>
            </ol>
        </div>
                <Outlet/>
                {/* jo Outlet div ni andar hase to content j dekhay te full space occupy nai kare. shukam ...kem k apde div ne offset apyu che means k te etli space agadthi chodi dese pachi content delhadvana sharu karse. */}
        </>
    );
};

export default FunctionalCompoMenu;