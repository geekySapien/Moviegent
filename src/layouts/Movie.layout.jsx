import React from 'react'


//component
import MovieNavbar from '../components/Navabr/movieNavbar.component'



const MovieLayout = (props) => {
    return (
        <>
          <MovieNavbar/> 
          {props.children} 
        </>
    )
}

export default MovieLayout
