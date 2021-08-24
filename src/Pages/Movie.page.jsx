import React from 'react'

import {FaCcVisa,FaCcApplePay} from 'react-icons/fa'


//component
import MovieHero from '../components/MovieHero/MovieHero.component'
import Cast from '../components/Cast/Cast.component'
import PosterSlider from '../components/PosterSlider/PosterSlider';


//config
import TempImages from '../config/TempPoster.config';

const Movie = () => {
    const settings={
        arrow:true,
        autoplay:false,
        infinte:false,
        slidesToShow:4,
        slidesToScroll:2,
        initialSlide:0,
        responsive:[{
            breakpoint:1024,
            settings:{
                slidesToShow:3,
                slidesToScroll:2,
                infinte:true
            }
        },
        {
            breakpoint:600,
            settings:{
                slidesToShow:3,
                slidesToScroll:1,
                initialSlide:1,
            }
        },
        {
            breakpoint:480,
            settings:{
                slidesToShow:3,
                slidesToScroll:1,
               
            }
        }
    ]
    }
    
    
    return (
        <>
        <MovieHero/>
        <div className="my-12 container lg:ml-20 px-4 lg:w-2/3">
             <div className="flex flex-col items-start gap-3 ">
                 <h2 className="text-gray-800 text-2xl font-bold">About the movie</h2>
                 <p className="">Bruce Wayne and Diana Prince try to bring the metahumans of Earth together 
                 after the death of Clark Kent. Meanwhile, Darkseid sends Steppenwolf to Earth with an army to subjugate humans.</p>
             </div> 
             <div className="my-8">
                <hr/>
             </div>  
            <div className="my-8 flex flex-col gap-3">
                <h2 className="text-gray-800 text-xl font-bold">
                     Applicable Offers 
                </h2>
            
                <div className="flex flex-col gap-3 lg:flex-row">
                    <div className="flex items-start  bg-yellow-100 gap-4 p-3 border-yellow-400 border-dashed border-2 rounded-md">
                        <div className="w-8 h-8">
                            <FaCcVisa className="w-full h-full"/>
                        </div>
                        <div className="flex flex-col items-start gap-1">
                            <h3 className="text-gray-700 text-xl font-bold">Visa Streamming Offer</h3>
                            <p className="text-gray-600">Get 50% off up to INR 150 on all Visa cards* on BookMyShow Stream.</p>
                        </div> 
                    </div>
                    <div className="flex items-start  bg-yellow-100 gap-4 p-3 border-yellow-400 border-dashed border-2 rounded-md">
                        <div className="w-10 h-10">
                            <FaCcApplePay className="w-full h-full"/>
                        </div>
                        <div className="flex flex-col items-start gap-1">
                            <h3 className="text-gray-700 text-xl font-bold">Filmy Pass</h3>
                            <p className="text-gray-600">Get Rs.75* off on 3 movies you buy/rent on Stream. Buy Filmy Pass @Rs.99</p>
                        </div> 
                    </div>
                </div>
            </div>
            
            <div className="my-8">
                <hr/>
             </div>
            <div className="my-8">
                <h2 className="text-xl font-bold text-gray-800">Cast and Crew</h2>
            </div>
            <div className="flex flex-wrap gap-4">
                <Cast image="https://in.bmscdn.com/iedb/artist/images/website/poster/large/ben-affleck-292-12-09-2017-05-12-16.jpg" castName="Ben Alfeck" role="Batman"/>
                
                <Cast image="https://in.bmscdn.com/iedb/artist/images/website/poster/large/henry-cavill-23964-04-05-2020-04-25-14.jpg" castName="Henry Cavil" role="Superman"/>
                 
                <Cast image="https://in.bmscdn.com/iedb/artist/images/website/poster/large/gal-gadot-11088-17-10-2017-11-45-36.jpg" castName="Gal Gadot" role="Wonder Woman"/>
                
            </div>
            <div className="my-8">
                <PosterSlider config={settings }images={TempImages} title="You might also like" subtitle=""/>
            </div>
            <div className="my-8">
                <PosterSlider config={settings }images={TempImages} title="BMS XCLUSIV" subtitle=""/>
            </div>
        </div>
        </>
    )
}

export default Movie
