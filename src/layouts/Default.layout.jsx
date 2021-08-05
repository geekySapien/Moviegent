import React from 'react';
//import Navbar from '../components/Navabr/navbar.component';

const DefaultLayout = (props) => {
   return(
    <div>
        <h1 className="text-xl">This is Default Layout </h1>
        {props.children}
    </div>
   ) 
}

export default DefaultLayout;