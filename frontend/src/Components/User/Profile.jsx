/** @format */

import React, { useContext } from "react";
import { FaRegEdit } from "react-icons/fa";
import { AppContext } from "../../Context/AppContext";
import { NavLink } from "react-router-dom";

function Profile() {
  const { user, setUser } = useContext(AppContext);
  console.log(user);
  if (!user.logged) {
    return;
  }

  return (
    <div className='w-full dark:text-white p-10 font-medium flex flex-col items-start justify-center gap-10'>
      <h2 className='text-2xl font-bold'>My Profile</h2>
      <div className='w-full bg-gray-300 dark:bg-slate-600 rounded-lg flex items-center justify-between flex-wrap p-3'>
        <div className='p-1 flex items-center justify-between gap-2'>
          <img
            src={user.picture}
            alt=''
            className='w-20 h-20 rounded-full object-cover'
          />{" "}
          <div>
            <h3 className='text-xl'>{user.firstname + " " + user.lastname}</h3>{" "}
            <p className='text-gray-500 dark:text-gray-300 font-light uppercase underline'>
              {user.role}
            </p>
          </div>
        </div>{" "}
        <NavLink
          to={"/user/settings"}
          className='flex items-center justify-center gap-2 hover:text-emerald-600 py-2 px-4 bg-amber-300 rounded-lg text-xl'
        >
          {" "}
          Edit
          <FaRegEdit />
        </NavLink>
      </div>
      <div className='w-full bg-gray-300 dark:bg-slate-600 rounded-lg flex items-center justify-between flex-wrap p-3'>
        <div className='p-1 '>
          <h3 className='text-xl'>About</h3>{" "}
          <p className='text-gray-500 dark:text-gray-300 font-light'>
            {user.about}
          </p>
        </div>{" "}
        <NavLink
          to={"/user/settings"}
          className='flex items-center justify-center gap-2 hover:text-emerald-600 py-2 px-4 bg-amber-300 rounded-lg text-xl'
        >
          {" "}
          Edit
          <FaRegEdit />
        </NavLink>
      </div>
      <div className='w-full bg-gray-300 dark:bg-slate-600 rounded-lg flex items-center justify-between flex-wrap p-3'>
        <div className='p-1 '>
          <h3 className='text-xl'>Personal Details</h3>{" "}
          <p className='text-gray-500 dark:text-gray-300 font-light'>
            Gender: {user.gender}
          </p>
        </div>{" "}
        <NavLink
          to={"/user/settings"}
          className='flex items-center justify-center gap-2 hover:text-emerald-600 py-2 px-4 bg-amber-300 rounded-lg text-xl'
        >
          {" "}
          Edit
          <FaRegEdit />
        </NavLink>
      </div>
      <div className='w-full bg-gray-300 dark:bg-slate-600 rounded-lg flex items-center justify-between flex-wrap p-3'>
        <div className='p-1 '>
          <h3 className='text-xl'>Contact</h3>{" "}
          <p className='text-gray-500 dark:text-gray-300 font-light'>
            Email: {user.email}
          </p>
          <p className='text-gray-500 dark:text-gray-300 font-light'>
            Mobile number : {user.mobile}
          </p>
        </div>{" "}
        <NavLink
          to={"/user/settings"}
          className='flex items-center justify-center gap-2 hover:text-emerald-600 py-2 px-4 bg-amber-300 rounded-lg text-xl'
        >
          {" "}
          Edit
          <FaRegEdit />
        </NavLink>
      </div>
    </div>
  );
}

export default Profile;
