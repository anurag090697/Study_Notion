/** @format */

import React, { useContext } from "react";
import { AppContext } from "../../Context/AppContext";
import { NavLink } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { RiDashboard2Fill } from "react-icons/ri";
import { CgScreen } from "react-icons/cg";
import { IoMdAdd } from "react-icons/io";
import { FaHistory } from "react-icons/fa";
import { RiGraduationCapLine } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";

function Sidebar() {
  const { user, Sidebar } = useContext(AppContext);

  if (!user.logged || !Sidebar) {
    return null;
  }

  return (
    <aside className='flex flex-col items-center justify-start w-60 gap-3 fixed pt-16 z-20 left-0 top-0 h-dvh font-medium text-lg bg-slate-300 dark:text-white dark:bg-slate-700'>
      <hr className='border-slate-400 w-4/5 ' />
      <div className='flex flex-col items-start justify-start gap-4 '>
        <NavLink
          className={`flex items-center justify-center gap-1 ${
            user.role == "admin" ? "" : ""
          } hover:text-gray-500`}
        >
          <CgProfile /> My Profile
        </NavLink>
        <NavLink
          className={`flex items-center justify-center gap-1 ${
            user.role == "admin" ? "" : "hidde"
          } hover:text-gray-500`}
        >
          <RiDashboard2Fill /> Dashboard
        </NavLink>
        <NavLink
          className={`flex items-center justify-center gap-1 ${
            user.role == "admin" ? "hidde" : ""
          } hover:text-gray-500`}
        >
          <RiGraduationCapLine />
          Enrolled Courses
        </NavLink>
        <NavLink
          className={`flex items-center justify-center gap-1 ${
            user.role == "admin" ? "" : ""
          } hover:text-gray-500`}
        >
          <FaHistory />
          Purchase History
        </NavLink>
        <NavLink
          className={`flex items-center justify-center gap-1 ${
            user.role == "admin" ? "" : ""
          } hover:text-gray-500`}
        >
          <CgScreen />
          My Course
        </NavLink>
        <NavLink
          className={`flex items-center justify-center gap-1 ${
            user.role == "admin" ? "" : ""
          } hover:text-gray-500`}
        >
          <IoMdAdd />
          Add Course
        </NavLink>
      </div>
      <hr className='border-slate-400 w-5/6 my-6' />
      <div className='flex flex-col w-3/5 items-start justify-start gap-3'>
        <NavLink className='flex items-center justify-center gap-1 hover:text-blue-500'>
          {" "}
          <IoSettingsOutline />
          Settings
        </NavLink>
        <button className='flex items-center justify-center gap-2 hover:text-rose-500'>
          <FiLogOut /> Logout
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;
