import React from 'react'
import Logo from '../assets/logo.png'
import { SOCIAL } from '../Content'
import Social from './Social'
const Navbar = () => {
  return (
    <div className='flex justify-between py-5 mt-2 md:px-8 md:py-2 items-center bg-transparent'>
      <div className='logo poppins text-white'>
        <img className='w-20 ' src={Logo} alt="" />
      </div>
      <a href="https://www.linkedin.com/in/yash-ghugal-0a2011191/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><button
        className="overflow-hidden relative w-24 md:w-28 p-2 h-10 md:h-11 bg-white text-black border-none rounded-md text-normal md:text-xl font-medium cursor-pointer z-10 group"
      >
        Connect
        <span
          className="absolute w-36 h-32 -top-8 -left-2 bg-sky-200 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-right"
        ></span>
        <span
          className="absolute w-36 h-32 -top-8 -left-2 bg-sky-400 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-right"
        ></span>
        <span
          className="absolute w-36 h-32 -top-8 -left-2 bg-sky-600 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-right"
        ></span>
        <span
          className="group-hover:opacity-100 group-hover:duration-1000 text-white duration-100 opacity-0 absolute top-2 md:top-2 left-4 md:left-5 z-10"
        >Connect</span>
      </button>
      </a>
    </div>
  )
}

export default Navbar