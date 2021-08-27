import React from 'react';

//component
import EntertainmentCardSlider from '../components/Entertainment/Entertainment.component';


import PosterSlider from '../components/PosterSlider/PosterSlider';


//config
import TempImages from '../config/TempPoster.config';

const HomePage=()=>{
    return (
        <>

        <div className="flex flex-col gap-10">
            <div className="container mx-auto px-4">
                <h1 className="text-xl md:text-3xl font-bold text-gray-800 my-3 ">The Best of Entertainment</h1>
                <EntertainmentCardSlider/>
            </div>
            <div className="bg-premiere-800 py-12 ">
                <div className="container mx-auto px-4 flex flex-col gap-3" >
                    <div className="hidden md:flex ">
                        <div className="w-full h-24">
                            <img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png" alt="Premiere" className="w-full h-full"/>
                        </div>
                    </div>
                    <PosterSlider images={TempImages} title="Premiere" subtitle="Brand New Releases Every Friday" isDark="true"/>
                </div>
            </div> 
            <div className="container mx-auto px-4 " > 
                <PosterSlider images={TempImages} title="Online Streaming Events" subtitle=""/>
            </div>
             <div className="container mx-auto px-4 " > 
                <PosterSlider images={TempImages} title="Outdoor Events" subtitle=""/>
            </div>
        </div>

        </>
    )
}

export default HomePage;