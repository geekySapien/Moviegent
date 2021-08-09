import React from 'react'
import HeroSlider from "react-slick";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroCarousel = () => {
    const settingsLg={
        arrows:true,
        autoplay:true,
        centerMode:true,
        centerPadding:"300px",
        infinite: true,
        slidesToShow:1,
        slidesToScroll: 1
    };
    const settings={
    arrows:true, 
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
    };
    const images=["https://images.unsplash.com/photo-1593642532744-d377ab507dc8?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", 
    "https://images.unsplash.com/photo-1628417632477-5919c98218d5?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1628270680011-41792b21de87?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", 
    "https://images.unsplash.com/photo-1627662056598-dcfc5000f769?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyNXx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1586227740560-8cf2732c1531?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw0OXx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"];
    return (
        <>
            <div className="lg:hidden">
                <HeroSlider {...settings}>
                    {
                        images.map((image)=>(
                            <div className="h-44 w-full py-3 md:h-64">
                                <img src={image} alt="testing" className="h-full w-full" />
                            </div>
                        ))
                    }
                </HeroSlider>
            </div>
            <div className="hidden lg:block">
                    <HeroSlider {...settingsLg}>
                        {
                            images.map((image)=>(
                                <div className="w-20 h-80 px-2 py-3">
                                    <img src={image} alt="testing" className="w-full h-full" />
                                </div>
                            ))
                        }
                    </HeroSlider>
            </div>
        </>
    )

}

export default HeroCarousel;
