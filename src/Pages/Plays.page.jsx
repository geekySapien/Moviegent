import React from 'react'

//component

import Poster from '../components/Poster/poster.component'
import Filter from '../components/PlaysFilters/Filter.component'

const Plays = () => {
    
    return (
        <>
        <div className="container mx-auto px-4">
                <div className="w-full lg:flex lg:flex-row-reverse gap-10">
                    <div className="w-3/4">
                        <h2 className="text-2xl font-bold mb-3">
                            Plays in Ahmedabad
                        </h2>
                        <div className="flex flex-wrap ">
                        
                            <div className=" w-1/3 lg: w-1/4 my-3">
                                <Poster src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCAyNyBBdWc%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00314067-fkzlqeafca-portrait.jpg" title="Admission" subtitle="English " price="₹449" />
                            </div>
                            <div className="w-1/3  lg: w-1/4 my-3">
                                <Poster src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCAyNyBBdWc%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00314067-fkzlqeafca-portrait.jpg" title="Admission" subtitle="English " price="₹449" />
                            </div>
                            <div className=" w-1/3 lg: w-1/4 my-3">
                                <Poster src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCAyNyBBdWc%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00314067-fkzlqeafca-portrait.jpg" title="Admission" subtitle="English" price="₹449"  />
                            </div>
                            <div className=" w-1/3 lg: w-1/4 my-3">
                                <Poster src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCAyNyBBdWc%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00314067-fkzlqeafca-portrait.jpg" title="Admission" subtitle="English" price="₹449"  />
                            </div>
                        </div>
                    </div> 
                       
                    <div className="lg:w-1/4 ">
                        <h1 className="text-2xl font-bold mb-3">Filters</h1>
                        <div className="flex flex-col gap-4">
                        <Filter title="Date" tags={["Today", "Tomorrow", "This Weekend"]}/>
                        <Filter title="Language" tags={["Hindi", "English", "Tamil", "Gujarati", "Kannada"]}/>
                        <Filter title="Categories" tags={["Theatre"]}/>
                        <Filter title="Genres" tags={["Drama", "Comedy", "Historical", "Online Streaming Plays", "Adaption"]}/>
                        <Filter title="More Filters" tags={["Online Streaming", "Kids Allowed", "Outdoor Events"]}/>
                        <Filter title="Price" tags={["0-500", "501-2000", "Above 2000"]}/>
                        <button className="w-full p-1 text-red-600 bg-gray-50 border-2 rounded-md border-red-500">Browse by Venues</button>
                        </div>
                        <div>
                            
                        </div>
                    </div>
                </div>
            </div>
            
        
        </>
    )
}

export default Plays