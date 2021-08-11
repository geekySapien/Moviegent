import React from 'react'

//component
import Navbar from '../components/Navabr/navbar.component';



const MovieLayout = (props) => {
    return (
        <>
          <Navbar/> 
          {props.children} 
        </>
    )
}

export default MovieLayout
