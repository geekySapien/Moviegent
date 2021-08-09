import React from 'react';
import EntertainmentCardSlider from '../components/Entertainment/Entertainment.component';

//component

const HomePage=()=>{
    return (
        <>

        <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800 my-3">The Best of Entertainment</h1>
        <EntertainmentCardSlider/>
        </div>
        </>
    )
}

export default HomePage;