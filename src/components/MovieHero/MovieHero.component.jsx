import React from 'react'

const MovieHero = () => {
    return (
        <>
            <div>
                <div className="relative md:hidden" style={{height: "calc(180vw)"}}>
                    <div className="w-full h-56 bg-opacity-50 absolute bg-black z-10 bottom-0"/>
                    <img src="https://in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/radioactive-et00302293-01-07-2021-11-05-20.jpg" alt="Poster" className="w-full h-full"/>
                </div>
                <div className="relative hidden md:block lg:hidden" style={{height: "calc(100vw)"}}>
                    <div className="w-full h-56 bg-opacity-50 absolute bg-black z-10 bottom-0"/>
                    <img src="https://in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/radioactive-et00302293-01-07-2021-11-05-20.jpg" alt="Poster" className="w-full h-full"/>
                </div>
                <div className="hidden lg:block" style={{height:"31rem"}}>

                <img src="https://in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/radioactive-et00302293-01-07-2021-11-05-20.jpg" alt="Poster" className="w-full h-full"/>
                </div>
            </div>
        </>
    )
}

export default MovieHero
