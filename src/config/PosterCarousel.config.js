const settings={
    arrow:true,
    autoplay:false,
    infinte:false,
    slidesToShow:5,
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

export default settings;