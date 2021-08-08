import React from 'react';
import HeroCarousel from '../components/HeroCarousel/HeroCarousel';
import Navbar from '../components/Navabr/navbar.component';


const DefaultLayout = (props) => {
   return(
    <div>
        {/*<h1 className="text-xl">This is Default Layout </h1>*/}
        <Navbar/>
        <HeroCarousel/>
        {props.children}
    </div>
   ) 
}

export default DefaultLayout;