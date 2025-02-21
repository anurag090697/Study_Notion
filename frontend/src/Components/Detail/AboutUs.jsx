/** @format */

import React, { useEffect } from "react";
import about1 from "../../assets/about1.avif";
import about2 from "../../assets/about2.jpg";
import about3 from "../../assets/about3.jpg";
import about4 from "../../assets/about-4.avif";
import AOS from "aos";
import "aos/dist/aos.css";
import { NavLink } from "react-router-dom";

function AboutUs() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className='select-none dark:text-white overflow-x-hidden '>
      <div className='flex flex-col items-center justify-center gap-6 lg:mb-44 relative py-20 lg:pb-72 w-full bg-slate-200 rounded-lg mx-auto dark:bg-slate-700'>
        <h1 className='font-bold text-3xl text-center' data-aos='flip-up'>
          Driving Innovation in Online Education for a <br />
          <span className='bg-gradient-to-r from-cyan-400 to-emerald-500  w-fit bg-clip-text text-transparent'>
            Brighter Future
          </span>{" "}
        </h1>
        <p
          className='text-slate-500 dark:text-slate-100 text-lg text-center font-medium lg:w-3/5'
          data-aos='flip-down'
        >
          Studynotion is at the forefront of driving innovation in online
          education. We're passionate about creating a brighter future by
          offering cutting-edge courses, leveraging emerging technologies, and
          nurturing a vibrant learning community.
        </p>
        <div className='flex items-center justify-center gap-8 flex-wrap w-fit lg:absolute -bottom-24'>
          <img
            src={about1}
            alt=''
            className='size-80 object-cover'
            data-aos='fade-right'
          />
          <img
            src={about2}
            alt=''
            className='size-80 object-cover'
            data-aos='fade-down'
          />{" "}
          <img
            src={about3}
            alt=''
            className='size-80 object-cover'
            data-aos='fade-left'
          />
        </div>
      </div>
      <div
        className='flex flex-col items-center justify-center gap-6'
        data-aos='zoom-in-up'
      >
        <h1 className='font-bold text-2xl text-center w-4/5 lg:w-3/4 '>
          We are passionate about revolutionizing the way we learn. Our
          innovative platform{" "}
          <span className='bg-gradient-to-r from-cyan-400 to-emerald-500  w-fit bg-clip-text text-transparent'>
            combines technology,
          </span>{" "}
          <span className='bg-gradient-to-r from-amber-600 to-amber-300  w-fit bg-clip-text text-transparent'>
            expertise{" "}
          </span>
          and community to create an{" "}
          <span className='bg-gradient-to-r from-amber-600 to-amber-300  w-fit bg-clip-text text-transparent'>
            unparalleled educational experience.
          </span>
        </h1>
        <div className='w-full flex items-center justify-center gap-10 py-6'>
          <div className='w-2/3 lg:w-2/5 flex flex-col items-start justify-start gap-2'>
            <h3 className='bg-gradient-to-r from-violet-600 text-2xl font-medium to-rose-500 w-fit bg-clip-text text-transparent'>
              Our Founding Story
            </h3>
            <p className='text-slate-500 dark:text-slate-100 font-medium '>
              Our e-learning platform was born out of a shared vision and
              passion for transforming education. It all began with a group of
              educators, technologists, and lifelong learners who recognized the
              need for accessible, flexible, and high-quality learning
              opportunities in a rapidly evolving digital world. <br /> As
              experienced educators ourselves, we witnessed firsthand the
              limitations and challenges of traditional education systems. We
              believed that education should not be confined to the walls of a
              classroom or restricted by geographical boundaries. We envisioned
              a platform that could bridge these gaps and empower individuals
              from all walks of life to unlock their full potential.
            </p>
            <h3 className='bg-gradient-to-r from-amber-700 text-2xl font-medium to-amber-400 pt-5 w-fit bg-clip-text text-transparent'>
              Our Vision
            </h3>
            <p className='text-slate-500 dark:text-slate-100 font-medium '>
              With this vision in mind, we set out on a journey to create an
              e-learning platform that would revolutionize the way people learn.
              Our team of dedicated experts worked tirelessly to develop a
              robust and intuitive platform that combines cutting-edge
              technology with engaging content, fostering a dynamic and
              interactive learning experience.
            </p>
          </div>{" "}
          <div
            data-aos='flip-up'
            className='w-2/3 lg:w-2/5 flex flex-col items-start justify-start gap-2'
          >
            <img src={about4} alt='' className='w-2/3' />
            <h3 className='bg-gradient-to-r from-amber-700 text-2xl font-medium to-amber-400 pt-5 w-fit bg-clip-text text-transparent'>
              Our Mission
            </h3>
            <p className='text-slate-500 dark:text-slate-100 font-medium '>
              our mission goes beyond just delivering courses online. We wanted
              to create a vibrant community of learners, where individuals can
              connect, collaborate, and learn from one another. We believe that
              knowledge thrives in an environment of sharing and dialogue, and
              we foster this spirit of collaboration through forums, live
              sessions, and networking opportunities.
            </p>
          </div>
        </div>
      </div>
      <div
        data-aos='flip-down'
        className='w-full p-10 flex items-center justify-around bg-slate-200 dark:bg-slate-600'
      >
        <div className='text-center font-bold'>
          <h2 className='text-2xl text-amber-500 dark:text-white'>5K</h2>
          <p className='text-sm font-medium text-slate-500'>Active Students</p>
        </div>
        <div className='text-center font-bold'>
          <h2 className='text-2xl text-amber-500 dark:text-white'>10+</h2>
          <p className='text-sm font-medium text-slate-500'>Mentors</p>
        </div>
        <div className='text-center font-bold'>
          <h2 className='text-2xl text-amber-500 dark:text-white'>200+</h2>
          <p className='text-sm font-medium text-slate-500'>Courses</p>
        </div>
        <div className='text-center font-bold'>
          <h2 className='text-2xl text-amber-500 dark:text-white'>50+</h2>
          <p className='text-sm font-medium text-slate-500'>Awards</p>
        </div>
      </div>
      <div data-aos='zoom-in-down' className='w-full py-10 lg:px-20 px-6'>
        <div className='flex flex-wrap items-center justify-end'>
          <div className='flex flex-col items-start justify-start gap-5 pr-10 px-5 lg:w-2/5 '>
            <h1 className='font-bold text-3xl'>
              World-Class Learning for <br />
              <span className='bg-gradient-to-r from-cyan-400 to-emerald-500  w-fit bg-clip-text text-transparent'>
                Anyone, Anywhere
              </span>{" "}
            </h1>
            <p className='text-slate-500 dark:text-slate-100 font-medium '>
              Studynotion partners with more than 275+ leading universities and
              companies to bring flexible, affordable, job-relevant online
              learning to individuals and organizations worldwide.
            </p>
            <NavLink className='bg-amber-300 rounded-lg py-2 px-4 font-medium hover:scale-110 duration-400 ease-in-out'>
              Learn More
            </NavLink>
          </div>
          <div className='w-96 h-80 p-14 text-white font-medium bg-gray-300 dark:bg-gray-500 flex flex-col gap-10'>
            <h3 className='text-xl'>Curriculum Based on Industry Needs</h3>
            <p className='text-slate-400'>
              Save time and money! The Belajar curriculum is made to be easier
              to understand and in line with industry needs.
            </p>
          </div>
          <div className='w-96 h-80 p-14 text-white font-medium bg-gray-500 dark:bg-slate-00 flex flex-col gap-10'>
            <h3 className='text-xl'>Our Learning Methods</h3>
            <p className='text-slate-400'>
              Studynotion partners with more than 275+ leading universities and
              companies to bring
            </p>
          </div>
          <div className='w-96 h-80 p-14 text-white font-medium bg-gray-300 dark:bg-gray-500 flex flex-col gap-10'>
            <h3 className='text-xl'>Certification</h3>
            <p className='text-slate-400'>
              Studynotion partners with more than 275+ leading universities and
              companies to bring
            </p>
          </div>
          <div className='w-96 h-80 p-14 text-white font-medium bg-gray-500 dark:bg-slate-00 flex flex-col gap-10'>
            <h3 className='text-xl'>Rating "Auto-grading"</h3>
            <p className='text-slate-400'>
              Studynotion partners with more than 275+ leading universities and
              companies to bring
            </p>
          </div>
          <div className='w-96 h-80 p-14 text-white font-medium bg-gray-300 dark:bg-gray-500 flex flex-col gap-10'>
            <h3 className='text-xl'>Ready to Work</h3>
            <p className='text-slate-400'>
              Studynotion partners with more than 275+ leading universities and
              companies to bring
            </p>
          </div>
        </div>
      </div>
      <div
        data-aos='zoom-in-up'
        className='p-10 flex flex-col items-center justify-center gap-8 font-medium'
      >
        <h3 className='font-bold text-xl'>Get in Touch</h3>
        <p className='text-slate-500'>
          We’d love to here for you, Please fill out this form.
        </p>
        <form
          action=''
          className='lg:w-1/3 flex justify-between gap-8 flex-wrap border-2 border-slate-500 p-8 rounded-md bg-gray-50 dark:bg-slate-800'
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

export default AboutUs;
