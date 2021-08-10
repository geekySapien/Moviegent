import React from 'react';

//component
import EntertainmentCardSlider from '../components/Entertainment/Entertainment.component';
import Premiere from '../components/Premiere/Premiere.component';


const HomePage=()=>{
    return (
        <>

        <div className="flex flex-col gap-10">
        <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800 my-3 ">The Best of Entertainment</h1>
        <EntertainmentCardSlider/>
        </div>
        <div className="bg-premiere-800 py-12 ">
        <div className="container mx-auto px-4 flex flex-col gap-3" >
            <div className="hidden md:flex ">
                <div className="w-full h-24">
                    <img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png" alt="Premiere" className="w-full h-full"/>
                    
                </div>
                
            </div>
            <Premiere/>
        </div>
        </div>    
        </div>

        </>
    )
}

export default HomePage;