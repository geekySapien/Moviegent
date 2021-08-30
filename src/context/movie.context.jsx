import React from "react";

export const MovieContext = React.createContext();

 const MovieProvier = ({ children }) => {
  const [movie, setMovie] = React.useState({
    id: 0,
    original_title: "",
    backdrop_path: "",
    poster_path: "",
    overview: "",
  });
  return (
    <MovieContext.Provider value={{ movie, setMovie }}>
      {children}
    </MovieContext.Provider>
  );
};

export default MovieProvier;
