import React, { useContext } from "react";
import { MovieContext } from "./../../context/movie.context";
//components

import MovieInfo from "./MovieInfo.component";

const MovieHero = () => {
  const { movie } = useContext(MovieContext);
  return (
    <>
      <div>
        <div className="relative md:hidden" style={{ height: "calc(180vw)" }}>
          <img
            src={`https://www.themoviedb.org/t/p/original${movie.poster_path}`}
            alt="Poster"
            className="w-full h-full"
          />
          <div className="w-full h-56 bg-opacity-60 absolute bg-black z-10 bottom-0" />
          <div className="absolute z-20 bottom-4 left-4">
            <MovieInfo />
          </div>
        </div>
        <div
          className="relative hidden md:block lg:hidden"
          style={{ height: "calc(100vw)" }}
        >
          <div className="w-full h-56 bg-opacity-80 absolute bg-black z-10 bottom-0" />
          <div className="absolute z-20 bottom-4 ">
            <MovieInfo />
          </div>
          <img
            src={`https://www.themoviedb.org/t/p/original${movie.poster_path}`}
            alt="Poster"
            className="w-full h-full"
          />
        </div>
        <div
          className="relative hidden w-full lg:block"
          style={{ height: "30rem" }}
        >
          <div
            className="absolute w-full h-full z-10"
            style={{
              backgroundImage:
                " linear-gradient(90deg, rgb(34, 34, 34) 24.97%, rgb(34, 34, 34) 38.3%, rgba(34, 34, 34, 0.04) 97.47%, rgb(34, 34, 34) 100%)",
            }}
          />
          <div className="absolute z-30 left-24 top-10 flex items-center gap-10 ">
            <div className=" w-64 h-96  ">
              <img
                src={`https://www.themoviedb.org/t/p/original${movie.poster_path}`}
                alt="Poster"
                className="h-full w-full rounded-xl"
              />
            </div>
            <div>
              <MovieInfo />
            </div>
          </div>
          <img
            src={`https://www.themoviedb.org/t/p/original${movie.backdrop_path}`}
            className="w-full h-full"
          />
        </div>
      </div>
    </>
  );
};

export default MovieHero;
