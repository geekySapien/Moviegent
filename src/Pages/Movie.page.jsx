import React from 'react'

import {FaCcVisa,FaCcApplePay} from 'react-icons/fa'

//component
import MovieHero from '../components/MovieHero/MovieHero.component'

const Movie = () => {
    return (
        <>
        <MovieHero/>
        <div className="my-12 container lg:ml-20 px-4 lg:w-2/3">
             <div className="flex flex-col items-start gap-3 ">
                 <h1 className="text-gray-800 text-2xl font-bold">About the movie</h1>
                 <p className="">Bruce Wayne and Diana Prince try to bring the metahumans of Earth together 
                 after the death of Clark Kent. Meanwhile, Darkseid sends Steppenwolf to Earth with an army to subjugate humans.</p>
             </div> 
             <div className="my-8">
                <hr/>
             </div>  
            <div className="my-8">
                <h1 className="text-gray-800 text-lg font-bold">
                     Applicable Offers 
                </h1>
            
                <div className="flex items-start  bg-yellow-200 gap-4 p-3 border border-yellow-400 border-dashed">
                    <div className="w-8 h-8">
                        <FaCcVisa className="w-full h-full"/>
                    </div>
                    <div className="flex flex-col items-start gap-1">
                        <h3 className="text-gray-700 text-xl font-bold">Visa Streamming Offer</h3>
                        <p className="text-gray-600">Get 50% off up to INR 150 on all Visa cards* on BookMyShow Stream.</p>
                    </div> 
                </div>
            </div>
        </div>
        </>
    )
}

export default Movie
