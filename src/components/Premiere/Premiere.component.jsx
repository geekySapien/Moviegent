import React from 'react'
import Slider from 'react-slick'

//component
import Poster from './../Poster/poster.component'

//config
import PosterCarouselsettings from '../../config/PosterCarousel.config'
import images from '../../config/TempPoster.config';

const Premiere = () => {
    
    
    return (
        <>
        <div className="flex flex-col items-start">
        <h3 className="text-xl text-white font-bold">Premieres</h3>
        <p className="text-sm text-white">Brand New Releases Every Friday</p>
        </div>
         <Slider {...PosterCarouselsettings}>
             {
                 images.map((image)=>(
                     <Poster {...image} isDark/>
    ))
             }
         </Slider>   
        </>
    )
}

export default Premiere
