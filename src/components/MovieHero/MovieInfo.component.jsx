import React, { useContext } from "react";
import { MovieContext } from "../../context/movie.context";
const MovieInfo = () => {
  const { movie } = useContext(MovieContext);

  //optional chaining
  const genres = movie.genres?.map(({ name }) => name).join(", ");

  return (
    <>
      <div className="flex flex-col gap-3  lg:gap-8">
        <div className="flex items-center gap-3 md:px-4">
          <div className="w-40 h-8">
            <img
              src="https://in.bmscdn.com/moviemode/tvod/premiere-tag.png"
              alt="Premiere"
              className="w-full h-full"
            />
          </div>
          <span className="bg-bms-800 p-1 text-white rounded-md">
            Streaming Now
          </span>
        </div>
        <h1 className="hidden lg:block text-white lg:text-5xl font-bold">
          {movie.original_title}
        </h1>
        <div className="flex flex-col-reverse lg:flex-col gap-3 lg:gap-5">
          <div className="font-light flex flex-col gap-2 md:px-4">
            <div className="text-white text-sm">
              4K &bull; {movie.original_language} &bull;
              <span className="text-red-500 font-bold"> Subtitles(1)</span>
            </div>
            <div className="text-white text-sm ">
              {(movie.runtime/60).toFixed(2)} h &bull; {genres}
            </div>
          </div>
          <div className="flex items-center gap-3 md:w-screen lg:w-full md:px-4">
            <button className="bg-red-600 w-full py-3 text-white font-semibold rounded-lg">
              Rent ₹149
            </button>
            <button className="bg-red-600 w-full py-3 text-white font-semibold rounded-lg">
              Buy ₹149
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieInfo;
