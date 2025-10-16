import React from 'react'
import { useState } from 'react'
import {FaTimes, FaBars} from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import Headroom from 'react-headroom'
import { NavBlink } from '../Utils'
import LogosBlack from "../assets/Images/Logos/GHV3_coloursunrise_blk.svg"

const Navbar = () => {

    const [isMobile, setIsMobile] = useState(false);

  return (
    <Headroom
    style={{
    WebkitTransition: "all .5s ease-in-out",
    MozTransition: "all .5s ease-in-out",
    OTransition: "all .5s ease-in-out",
    transition: "all .5s ease-in-out",
}}
    >
    <div className='py-4 mx-8 sma:ml-5 mda:ml-5  '>
        <nav className='bg-white/70 rounded-xl mb-8 max-w-6xl sma:max-w-3xl mda:max-w-3xl w-full backdrop-sepia-0 bg-opacity-0 backdrop-blur-xs backdrop-filter py-1 px-3'>
            <ul className='flex justify-between mx-4 items-center'>
                <h1 className='font-Raleway z-[999]  '>
                  <NavLink to='/'>
                  <img src={LogosBlack} alt="Good Hope logo" className='w-44 sma:w-44 mda:w-44' />
                  </NavLink>
                </h1>
                <li className='flex sma:hidden mda:hidden text-white uppercase underline-offset-2 sma:text-base mda:text-base gap-5'>
              {
                NavBlink.map((x)=> (
                  <div key={x.Id} className='flex flex-col items-center font-Oswald group'>
                    <NavLink key={x.Id} to={x.Link} className={({ isActive }) =>
                  isActive
                    ? "text-[#69AD66] group"
                    : "text-[#415D43] transition delay-150 "}>{x.name}</NavLink>
                    <div className="h-0.5 bg-[#69AD66] w-0 group-hover:w-full transition-all delay-100"></div>
                    </div>
                ))
              }
                </li>
                <div className="lg:hidden md:hidden mdaa:hidden">
        <div className="relative">
          <button onClick={() => setIsMobile(!isMobile)}>
            {isMobile ? (
              <FaTimes className="text-2xl text-[#00A9C8]" />
            ) : (
              <FaBars className="text-2xl text-[#00A9C8]" />
            )}
          </button>
          {/* Mobile menu */}
          <div
            className={`fixed top-0 -left-10 mt-14 h-[350px] w-full bg-[#3486A0]  shadow-md rounded-md transition-transform duration-500 ease-in-out
                        ${
                            isMobile
                            ? "translate-x-4"
                            : "-translate-x-full"
                        }`}
          >
            <ul className="flex flex-col w-full space-y-4 p-8">
              {NavBlink.map((x) => (
                <li key={x.Id} className="font-Oswald uppercase group text-lg">
                  <NavLink
                    to={x.Link}
                    onClick={() => setIsMobile(false)}
                    className={({ isActive }) =>
                  isActive
                    ? "text-[#69AD66] group"
                    : "text-white transition delay-150 "}
                  >
                    {x.name}
                  </NavLink>
                  
                </li>
              ))}
              
            </ul>
          </div>
        </div>
      </div>
            </ul>
        </nav>
    </div>
    </Headroom>
  )
}

export default Navbar