import React from 'react'


//Slider
import Slider from 'react-slick';

//component
import Poster from './../Poster/poster.component'

//config
import PosterCarouselsettings from '../../config/PosterCarousel.config'


const PosterSlider=(props)=>{
   const sliderConfig=props.config?props.config:PosterCarouselsettings;
    return (
        <>
            <div className="flex flex-col items-start gap-3">
                <h3 className={`text-2xl font-bold ${props.isDark ? "text-white" : "text-gray-700"}`}>{props.title}</h3>
                <p className={`text-sm ${props.isDark ? "text-white" : "text-gray-700"}`}>{props.subtitle}</p>
            </div>
        
            <Slider {...sliderConfig}>
                {
                    props.images.map((image) => (
                        <Poster {...image} isDark={props.isDark} />
                    ))
                }
            </Slider>
        
        </>
    );
};

export default PosterSlider;