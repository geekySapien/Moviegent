import React from 'react'
import Slider from 'react-slick'

//component
import Poster from './../Poster/poster.component'

//config
import PosterCarouselsettings from '../../config/PosterCarousel.config'

const Premiere = () => {
    
    const images=[
        {
            src:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00302293-savbwcehey-portrait.jpg",
            alt:"Radioactive",
            title:"Radioactive",
            subtitle:"English"
        },
        {
            src:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00302293-savbwcehey-portrait.jpg",
            alt:"Radioactive",
            title:"Radioactive",
            subtitle:"English"
        },
        {
            src:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00302293-savbwcehey-portrait.jpg",
            alt:"Radioactive",
            title:"Radioactive",
            subtitle:"English"
        },
        {
            src:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00302293-savbwcehey-portrait.jpg",
            alt:"Radioactive",
            title:"Radioactive",
            subtitle:"English"
        },
        {
            src:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00302293-savbwcehey-portrait.jpg",
            alt:"Radioactive",
            title:"Radioactive",
            subtitle:"English"
        },
        {
            src:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00302293-savbwcehey-portrait.jpg",
            alt:"Radioactive",
            title:"Radioactive",
            subtitle:"English"
        }
    ]
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
