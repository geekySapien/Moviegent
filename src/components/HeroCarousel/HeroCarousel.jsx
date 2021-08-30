import React, { useEffect, useState } from "react";
import axios from "axios";
import HeroSlider from "react-slick";

//component

import { NextArrow, PrevArrow } from "./Arrows.component";

const HeroCarousel = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const requestNowPlayingMovies = async () => {
      const getImages = await axios.get("/movie/now_playing");
      console.log(getImages);
      setImages(getImages.data.results);
    };
    requestNowPlayingMovies();
  }, []);

  const settingsLg = {
    arrows: true,
    autoplay: false,
    centerMode: true,
    centerPadding: "300px",
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  const settings = {
    arrows: true,
    autoplay: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <>
      <div className="lg:hidden ">
        <HeroSlider {...settings}>
          {images.map((image) => (
            <div className="h-56 w-full py-3 md:h-80">
              <img
                src={`https://www.themoviedb.org/t/p/original${image.backdrop_path}`}
                alt="testing"
                className="h-full w-full "
              />
            </div>
          ))}
        </HeroSlider>
      </div>
      <div className="hidden lg:block">
        <HeroSlider {...settingsLg}>
          {images.map((image) => (
            <div className="w-full h-96 px-2 py-3">
              <img
                src={`https://www.themoviedb.org/t/p/original${image.backdrop_path}`}
                alt="testing"
                className="w-full h-full rounded-md"
              />
            </div>
          ))}
        </HeroSlider>
      </div>
    </>
  );
};

export default HeroCarousel;
