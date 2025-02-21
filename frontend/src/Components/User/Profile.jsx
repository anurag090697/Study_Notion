/** @format */

import React from "react";
import { FaRegEdit } from "react-icons/fa";

function Profile() {
  return (
    <div className='w-full dark:text-white p-10 font-medium flex flex-col items-start justify-center gap-10'>
      <h2 className='text-2xl font-bold'>My Profile</h2>
      <div className='w-full bg-gray-300 dark:bg-slate-600 rounded-lg flex items-center justify-between flex-wrap p-3'>
        <div className='p-1 flex items-center justify-between gap-2'>
          <img
            src='https://pics.craiyon.com/2023-09-28/a77b4df95aa54e4eba54b048292bb585.webp'
            alt=''
            className='w-20 h-20 rounded-full object-cover'
          />{" "}
          <div>
            <h3 className='text-xl'>name full</h3>{" "}
            <p className='text-gray-500 dark:text-gray-300'>email full</p>
          </div>
        </div>{" "}
        <button className='flex items-center justify-center gap-2 hover:text-emerald-600 py-2 px-4 bg-amber-300 rounded-lg text-xl'>
          Edit
          <FaRegEdit />
        </button>
      </div>
      <div className='w-full bg-gray-300 dark:bg-slate-600 rounded-lg flex items-center justify-between flex-wrap p-3'>
        <div className='p-1 '>
          <h3 className='text-xl'>About</h3>{" "}
          <p className='text-gray-500 dark:text-gray-300'>email full</p>
        </div>{" "}
        <button className='flex items-center justify-center gap-2 hover:text-emerald-600 py-2 px-4 bg-amber-300 rounded-lg text-xl'>
          Edit
          <FaRegEdit />
        </button>
      </div>
      <div className='w-full bg-gray-300 dark:bg-slate-600 rounded-lg flex items-center justify-between flex-wrap p-3'>
        <div className='p-1 '>
          <h3 className='text-xl'>Personal Details</h3>{" "}
          <p className='text-gray-500 dark:text-gray-300'>male</p>
        </div>{" "}
        <button className='flex items-center justify-center gap-2 hover:text-emerald-600 py-2 px-4 bg-amber-300 rounded-lg text-xl'>
          Edit
          <FaRegEdit />
        </button>
      </div>
      <div className='w-full bg-gray-300 dark:bg-slate-600 rounded-lg flex items-center justify-between flex-wrap p-3'>
        <div className='p-1 '>
          <h3 className='text-xl'>Contact</h3>{" "}
          <p className='text-gray-500 dark:text-gray-300'>email full</p>
        </div>{" "}
        <button className='flex items-center justify-center gap-2 hover:text-emerald-600 py-2 px-4 bg-amber-300 rounded-lg text-xl'>
          Edit
          <FaRegEdit />
        </button>
      </div>
    </div>
  );
}

export default Profile;
