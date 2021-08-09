import React from 'react'
import Slider from 'react-slick'

//component
import Poster from './../Poster/poster.component'

const Premiere = () => {
    const settings={
        arrow:true,
        autoplay:false,
        infinte:false,
        slidesToShow:5,
        slidesToScroll:2,
        InitialSlide:0,
        responsive:[{
            breakpoints:1024,
            settings:{
                slidesToShow:3,
                slidesToScroll:2,
                infinte:true
            }
        },
        {
            breakpoints:600,
            settings:{
                slidesToShow:2,
                slidesToScroll:1,
                InitialSlide:1,
            }
        },
        {
            breakpoints:480,
            settings:{
                slidesToShow:2,
                slidesToScroll:1,
               
            }
        }
    ]
    }
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
    ]
    return (
        <>
         <Slider {...settings}>
             {
                 images.map((image)=>(
                     <Poster {...image}/>
    ))
             }
         </Slider>   
        </>
    )
}

export default Premiere
