/** @format */

import React, { useEffect, useState } from "react";
import hero1 from "../../assets/hero1.jpg";
import hero2 from "../../assets/hero2.jpg";
import hero3 from "../../assets/hero3.webp";
import hero4 from "../../assets/hero4.jpg";
import hero5 from "../../assets/hero5.jpg";
import hero6 from "../../assets/hero6.webp";
import hero7 from "../../assets/hero7.jpg";

import bggrid from "../../assets/gridbg.avif";
import planyl from "../../assets/Plan_your_lessons.png";
import knowyp from "../../assets/Know_your_progress.png";
import comparwo from "../../assets/Compare_with_others.png";
import instructor from "../../assets/virtual-Instructor.jpg";
import girlCoding from "../../assets/Girl-Coding.jpg";
import { NavLink } from "react-router-dom";
import { FaRightLong } from "react-icons/fa6";
import { MdDiamond } from "react-icons/md";
import { HiCodeBracketSquare } from "react-icons/hi2";
import { FaGraduationCap } from "react-icons/fa6";
import { PiMedalFill } from "react-icons/pi";
import AOS from "aos";
import "aos/dist/aos.css";
import ReactTypingEffect from "react-typing-effect";

function Home() {
  const [idx, setIdx] = useState(0);
  const heroBgs = [hero1, hero2, hero3, hero4, hero4, hero5, hero6, hero7];

  useEffect(() => {
    const interval = setInterval(() => {
      setIdx((prev) => (prev < heroBgs.length - 1 ? prev + 1 : 0));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const codeBlock = [
    "<<!DOCTYPE html>>",
    "<html>",
    "<head><title>Example</title>",
    `<linkrel="stylesheet"href="styles.css">`,
    `</head>`,
    `<body>`,
    `<h1><a href="/">Header</a></h1>`,
    "</body>",
    "</html>",
  ];

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className='select-none dark:text-white'>
      <div
        className='h-screen w-full bg-cover bg-no-repeat'
        style={{ backgroundImage: `url(${heroBgs[idx]})` }}
      >
        <div className='flex flex-col items-center justify-center gap-10 p-4 pt-20'>
          <NavLink
            to='/signup'
            className='text-xl text-gray-400 flex items-center justify-center gap-2 bg-slate-500/80 rounded-4xl py-2 px-16 font-medium hover:bg-black hover:scale-110 duration-400 ease-in-out'
          >
            Become An Instructor <FaRightLong />
          </NavLink>
          <h1 className='font-bold text-4xl text-white'>
            Empower Your Future with {"  "}
            <span className='bg-gradient-to-r from-cyan-400 to-emerald-500  w-fit bg-clip-text text-transparent'>
              Coding Skills
            </span>{" "}
          </h1>
          <p className='text-slate-100 text-lg text-center font-medium lg:w-3/5'>
            With our online coding courses, you can learn at your own pace, from
            anywhere in the world, and get access to a wealth of resources,
            including hands-on projects, quizzes, and personalized feedback from
            instructors.
          </p>
          <div className='flex gap-5'>
            {" "}
            <NavLink className='text-xl flex items-center justify-center gap-2  bg-amber-300 rounded-lg py-2 px-4 font-medium hover:scale-110 duration-400 ease-in-out'>
              Learn More
            </NavLink>
            <NavLink className='text-xl w-fit text-white bg-black rounded-lg p-2 px-4 font-medium hover:scale-110 duration-400 ease-in-out'>
              Book A Demo
            </NavLink>
          </div>
        </div>
      </div>
      <div
        className='w-full flex items-center justify-center gap-10 py-14'
        data-aos='zoom-in'
      >
        <div className='w-1/3'>
          <h1 className='font-bold text-3xl'>
            Unlock your{"  "}
            <span className='bg-gradient-to-r from-cyan-400 to-emerald-500  w-fit bg-clip-text text-transparent'>
              coding potential
            </span>{" "}
            with our online courses.
          </h1>
          <p className='text-slate-600 text-lg font-medium py-4'>
            Our courses are designed and taught by industry experts who have
            years of experience in coding and are passionate about sharing their
            knowledge with you.
          </p>
          <div className='flex items-center justify-start gap-10 py-10'>
            {" "}
            <NavLink className='text-xl flex items-center justify-center gap-2 px-5 bg-amber-300 rounded-lg p-2 font-medium hover:scale-110 duration-400 ease-in-out'>
              Try It Yourself
              <FaRightLong />
            </NavLink>
            <NavLink className='text-xl flex items-center justify-center gap-2 px-5 bg-gray-500 rounded-lg p-2 font-medium hover:scale-110 duration-400 ease-in-out'>
              Learn More
            </NavLink>
          </div>
        </div>
        <div className='lg:w-1/3 font-medium flex text-lg'>
          <div className='flex flex-col gap-1 text-slate-500'>
            <p>1</p>
            <p>2</p>
            <p>3</p>
            <p>4</p>
            <p>5</p>
            <p>6</p>
            <p>7</p>
            <p>8</p>
            <p>9</p>
            <p>10</p>
            <p>11</p>
          </div>
          <div className='flex flex-col bg-gradient-to-br from-amber-500 to-emerald-400 bg-clip-text text-transparent'>
            <ReactTypingEffect
              text={[codeBlock.join("\n")]}
              speed={100}
              eraseSpeed={50}
              delay={500}
              cursor=' ' // Hide default cursor
              displayTextRenderer={(text) => {
                const lines = text.split("\n");
                return (
                  <div className='flex flex-col gap-1'>
                    {lines.map((line, index) => (
                      <p key={index} className='whitespace-pre'>
                        {line}
                        {/* Show cursor only on the last line */}
                        {index === lines.length - 1 && (
                          <span className='animate-blink'>|</span>
                        )}
                      </p>
                    ))}
                  </div>
                );
              }}
            />
          </div>
        </div>
      </div>
      <div
        className='w-full flex items-center justify-center gap-10 py-14'
        data-aos='zoom-in'
      >
        {" "}
        <div className='lg:w-1/3 font-medium flex text-lg'>
          <div className='flex flex-col gap-1 text-slate-500'>
            <p>1</p>
            <p>2</p>
            <p>3</p>
            <p>4</p>
            <p>5</p>
            <p>6</p>
            <p>7</p>
            <p>8</p>
            <p>9</p>
            <p>10</p>
            <p>11</p>
          </div>
          <div className='flex flex-col bg-gradient-to-br from-rose-500 to-blue-500 bg-clip-text text-transparent'>
            <ReactTypingEffect
              text={[codeBlock.join("\n")]}
              speed={100}
              eraseSpeed={50}
              delay={500}
              cursor=' ' // Hide default cursor
              displayTextRenderer={(text) => {
                const lines = text.split("\n");
                return (
                  <div className='flex flex-col gap-1'>
                    {lines.map((line, index) => (
                      <p key={index} className='whitespace-pre'>
                        {line}
                        {/* Show cursor only on the last line */}
                        {index === lines.length - 1 && (
                          <span className='animate-blink'>|</span>
                        )}
                      </p>
                    ))}
                  </div>
                );
              }}
            />
          </div>
        </div>
        <div className='w-1/3'>
          <h1 className='font-bold text-3xl'>
            Start{"  "}
            <span className='bg-gradient-to-r from-cyan-400 to-emerald-500  w-fit bg-clip-text text-transparent'>
              coding in seconds
            </span>{" "}
          </h1>
          <p className='text-slate-600 text-lg font-medium py-4'>
            Go ahead, give it a try. Our hands-on learning environment means
            you'll be writing real code from your very first lesson.
          </p>
          <div className='flex items-center justify-start gap-10 py-10'>
            {" "}
            <NavLink className='text-xl flex items-center justify-center gap-2 px-5 bg-amber-300 rounded-lg p-2 font-medium hover:scale-110 duration-400 ease-in-out'>
              Continue Lesson
              <FaRightLong />
            </NavLink>
            <NavLink className='text-xl flex items-center justify-center gap-2 px-5 bg-gray-500 rounded-lg p-2 font-medium hover:scale-110 duration-400 ease-in-out'>
              Learn More
            </NavLink>
          </div>
        </div>
      </div>
      <div className='flex lg:px-24 items-center justify-center gap-10 dark:bg-gray-50'>
        {" "}
        <div
          data-aos='fade-down-right'
          style={{ backgroundImage: `url(${bggrid})` }}
          className={`w-full flex items-center justify-center gap-10 py-24`}
        >
          <NavLink className='text-xl flex items-center justify-center gap-2  bg-amber-300 rounded-lg py-2 px-14 font-medium hover:scale-110 duration-400 ease-in-out'>
            Start Teaching
            <FaRightLong />
          </NavLink>
          <NavLink className='text-xl w-fit text-white bg-black rounded-lg p-2 px-4 font-medium hover:scale-110 duration-400 ease-in-out'>
            Learn More
          </NavLink>
        </div>
      </div>
      <div
        data-aos='fade-up'
        className='flex items-start justify-center lg:p-20 dark:bg-gray-50'
      >
        <h1 className='lg:w-1/2 font-bold text-3xl text-black'>
          Get the skills you need for a{" "}
          <span className='bg-gradient-to-r from-cyan-400 to-emerald-500  w-fit bg-clip-text text-transparent'>
            job that is in demand
          </span>
        </h1>

        <div className='lg:w-1/2 font-medium flex flex-col gap-10'>
          {" "}
          <p className='text-slate-600 text-lg'>
            The modern StudyNotion is the dictates its own terms. Today, to be a
            competitive specialist requires more than professional skills.
          </p>
          <NavLink className='text-xl w-fit bg-amber-300 rounded-lg p-2 px-4 font-medium hover:scale-110 duration-400 ease-in-out'>
            Learn More
          </NavLink>
        </div>
      </div>
      <div className='flex flex-wrap items-center justify-center gap-6 text-center p-4 lg:p-20'>
        <div
          data-aos='flip-left'
          className='lg:w-1/3 text-xl flex flex-col items-start gap-8'
        >
          <div className='flex font-bold items-center justify-center gap-12'>
            <span className='text-cyan-700 text-3xl'>
              <PiMedalFill />
            </span>
            <div className='flex items-start flex-col'>
              <h4>Leadership</h4>
              <p className='text-slate-600 font-normal text-lg'>
                Fully committed to the success company
              </p>
            </div>
          </div>
          <div className='flex font-bold items-center justify-center gap-12'>
            <span className='text-rose-700 text-3xl'>
              <FaGraduationCap />
            </span>
            <div className='flex items-start flex-col'>
              <h4> Responsibility</h4>
              <p className='text-slate-600 font-normal text-lg'>
                Students will always be our top priority
              </p>
            </div>
          </div>
          <div className='flex font-bold items-center justify-center gap-12'>
            <span className='text-emerald-700 text-3xl'>
              <MdDiamond />
            </span>
            <div className='flex items-start flex-col'>
              <h4> Flexibility</h4>
              <p className='text-slate-600 font-normal text-lg'>
                The ability to switch is an important skills
              </p>
            </div>
          </div>
          <div className='flex font-bold items-center justify-center gap-12'>
            <span className='text-amber-500 text-3xl'>
              <HiCodeBracketSquare />
            </span>
            <div className='flex items-start flex-col justify-start'>
              <h4> Solve the problem</h4>
              <p className='text-slate-600 font-normal text-lg'>
                Code your way to a solution
              </p>
            </div>
          </div>
        </div>
        <div data-aos='flip-right' className='w-1/2 relative pb-10'>
          <img
            src={girlCoding}
            alt=''
            className='w-full aspect-4/3 object-cover'
          />
          <div className='absolute w-3/4 bottom-0 bg-green-700 flex items-center justify-evenly font-bold h-24 left-1/7 rounded-lg'>
            <span className='text-white text-3xl'>10</span>
            <h1 className='text-green-950 text-xs text-start'>
              YEARS <br />
              EXPERIENCE
            </h1>
            <hr className='w-0.5 h-24 border-none bg-white' />
            <span className='text-white text-3xl'>250</span>

            <h1 className='text-green-950 text-xs text-start'>
              TYPES OF
              <br />
              COURSES
            </h1>
          </div>
        </div>
      </div>
      <div
        data-aos='zoom-in-down'
        className='flex flex-col items-center justify-center gap-6 text-center p-4 lg:p-20'
      >
        <h2 className='text-3xl font-bold'>
          Your swiss knife for{" "}
          <span className='bg-gradient-to-r from-cyan-700 via-emerald-500 to-amber-400 w-fit bg-clip-text text-transparent'>
            {" "}
            learning any language
          </span>
        </h2>
        <p className='text-slate-600 font-medium lg:w-1/2'>
          Using spin making learning multiple languages easy. with 20+ languages
          realistic voice-over, progress tracking, custom schedule and more.
        </p>
        <div className='flex items-center justify-center flex-wrap'>
          <img src={knowyp} alt='' className='w-80' />
          <img src={comparwo} alt='' className='w-80' />
          <img src={planyl} alt='' className='w-80' />
        </div>
        <NavLink className='text-xl flex items-center justify-center gap-2 bg-amber-300 rounded-lg p-2 px-4 font-medium hover:scale-110 duration-400 ease-in-out'>
          Learn More
        </NavLink>
      </div>
      <div className='flex items-center justify-center flex-wrap gap-20 p-4 lg:p-20 bg-blue-200'>
        <img data-aos='flip-up' src={instructor} alt='' className='lg:w-1/2' />
        <div
          data-aos='flip-down'
          className='text-3xl font-bold lg:w-1/4 flex flex-col gap-10'
        >
          <div>
            {" "}
            <h2>Become an </h2>
            <h2 className='bg-gradient-to-r from-cyan-700 via-emerald-500 to-amber-400 w-fit bg-clip-text text-transparent'>
              Instructor
            </h2>
            <p className='text-xs font-normal text-slate-600'>
              Instructors from around the world teach millions of students on
              StudyNotion. We provide the tools and skills to teach what you
              love.
            </p>
          </div>
          <NavLink className='text-xl flex items-center justify-center gap-2 w-full bg-amber-300 rounded-lg p-2 font-medium hover:scale-110 duration-400 ease-in-out'>
            Start Teaching
            <FaRightLong />
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Home;

// text={codeBlock}
// displayTextRenderer={(ele, i) => {
//   return (
//     <p>
//       {ele}
//       <br />
//     </p>
//   );
// }}
