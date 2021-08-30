import axios from "axios";
import React, { useState, useEffect } from "react";

//component
import EntertainmentCardSlider from "../components/Entertainment/Entertainment.component";

import PosterSlider from "../components/PosterSlider/PosterSlider";

//config
import TempImages from "../config/TempPoster.config";

const HomePage = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [upcoming, setUpcoming] = useState([]);

  useEffect(() => {
    const requestPopularMovies = async () => {
      const getPopular = await axios.get("/movie/popular");
      setPopularMovies(getPopular.data.results);
    };
    requestPopularMovies();
    console.log(popularMovies);
  }, []);
  useEffect(() => {
    const requestTopRated = async () => {
      const getTopRated = await axios.get("/movie/top_rated");
      setTopRated(getTopRated.data.results);
    };
    requestTopRated();
    console.log(topRated);
  }, []);
  useEffect(() => {
    const requestUpcoming = async () => {
      const getUpcoming = await axios.get("/movie/upcoming");
      setUpcoming(getUpcoming.data.results);
    };
    requestUpcoming();
    console.log(upcoming);
  }, []);
  return (
    <>
      <div className="flex flex-col gap-10">
        <div className="container mx-auto px-4">
          <h1 className="text-xl md:text-3xl font-bold text-gray-800 my-3 ">
            The Best of Entertainment
          </h1>
          <EntertainmentCardSlider />
        </div>
        <div className="bg-premiere-800 py-12 ">
          <div className="container mx-auto px-4 flex flex-col gap-3">
            <div className="hidden md:flex ">
              <div className="w-full h-24">
                <img
                  src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png"
                  alt="Premiere"
                  className="w-full h-full"
                />
              </div>
            </div>
            <PosterSlider
              images={popularMovies}
              title="Premiere"
              subtitle="Brand New Releases Every Friday"
              isDark="true"
            />
          </div>
        </div>
        <div className="container mx-auto px-4 ">
          <PosterSlider
            images={topRated}
            title="Online Streaming Events"
            subtitle=""
          />
        </div>
        <div className="container mx-auto px-4 ">
          <PosterSlider images={upcoming} title="Outdoor Events" subtitle="" />
        </div>
      </div>
    </>
  );
};

export default HomePage;
