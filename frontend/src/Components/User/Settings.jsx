/** @format */

import React, { useState } from "react";
import { LuUpload } from "react-icons/lu";
import { GiBrassEye } from "react-icons/gi";

function Settings() {
  const [showPassword, setShowpassword] = useState(false);

  return (
    <div className='p-10 dark:text-white flex flex-col items-start justify-start gap-10'>
      <h1 className='font-bold text-2xl'>Edit Profile</h1>
      <div className=' bg-gray-300 dark:bg-slate-600 p-6 rounded-xl w-full flex items-center justify-start gap-6'>
        <img src='' alt='' />
        <div className='font-medium'>
          <h4 className='py-3'>Change Profile Picture</h4>
          <div className='text-violet-800 text-lg flex gap-3 items-center'>
            <div>
              <label
                htmlFor='profilePic'
                className='py-1 px-2 bg-sky-500 rounded-lg hover:bg-sky-400'
              >
                Select
              </label>
              <input
                type='file'
                name='profilePic'
                id='profilePic'
                className='hidden'
              />
            </div>{" "}
            <button className='flex items-center justify-center gap-2 bg-lime-400 rounded-lg py-1 px-2 hover:bg-lime-500'>
              Upload <LuUpload />
            </button>
          </div>
        </div>
      </div>
      <div className=' bg-gray-300 dark:bg-slate-600 p-6 rounded-xl w-full flex flex-wrap items-center justify-start gap-6'>
        <h2 className='font-bold text-lg w-full'>Profile Information</h2>
        <form
          action=''
          className='flex flex-col items-center justify-center gap-6 w-full font-medium'
        >
          <div className='flex items-center justify-start flex-wrap gap-6 w-full'>
            <div className='flex flex-col gap-2'>
              <label htmlFor='firstname'>First Name</label>{" "}
              <input
                type='text'
                className='p-2 bg-slate-400 rounded-lg focus:ring-2 ring-blue-500 outline-none w-60'
                placeholder='Enter First Name'
                name='firstname'
              />
            </div>
            <div className='flex flex-col gap-2'>
              <label htmlFor='lastname'>Last Name</label>{" "}
              <input
                type='text'
                className='p-2 bg-slate-400 rounded-lg focus:ring-2 ring-blue-500 outline-none w-60'
                placeholder='Enter Last Name'
                name='lastname'
              />
            </div>
          </div>
          <div className='flex items-center justify-start flex-wrap gap-6 w-full'>
            <div className='flex flex-col gap-2'>
              <label htmlFor='dob'>Date Of Birth</label>{" "}
              <input
                type='date'
                className='p-2 bg-slate-400 rounded-lg focus:ring-2 ring-blue-500 outline-none w-60'
                name='dob'
              />
            </div>
            <div className='flex flex-col gap-2'>
              <label htmlFor='lastname'>Gender</label>{" "}
              <select
                name='gender'
                id=''
                className='p-2 bg-slate-400 rounded-lg focus:ring-2 ring-blue-500 outline-none w-60'
              >
                <option value='male'>Male</option>{" "}
                <option value='female'>female</option>
                <option value='other'>Other</option>
              </select>
            </div>
          </div>
          <div className='flex items-center justify-start flex-wrap gap-6 w-full'>
            <div className='flex flex-col gap-2'>
              <label htmlFor='mobile'>Contact</label>{" "}
              <input
                type='number'
                className='p-2 bg-slate-400 rounded-lg focus:ring-2 ring-blue-500 outline-none w-60'
                placeholder='Enter Mobile Number'
                name='mobile'
              />
            </div>
            <div className='flex flex-col gap-2'>
              <label htmlFor='about'>About</label>{" "}
              <input
                type='text'
                className='p-2 bg-slate-400 rounded-lg focus:ring-2 ring-blue-500 outline-none w-60'
                placeholder='Enter Details'
                name='about'
              />
            </div>
          </div>
          <div className='flex items-center justify-start flex-wrap gap-6 w-full'>
            <div className='flex flex-col gap-2'>
              <label htmlFor='email'>Email</label>{" "}
              <input
                type='email'
                disabled
                className='p-2 bg-slate-400 rounded-lg focus:ring-2 ring-blue-500 outline-none w-60'
                placeholder='Enter Email'
                name='email'
              />
            </div>
            <div className='flex flex-col gap-2'>
              <label htmlFor='role'>Role</label>{" "}
              <input
                type='text'
                disabled
                className='p-2 bg-slate-400 rounded-lg focus:ring-2 ring-blue-500 outline-none w-60'
                placeholder='Enter Details'
                name='role'
              />
            </div>
          </div>
          <div className='flex items-center justify-start flex-wrap gap-6 w-full'>
            {" "}
            <button className='p-2 w-60 font-bold text-white hover:text-fuchsia-700 bg-lime-400 rounded-lg hover:bg-lime-500'>
              Submit
            </button>
          </div>
        </form>
      </div>
      <div className=' bg-gray-300 dark:bg-slate-600 p-6 rounded-xl w-full flex flex-wrap items-center justify-start gap-6'>
        <h1 className='font-bold text-lg'>Update Password</h1>
        <form action='' className='w-full'>
          <div className='flex items-center justify-start flex-wrap gap-6 w-full'>
            <div className='flex flex-col gap-2'>
              <label htmlFor='currentpassword'>Current Password</label>{" "}
              <input
                type={showPassword ? "text" : "password"}
                className='p-2 bg-slate-400 rounded-lg focus:ring-2 ring-blue-500 outline-none w-60'
                placeholder='Enter Current Password'
                name='currentpassword'
              />
            </div>
            <div className='flex flex-col gap-2'>
              <label htmlFor='newpassword'>New Password</label>{" "}
              <input
                type={showPassword ? "text" : "password"}
                className='p-2 bg-slate-400 rounded-lg focus:ring-2 ring-blue-500 outline-none w-60'
                placeholder='Enter New Password'
                name='newpassword'
              />
            </div>
            <div className='flex flex-col gap-2'>
              <label htmlFor='confirmPassword'>Confirm Password</label>{" "}
              <input
                type={showPassword ? "text" : "password"}
                className='p-2 bg-slate-400 rounded-lg focus:ring-2 ring-blue-500 outline-none w-60'
                placeholder='Confirm Passwrod'
                name='confirmpassword'
              />
            </div>
          </div>
          <div className='flex items-center justify-start flex-wrap gap-6 w-full font-bold py-4 text-white'>
            <button className='p-2 w-60 bg-green-400 rounded-lg hover:text-sky-700 hover:bg-green-500'>
              Update
            </button>
            <p
              onClick={(e) => {
                setShowpassword((prev) => !prev);
              }}
              className='flex items-center w-60 justify-center gap-2 p-2 hover:text-emerald-400 bg-amber-400 hover:bg-amber-200 rounded-lg'
            >
              {showPassword ? `Hide Password ` : `Show Password `}{" "}
              <span>
                <GiBrassEye />
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Settings;
