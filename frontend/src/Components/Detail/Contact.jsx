/** @format */

import React from "react";
import { TbBrandWechat } from "react-icons/tb";
import { IoCallOutline } from "react-icons/io5";
import { MdLocationCity } from "react-icons/md";

function Contact() {
  return (
    <div className='w-full flex items-center justify-evenly flex-wrap'>
      <div className='lg:w-1/3 text-3xl flex flex-col items-start justify-start gap-3 border-2 font-bold border-slate-400 dark:border-white bg-gray-200 dark:bg-slate-400 rounded-md p-16 hover:scale-105 ease-in-out duration-300 cursor-pointer'>
        <div className='flex items-center justify-center gap-3'>
          <TbBrandWechat />
          <div>
            <h3 className='text-xl'>Chat with us</h3>
            <p className='text-sm text-slate-600'>
              Our friendly team is here to help.
            </p>
          </div>
        </div>
        <div className='flex items-center justify-center gap-3'>
          <MdLocationCity />
          <div>
            <h3 className='text-xl'>Visit us</h3>
            <p className='text-sm text-slate-600'>
              Come and say hello at our office HQ. Here is the location/ address
            </p>
          </div>
        </div>
        <div className='flex items-center justify-center gap-3'>
          <IoCallOutline />
          <div>
            <h3 className='text-xl'>Call us</h3>
            <p className='text-sm text-slate-600'>
              Mon-fri from 8am to 5pm. +123 456 7590
            </p>
          </div>
        </div>
      </div>
      <div
        // data-aos='zoom-in-up
        className='p-10 w-2/5 flex flex-col items-center justify-center gap-8 font-medium'
      >
        <h3 className='font-bold text-xl'>
          Got a Idea? We've got the skills. Let's team up
        </h3>
        <p className='text-slate-500'>
          Tall us more about yourself and what you're got in mind.
        </p>
        <form
          action=''
          className='flex justify-between gap-8 flex-wrap border-2 border-slate-500 p-8 rounded-md bg-gray-50 dark:bg-slate-800'
        >
          <div className='w-44 flex flex-col gap-3'>
            <label htmlFor='firstname' className=''>
              First Name
            </label>
            <input
              type='text'
              name='firstname'
              placeholder='Enter first name'
              className='w-full bg-gray-200 rounded-md p-1 outline-gray-700 dark:outline-white'
            />
          </div>
          <div className='w-44 flex flex-col gap-3'>
            <label htmlFor='firstname' className=''>
              Last Name
            </label>
            <input
              type='text'
              name='lastname'
              placeholder='Enter last name'
              className='w-full bg-gray-200 rounded-md p-1 outline-gray-700 dark:outline-white'
            />
          </div>
          <div className='w-full flex flex-col gap-3'>
            <label htmlFor='firstname' className=''>
              Email Address
            </label>
            <input
              type='email'
              name='email'
              placeholder='Enter email address'
              className='w-full bg-gray-200 rounded-md p-1 outline-gray-700 dark:outline-white'
            />
          </div>
          <div className='w-full flex flex-col gap-3'>
            <label htmlFor='firstname' className=''>
              Phone Number
            </label>
            <input
              type='number'
              name='mobile'
              placeholder='Enter phone number'
              className='w-full bg-gray-200 rounded-md p-1 outline-gray-700 dark:outline-white'
            />
          </div>
          <div className='w-full flex flex-col gap-3'>
            <label htmlFor='message' className=''>
              Message
            </label>
            <textarea
              name='message'
              placeholder='Enter message'
              id=''
              className='w-full h-56 bg-gray-200 rounded-md p-1 outline-gray-700 dark:outline-white'
            ></textarea>
          </div>
          <button className='w-full text-xl bg-amber-400 dark:text-black rounded-md py-2 hover:scale-105 duration-400 ease-in-out'>
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
