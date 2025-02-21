/** @format */

import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

function Footer() {
  const location = useLocation();
  if (location.pathname === "/login" || location.pathname === "/signup") {
    return null;
  }
  return (
    <footer className='bg-slate-400 dark:bg-slate-800 w-full p-10 text-slate-700 dark:text-gray-400'>
      <div className='flex flex-wrap gap-10 items-start justify-center p-4'>
        <div className='flex flex-wrap gap-12 justify-start items-start '>
          <div className='flex flex-col gap-2 items-start justify-center'>
            <NavLink
              to='/'
              title='StudyNotion'
              className='flex gap-2 items-center justify-center font-medium text-2xl'
            >
              <h1 className='rounded-full text-black text-3xl bg-white h-10 w-10 flex items-center justify-center font-bold'>
                S
              </h1>
              <h2 className='dark:text-white'>StudyNotion</h2>
            </NavLink>
            <h3 className='text-white pt-2 text-xl font-medium'>Company</h3>
            <Link to='#' className='hover:text-gray-50'>
              About
            </Link>
            <Link to='#' className='hover:text-gray-50'>
              Carrers
            </Link>
            <Link to='#' className='hover:text-gray-50'>
              Affiliates
            </Link>
          </div>
          <div className='flex flex-col gap-2 items-start justify-center'>
            <h3 className='text-white pt-3 text-xl font-medium'>Resources</h3>
            <Link to='#' className='hover:text-gray-50'>
              Articles
            </Link>
            <Link to='#' className='hover:text-gray-50'>
              Blog
            </Link>
            <Link to='#' className='hover:text-gray-50'>
              Chart Sheet
            </Link>
            <Link to='#' className='hover:text-gray-50'>
              Code challenges
            </Link>
            <Link to='#' className='hover:text-gray-50'>
              Docs
            </Link>
            <Link to='#' className='hover:text-gray-50'>
              Projects
            </Link>
            <Link to='#' className='hover:text-gray-50'>
              videos
            </Link>
            <Link to='#' className='hover:text-gray-50'>
              Workspaces
            </Link>
            <h3 className='text-white pt-3 text-xl font-medium'>Support</h3>
            <Link to='#' className='hover:text-gray-50'>
              help Center
            </Link>
          </div>
          <div className='flex flex-col gap-2 items-start '>
            <h3 className='text-white pt-3 text-xl font-medium'>Plans</h3>
            <Link to='#' className='hover:text-gray-50'>
              Paid membership
            </Link>
            <Link to='#' className='hover:text-gray-50'>
              For Students
            </Link>
            <Link to='#' className='hover:text-gray-50'>
              Business Solutions
            </Link>
            <h3 className='text-white pt-3 text-xl font-medium'>Community</h3>
            <Link to='#' className='hover:text-gray-50'>
              Forums
            </Link>
            <Link to='#' className='hover:text-gray-50'>
              Chapters
            </Link>
            <Link to='#' className='hover:text-gray-50'>
              Events
            </Link>
          </div>
        </div>
        <hr className='border-gray-600 lg:hidden' />
        <div className='flex flex-wrap gap-12 items-start lg:border-l lg:pl-8 border-slate-100 dark:border:slate-600'>
          <div className='flex flex-col gap-2 items-start justify-center'>
            <h3 className='text-white pt-3 text-xl font-medium'>Subjects</h3>
            <Link to='#' className='hover:text-gray-50'>
              AI
            </Link>
            <Link to='#' className='hover:text-gray-50'>
              Cloud Computing
            </Link>
            <Link to='#' className='hover:text-gray-50'>
              Code Foundation
            </Link>
            <Link to='#' className='hover:text-gray-50'>
              Computer Science
            </Link>
            <Link to='#' className='hover:text-gray-50'>
              Cybersecurity
            </Link>
            <Link to='#' className='hover:text-gray-50'>
              Data Analytics
            </Link>
            <Link to='#' className='hover:text-gray-50'>
              Data Science
            </Link>
            <Link to='#' className='hover:text-gray-50'>
              Data Visualization
            </Link>
            <Link to='#' className='hover:text-gray-50'>
              Developer Tools
            </Link>
            <Link to='#' className='hover:text-gray-50'>
              DevOps
            </Link>
            <Link to='#' className='hover:text-gray-50'>
              Game Development
            </Link>
            <Link to='#' className='hover:text-gray-50'>
              IT
            </Link>
            <Link to='#' className='hover:text-gray-50'>
              Machine Learning
            </Link>
            <Link to='#' className='hover:text-gray-50'>
              Math
            </Link>
            <Link to='#' className='hover:text-gray-50'>
              Mobile Development
            </Link>
            <Link to='#' className='hover:text-gray-50'>
              Web Design
            </Link>
            <Link to='#' className='hover:text-gray-50'>
              Web Development
            </Link>
          </div>
          <div className='flex flex-col gap-2 items-start justify-center'>
            <h3 className='text-white pt-3 text-xl font-medium'>Languages</h3>
            <Link to='#' className='hover:text-gray-50'>
              Bash
            </Link>{" "}
            <Link to='#' className='hover:text-gray-50'>
              C++
            </Link>{" "}
            <Link to='#' className='hover:text-gray-50'>
              C#
            </Link>{" "}
            <Link to='#' className='hover:text-gray-50'>
              Go
            </Link>{" "}
            <Link to='#' className='hover:text-gray-50'>
              HTML & CSS
            </Link>{" "}
            <Link to='#' className='hover:text-gray-50'>
              Java
            </Link>{" "}
            <Link to='#' className='hover:text-gray-50'>
              JavaScript
            </Link>{" "}
            <Link to='#' className='hover:text-gray-50'>
              Kotlin
            </Link>{" "}
            <Link to='#' className='hover:text-gray-50'>
              PHP
            </Link>
            <Link to='#' className='hover:text-gray-50'>
              Python
            </Link>
            <Link to='#' className='hover:text-gray-50'>
              R
            </Link>
            <Link to='#' className='hover:text-gray-50'>
              Ruby
            </Link>
            <Link to='#' className='hover:text-gray-50'>
              SQL
            </Link>
            <Link to='#' className='hover:text-gray-50'>
              Swift
            </Link>
          </div>

          <div className='flex flex-col gap-2 items-start justify-center'>
            <h3 className='text-white pt-3 text-xl font-medium'>
              Career Building
            </h3>
            <Link to='#' className='hover:text-gray-50'>
              Career Paths
            </Link>
            <Link to='#' className='hover:text-gray-50'>
              Career services
            </Link>
            <Link to='#' className='hover:text-gray-50'>
              Interview prep
            </Link>
            <Link to='#' className='hover:text-gray-50'>
              Professional certification
            </Link>
            <Link to='#' className='hover:text-gray-50'>
              -
            </Link>
            <Link to='#' className='hover:text-gray-50'>
              Full Catalog
            </Link>
            <Link to='#' className='hover:text-gray-50'>
              Beta Content
            </Link>
          </div>
        </div>
      </div>
      <hr className='border-gray-500' />
      <div className='flex flex-wrap gap-2 w-full items-start justify-between p-2 md:p-6'>
        <div className='flex flex-wrap items-start justify-between gap-3'>
          <Link to='#' className='hover:text-gray-50'>
            Privacy Policy
          </Link>
          <Link to='#' className='hover:text-gray-50'>
            Cookie Policy
          </Link>
          <Link to='#' className='hover:text-gray-50'>
            Terms
          </Link>
        </div>
        <div>Made by- Anurag Shukla</div>
      </div>
    </footer>
  );
}

export default Footer;
