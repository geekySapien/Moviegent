import React from "react";
import Slider from "react-slick";

const EntertainmentCard=(props)=>{
    return(
        <>
            <div className="w-full  h-30 px-2">
                <img src={props.src} alt="entertainment" className="w-full h-full rounded-xl" />
            </div>
        </>
    )
}

const EntertainmentCardSlider=()=>{
    const images=["https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MTgwKyBFdmVudHM%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/workshops-collection-202007231330.png",
    "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-NTArIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/kids-collection-202007220710.png",
    "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MTUrIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/fitness-collection-2020081150.png",
    "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-NTUrIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/comedy-shows-collection-202007220710.png",
    "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MSBFdmVudA%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/music-shows-collection-202007220710.png",
    "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MjArIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/self-improvement-collection-202007220710.png", 
    "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MiBFdmVudHM%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/interactive-games-collection-202012041129.png", 
    "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MTArIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/theatre-shows-collection-202012041128.png"];
    
    const settings={
        arrow:true,
        autoplay:false,
        infinte:false,
        slidesToShow:4,
        slidesToScroll:4,
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
    return (
        <>
        
        <Slider {...settings}>
            {
                images.map((image)=>(
                    <EntertainmentCard src={image}/>
                ))
            }
        </Slider>
        
        </>
    )
}

export default EntertainmentCardSlider;