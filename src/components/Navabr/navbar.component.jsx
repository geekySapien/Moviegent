import React from "react";
import { BiChevronRight, BiSearch } from "react-icons/bi";

const NavSm = () => {
    return (
        <>
            <div className="text-white flex items-centre justify-between">
                <div>
                    <h3 className="text-xl font-bold">It All Starts Here!</h3>
                    <span className="text-xs text-gray-400 flex items-centre">Ahmedabad <BiChevronRight /></span>
                </div>
                <div className="w-8 h-8" >
                    <BiSearch />
                </div>
            </div>
        </>
    );
};

const NavMd = () => {
    <>
        <div className="w-full flex items-center gap-3 bg-white py-2 px-3 rounded-md">
            <BiSearch />
            <input type="search" className="w-full bg-transparent border-none outline-none" placeholder="Search for Movies, Events, Plays, Sports and Activities" />
        </div>
    </>
}

const NavLg = () => {
    return (<>
        <div>
            <div>
                <div>
                    <img src="" alt="logo" className="w-full h-full" />
                </div>
            </div>
            <div></div>
        </div>
    </>)
}

const Navbar = () => {
    return
    <>
        <nav>
            <div className="md:hidden bg-bms-800 p-4">
                <NavSm />
            </div>
            <div className="hidden md:flex lg: hidden"></div>
            <div className="hidden lg:flex"></div>
        </nav>
    </>

}


export default Navbar;