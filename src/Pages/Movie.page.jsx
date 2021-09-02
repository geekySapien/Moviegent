import React, { useContext, useState, useEffect } from "react";

import { useParams } from "react-router-dom";

import axios from "axios";

import { FaCcVisa, FaCcApplePay } from "react-icons/fa";

//component
import MovieHero from "../components/MovieHero/MovieHero.component";
import Cast from "../components/Cast/Cast.component";
import PosterSlider from "../components/PosterSlider/PosterSlider";
import {
  NextArrow,
  PrevArrow,
} from "../components/HeroCarousel/Arrows.component";

//context
import { MovieContext } from "../context/movie.context";

//config
import TempImages from "../config/TempPoster.config";

import Slider from "react-slick";

const Movie = () => {
  const { id } = useParams();
  const { movie } = useContext(MovieContext);
  const [cast, setCast] = useState([]);
  const [similarMovies, setSimilarMovies] = useState([]);
  const [recommendedMovies, setRecommendedMovies] = useState([]);
  useEffect(() => {
    const requestCast = async () => {
      const getCastData = await axios.get(`/movie/${id}/credits`);
      setCast(getCastData.data.cast);
    };
    requestCast();
  },[id]);

  useEffect(() => {
    const requestSimilarMovies = async () => {
      const getSimilarMovies = await axios.get(`/movie/${id}/similar`);

      setSimilarMovies(getSimilarMovies.data.results);
      //console.log(getCastData);
    };

    requestSimilarMovies();
  }, [id]);

  useEffect(() => {
    const requestRecommendedMovies = async () => {
      const getRecommendedMovies = await axios.get(
        `/movie/${id}/recommendations`
      );
      setRecommendedMovies(getRecommendedMovies.data.results);
    };
    requestRecommendedMovies();
    //console.log(upcoming);
  }, [id]);

  const settings = {
    arrow: true,
    autoplay: false,
    infinte: false,
    slidesToShow: 4,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinte: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const settingsCast = {
    arrow: true,
    autoplay: false,
    infinte: false,
    slidesToShow: 6,
    slidesToScroll: 2,
    initialSlide: 0,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          infinte: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <MovieHero />
      <div className="my-12 container lg:ml-20 px-4 lg:w-2/3">
        <div className="flex flex-col items-start gap-3 ">
          <h2 className="text-gray-800 text-2xl font-bold">About the movie</h2>
          <p className="">{movie.overview}</p>
        </div>
        <div className="my-8">
          <hr />
        </div>
        <div className="my-8 flex flex-col gap-3">
          <h2 className="text-gray-800 text-xl font-bold">Applicable Offers</h2>

          <div className="flex flex-col gap-3 lg:flex-row">
            <div className="flex items-start  bg-yellow-100 gap-4 p-3 border-yellow-400 border-dashed border-2 rounded-md">
              <div className="w-8 h-8">
                <FaCcVisa className="w-full h-full" />
              </div>
              <div className="flex flex-col items-start gap-1">
                <h3 className="text-gray-700 text-xl font-bold">
                  Visa Streamming Offer
                </h3>
                <p className="text-gray-600">
                  Get 50% off up to INR 150 on all Visa cards* on BookMyShow
                  Stream.
                </p>
              </div>
            </div>
            <div className="flex items-start  bg-yellow-100 gap-4 p-3 border-yellow-400 border-dashed border-2 rounded-md">
              <div className="w-10 h-10">
                <FaCcApplePay className="w-full h-full" />
              </div>
              <div className="flex flex-col items-start gap-1">
                <h3 className="text-gray-700 text-xl font-bold">Filmy Pass</h3>
                <p className="text-gray-600">
                  Get Rs.75* off on 3 movies you buy/rent on Stream. Buy Filmy
                  Pass @Rs.99
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="my-8">
          <hr />
        </div>
        <div className="my-8">
          <h2 className="text-xl font-bold text-gray-800">Cast and Crew</h2>
        </div>
        <Slider {...settingsCast}>
          {cast.map((getCastData) => (
            <Cast
              image={`https://www.themoviedb.org/t/p/original/${getCastData.profile_path}`}
              castName={getCastData.original_name}
              role={getCastData.character}
            />
          ))}
        </Slider>

        <div className="my-8">
          <PosterSlider
            config={settings}
            images={recommendedMovies}
            title="You might also like"
            subtitle=""
          />
        </div>
        <div className="my-8">
          <PosterSlider
            config={settings}
            images={similarMovies}
            title="BMS XCLUSIV"
            subtitle=""
          />
        </div>
      </div>
    </>
  );
};

export default Movie;
