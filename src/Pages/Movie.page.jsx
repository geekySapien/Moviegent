import React from 'react'

//component
import MovieHero from '../components/MovieHero/MovieHero.component'

const Movie = () => {
    return (
        <>
        <MovieHero/>
        <div className="my-12 container lg:ml-20 px-4">
             <div className="flex flex-col items-start gap-3 lg:w-2/3">
                 <h1 className="text-gray-800 text-2xl font-bold">About the movie</h1>
                 <p className="">Bruce Wayne and Diana Prince try to bring the metahumans of Earth together after the death of Clark Kent. Meanwhile, Darkseid sends Steppenwolf to Earth with an army to subjugate humans.</p>
             </div>   
        </div>
        </>
    )
}
{/*11:43 */}
export default Movie
