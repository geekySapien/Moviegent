import React from 'react';

//component
import EntertainmentCardSlider from '../components/Entertainment/Entertainment.component';
import Premiere from '../components/Premiere/Premiere.component';


const HomePage=()=>{
    return (
        <>

        <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800 my-3">The Best of Entertainment</h1>
        <EntertainmentCardSlider/>
        <Premiere/>
        
        </div>
        </>
    )
}

export default HomePage;