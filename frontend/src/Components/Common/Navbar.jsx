/** @format */

import React, { useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa6";
import { MdMenu } from "react-icons/md";
import { AppContext } from "../../Context/AppContext";

function Navbar() {
  const { sidebar, setSidebar } = useContext(AppContext);

  return (
    <nav className='w-full flex items-center justify-around z-40 fixed top-0 right-0 bg-slate-300 px-2 py-3 dark:border-b dark:bg-black font-medium dark:text-white'>
      <div className='flex items-center justify-between gap-4'>
        <button
          className='block hover:text-blue-400 text-xl lg:hidden'
          onClick={() => setSidebar((prev) => !prev)}
        >
          <MdMenu />
        </button>
        <NavLink
          to='/'
          title='StudyNotion'
          className='flex gap-2 items-center justify-center text-2xl'
        >
          <h1 className='rounded-full text-black text-3xl bg-white h-10 w-10 flex items-center justify-center font-bold'>
            S
          </h1>
          <h2 className='hidden md:block'>StudyNotion</h2>
        </NavLink>
      </div>
      <div className='flex gap-3 items-center justify-center text-lg'>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-amber-500" : "" + "hidden md:block"
          }
          to='/'
        >
          Home
        </NavLink>
        <div className='relative group'>
          <h3 className='cursor-pointer flex gap-1 items-center justify-center'>
            Catalog
            <span className='text-xs bg-black p-0.5 text-white rounded-full dark:bg-white dark:text-black'>
              <FaAngleDown />
            </span>
          </h3>
          <ul className='absolute left-0 hidden w-40 text-lg text-black bg-white border border-gray-300 rounded-md shadow-lg opacity-0 group-hover:opacity-100 group-hover:block transition-opacity duration-200'>
            <li className='px-4 py-2 hover:bg-gray-300 cursor-pointer'>
              Something 1
            </li>
            <li className='px-4 py-2 hover:bg-gray-300 cursor-pointer'>
              Something 2
            </li>
            <li className='px-4 py-2 hover:bg-gray-300 cursor-pointer'>
              Something 3
            </li>
            <li className='px-4 py-2 hover:bg-gray-300 cursor-pointer'>
              Something 4
            </li>
            <li className='px-4 py-2 hover:bg-gray-300 cursor-pointer'>
              Something 5
            </li>
          </ul>
        </div>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-amber-500" : "" + "hidden md:block"
          }
          to='/about'
        >
          About Us
        </NavLink>
        <NavLink
          to='/contact'
          className={({ isActive }) =>
            isActive ? "text-amber-500" : "" + "hidden md:block"
          }
        >
          Contact Us
        </NavLink>
      </div>
      <div className='flex gap-2 items-center justify-center text-2xl'>
        <NavLink
          to='/login'
          className='bg-gray-500/60 rounded-md p-1 text-lg hover:bg-slate-500'
        >
          Login
        </NavLink>
        <NavLink
          to='/signup'
          className='bg-gray-500/60 rounded-md p-1 text-lg hover:bg-slate-500'
        >
          Signup
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
