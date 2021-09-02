import React, { useState, useEffect, useContext } from "react";

import { Link } from 'react-router-dom';
import axios from "axios";

//component

import Poster from "../components/Poster/poster.component";
import Filter from "../components/PlaysFilters/Filter.component";

//context
import { MovieContext } from "../context/movie.context";

const Plays = (props) => {
  const { movie } = useContext(MovieContext);
  const [latest, setLatest] = useState([]);

  useEffect(() => {
    const requestLatest = async () => {
      const getLatestData = await axios.get("/movie/now_playing");
      console.log(getLatestData);
      setLatest(getLatestData.data.results);
    };
    requestLatest();
  }, []);

  return (
    <>
      <div className="container mx-auto px-4">
        <div className="w-full lg:flex lg:flex-row-reverse gap-10">
          <div className="w-full lg:w-3/4">
            <h2 className="text-2xl font-bold mb-3">Trending in Ahmedabad</h2>
            <div className="flex flex-wrap ">
              {latest.map((latestImage) => (
                <div className=" w-1/3 lg: w-1/4 my-3">
                  <Link to={`/movie/${latestImage.id}`}>
                  <div className="flex flex-col items-start gap-2 px-1 md:px-3 ">
                    <div className=" h-40 md:h-80">
                      <img
                        src={`https://image.tmdb.org/t/p/original${latestImage.poster_path}`}
                        alt={latestImage.original_title}
                        className="w-full h-full rounded-md"
                      />
                    </div>
                    <h3
                      className={`sm:text-sm md:text-md lg:text-lg font-bold "text-gray-700" `}
                    >
                      {latestImage.original_title}
                    </h3>
                  </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/4 ">
            <h1 className="text-2xl font-bold mb-3">Filters</h1>
            <div className="flex flex-col gap-4">
              <Filter
                title="Date"
                tags={["Today", "Tomorrow", "This Weekend"]}
              />
              <Filter
                title="Language"
                tags={["Hindi", "English", "Tamil", "Gujarati", "Kannada"]}
              />
              <Filter title="Categories" tags={["Theatre"]} />
              <Filter
                title="Genres"
                tags={[
                  "Drama",
                  "Comedy",
                  "Historical",
                  "Online Streaming Plays",
                  "Adaption",
                ]}
              />
              <Filter
                title="More Filters"
                tags={["Online Streaming", "Kids Allowed", "Outdoor Events"]}
              />
              <Filter
                title="Price"
                tags={["0-500", "501-2000", "Above 2000"]}
              />
              <button className="w-full p-1 text-red-600 bg-gray-50 border-2 rounded-md border-red-500">
                Browse by Venues
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Plays;
