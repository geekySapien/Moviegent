import { Route } from "react-router-dom";
import DefaultHOC from "./HOC/Default.HOC";
//import Temp from "./components/temp";
//import { render } from "@testing-library/react";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


//components
import HomePage from "./Pages/Home.page";




function Name(){
  return <h1>Hello root</h1>
}
function Name2(){
  return <h1>Hello Root2</h1>
}

const App=()=>(
  <>
    <div className="App">
     {/*<Route path="/" exact component={Name} />*/}
    {/*Route path ="/name2" exact  component={Name2}/>*/}
     { <DefaultHOC path="/" exact component={HomePage} />}
    </div>
  </>

)

   
      
    
    


export default App;
