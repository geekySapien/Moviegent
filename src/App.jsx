import axios from "axios";
import { Route } from "react-router-dom";
import DefaultHOC from "./HOC/Default.HOC";
import MovieHOC from "./HOC/Movie.HOC";
//import Temp from "./components/temp";
//import { render } from "@testing-library/react";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//components
import HomePage from "./Pages/Home.page";
import MoviePage from "./Pages/Movie.page";
import Plays from "./Pages/Plays.page";

//axios default settings
axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = {};
axios.defaults.params["api_key"] = process.env.REACT_APP_API_KEY;

function Name() {
  return <h1>Hello root</h1>;
}
function Name2() {
  return <h1>Hello Root2</h1>;
}

const App = () => (
  <>
    <div className="App">
      {/*<Route path="/" exact component={Name} />*/}
      {/*Route path ="/name2" exact  component={Name2}/>*/}
      {<DefaultHOC path="/" exact component={HomePage} />}
      <MovieHOC path="/movie/:id" exact component={MoviePage} />
      <DefaultHOC path="/plays" exact component={Plays} />
    </div>
  </>
);

export default App;
