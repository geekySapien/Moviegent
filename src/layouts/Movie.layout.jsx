import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
//component
import MovieNavbar from "../components/Navabr/movieNavbar.component";

//context
import { MovieContext } from "./../context/movie.context";

const MovieLayout = (props) => {
  const { id } = useParams();
  return (
    <>
      <MovieNavbar />
      {props.children}
    </>
  );
};

export default MovieLayout;
