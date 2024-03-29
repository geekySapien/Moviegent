import React, {useContext} from "react";
import {
  BiChevronRight,
  BiChevronDown,
  BiSearchAlt2,
  BiMenu,
  BiShareAlt,
} from "react-icons/bi";

import { MovieContext } from '../../context/movie.context';

const NavSm = () => {
  const { movie } = useContext(MovieContext);
  return (
    <>
      <div className="text-white flex items-center justify-between">
        <div>
          <h3 className="text-xl font-bold ">{movie.original_title}</h3>
        </div>
        <div className="w-8 h-8">
          <BiShareAlt className="w-full h-full" />
        </div>
      </div>
    </>
  );
};
const NavLg = () => {
  return (
    <>
      <div className="container mx-auto px-4 flex  justify-between">
        <div className="flex items-center gap-3 w-1/2">
          <div className="w-12 h-12">
            <img
              src="https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png"
              alt="brand__img"
              className="w-full h-full"
            />
          </div>
          <div className="w-full flex items-center gap-3 bg-white px-3 py-2 rounded-md ">
            <BiSearchAlt2 className="w-8 h-8" />
            <input
              type="search"
              className="w-full bg-transparent border-none focus:outline-none"
              placeholder="Search for Movies, Plays, Sports and Activities"
            />
          </div>
        </div>
        <div className="flex gap-3 items-center">
          <span className="text-gray-200 text-xs flex items-center hover:text-white cursor-pointer">
            Ahmedabad
            <BiChevronDown />
          </span>
          <button className="bg-red-600 text-white px-3 py-2 text-sm rounded w-full">
            Sign In
          </button>
          <div className="w-16 h-16 text-white">
            <BiMenu className="w-full h-full" />
          </div>
        </div>
      </div>
    </>
  );
};

const MovieNavbar = () => {
  return (
    <>
      <nav className="absolute inset-x-0 z-30 bg-opacity-10 backdrop-filter backdrop-blur-lg lg:relative lg:bg-bms-700 p-4">
        <div className="md:hidden">
          <NavSm />
        </div>
        <div className="hidden md:block lg:hidden">
          <NavSm />
        </div>
        <div className="hidden lg:flex">
          <NavLg />
        </div>
      </nav>
    </>
  );
};

export default MovieNavbar;
