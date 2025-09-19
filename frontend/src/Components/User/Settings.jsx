/** @format */

import React, { useContext, useEffect, useState } from "react";
import { LuUpload } from "react-icons/lu";
import { GiBrassEye } from "react-icons/gi";
import { AppContext } from "../../Context/AppContext";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../../Context/AxiosConfig";
import { CgCloseO } from "react-icons/cg";

function Settings() {
  const [showPassword, setShowpassword] = useState(false);
  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
    message: "",
    error: "",
  });
  const { user, setUser } = useContext(AppContext);
  const navigate = useNavigate();
  const [profilePic, setProfileic] = useState("");
  const [notification, setNotification] = useState({
    message: "",
    error: "",
  });
  const [tempData, setTempData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    role: "",
    dateOfBirth: "",
    gender: "",
    mobile: "",
    about: "",
  });

  const updateProfilePicture = async (e) => {
    e.preventDefault();
    e.preventDefault();
    if (profilePic && profilePic.size > 2097152) {
      alert("Image size more than 2mb not supported.");
      return;
    } else if (!profilePic) {
      alert("Please select an image before trying to upload.");
      return;
    }
    try {
      const formData = new FormData();
      formData.append("picture", profilePic);

      formData.append("userId", user._id);

      const response = await axiosInstance.post(
        "/user/updatePicture",
        formData
      );
      setProfileic("");
      setUser({ ...user, picture: response.data });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  // console.log(user);
  const updateProfile = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.patch("/user/updateUser", {
        data: { ...tempData },
      });
      setUser(response.data);
      console.log(response);
    } catch (error) {
      // setResponseMessage(error.response.data);
      console.log(error);
    }
  };

  const updatePassword = async (e) => {
    e.preventDefault();
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      return;
    }
    try {
      const response = await axiosInstance.patch("/user/passwordUpdate", {
        ...passwordData,
        userId: tempData._id,
      });
      setPasswordData({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
        message: "",
        error: "",
      });
      // console.log(response);
      setUser({ ...response.data, logged: true });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (user.logged) {
      setTempData({ ...user });
    } else {
      //  navigate("/");
    }
  }, [user]);

  return (
    <div className='p-10 dark:text-white flex flex-col items-start justify-start gap-10'>
      <h1 className='font-bold text-2xl'>Edit Profile</h1>
      {notification.message || notification.error ? (
        <div className='h-dvh w-full bg-black/70 absolute top-0 right-0 z-50 flex justify-center items-center p-8'>
          <div className='min-w-1/3  min-h-56 bg-indigo-200 rounded-xl border-2 relative font-medium flex justify-between items-center flex-col'>
            <div className='flex justify-end items-center w-full py-1 px-4'>
              <button
                className=' hover:text-rose-400 text-3xl text-gray-600'
                onClick={() => setNotification({ message: "", error: "" })}
              >
                <CgCloseO />
              </button>
            </div>
            <p className='text-lime-700 text-xl'>{notification.message}</p>{" "}
            <p className='text-rose-600 text-xl'>{notification.error}</p>
            <div className='flex justify-between items-center'>
              <button
                className='bg-sky-400 p-2 rounded-lg hover:bg-green-400'
                onClick={() => setNotification({ message: "", error: "" })}
              >
                Okay
              </button>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
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
                onChange={(e) => setProfileic(e.currentTarget.files[0])}
              />
            </div>{" "}
            <button
              onClick={(e) => updateProfilePicture(e)}
              className='flex items-center justify-center gap-2 bg-lime-400 rounded-lg py-1 px-2 hover:bg-lime-500'
            >
              Upload <LuUpload />
            </button>
          </div>
        </div>
      </div>
      <div className=' bg-gray-300 dark:bg-slate-600 p-6 rounded-xl w-full flex flex-wrap items-center justify-start gap-6'>
        <h2 className='font-bold text-lg w-full'>Profile Information</h2>
        <form
          action=''
          onSubmit={(e) => updateProfile(e)}
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
                value={tempData.firstname}
                onChange={(e) => {
                  setTempData({
                    ...tempData,
                    firstname: e.currentTarget.value,
                  });
                }}
              />
            </div>
            <div className='flex flex-col gap-2'>
              <label htmlFor='lastname'>Last Name</label>{" "}
              <input
                type='text'
                className='p-2 bg-slate-400 rounded-lg focus:ring-2 ring-blue-500 outline-none w-60'
                placeholder='Enter Last Name'
                name='lastname'
                value={tempData.lastname}
                onChange={(e) => {
                  setTempData({
                    ...tempData,
                    lastname: e.currentTarget.value,
                  });
                }}
              />
            </div>
          </div>
          <div className='flex items-center justify-start flex-wrap gap-6 w-full'>
            <div className='flex flex-col gap-2'>
              <label htmlFor='dob'>Date Of Birth</label>{" "}
              <input
                type='date'
                required
                className='p-2 bg-slate-400 rounded-lg focus:ring-2 ring-blue-500 outline-none w-60'
                name='dob'
                value={tempData.dateOfBirth ? tempData.dateOfBirth : ""}
                onChange={(e) => {
                  setTempData({
                    ...tempData,
                    dateOfBirth: e.currentTarget.value,
                  });
                }}
              />
            </div>
            <div className='flex flex-col gap-2'>
              <label htmlFor='lastname'>Gender</label>{" "}
              <select
                name='gender'
                required
                value={tempData.gender ? tempData.gender : ""}
                onChange={(e) => {
                  setTempData({
                    ...tempData,
                    gender: e.currentTarget.value,
                  });
                }}
                id=''
                className='p-2 bg-slate-400 rounded-lg focus:ring-2 ring-blue-500 outline-none w-60'
              >
                <option value='' disabled>
                  Select
                </option>
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
                value={tempData.mobile}
                onChange={(e) => {
                  setTempData({
                    ...tempData,
                    mobile: e.currentTarget.value,
                  });
                }}
              />
            </div>
            <div className='flex flex-col gap-2'>
              <label htmlFor='about'>About</label>{" "}
              <input
                type='text'
                required
                className='p-2 bg-slate-400 rounded-lg focus:ring-2 ring-blue-500 outline-none w-60'
                placeholder='Enter Details'
                name='about'
                value={tempData.about ? tempData.about : ""}
                onChange={(e) => {
                  setTempData({
                    ...tempData,
                    about: e.currentTarget.value,
                  });
                }}
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
                value={tempData.email}
                onChange={(e) => {
                  setTempData({ ...tempData, email: e.currentTarget.value });
                }}
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
                value={tempData.role}
                onChange={(e) => {
                  setTempData({ ...tempData, role: e.currentTarget.value });
                }}
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
        <form onSubmit={(e) => updatePassword(e)} action='' className='w-full'>
          <div className='flex items-center justify-start flex-wrap gap-6 w-full'>
            <div className='flex flex-col gap-2'>
              <label htmlFor='currentpassword'>Current Password</label>{" "}
              <input
                type={showPassword ? "text" : "password"}
                className='p-2 bg-slate-400 rounded-lg focus:ring-2 ring-blue-500 outline-none w-60'
                placeholder='Enter Current Password'
                name='currentpassword'
                required
                value={passwordData.currentPassword}
                onChange={(e) => {
                  setPasswordData({
                    ...passwordData,
                    currentPassword: e.currentTarget.value,
                  });
                }}
              />
            </div>
            <div className='flex flex-col gap-2'>
              <label htmlFor='newpassword'>New Password</label>{" "}
              <input
                type={showPassword ? "text" : "password"}
                className='p-2 bg-slate-400 rounded-lg focus:ring-2 ring-blue-500 outline-none w-60'
                placeholder='Enter New Password'
                name='newpassword'
                required
                value={passwordData.newPassword}
                onChange={(e) => {
                  setPasswordData({
                    ...passwordData,
                    newPassword: e.currentTarget.value,
                  });
                }}
              />
            </div>
            <div className='flex flex-col gap-2'>
              <label htmlFor='confirmPassword'>Confirm Password</label>{" "}
              <input
                type={showPassword ? "text" : "password"}
                className='p-2 bg-slate-400 rounded-lg focus:ring-2 ring-blue-500 outline-none w-60'
                placeholder='Confirm Passwrod'
                name='confirmpassword'
                required
                value={passwordData.confirmPassword}
                onChange={(e) => {
                  setPasswordData({
                    ...passwordData,
                    confirmPassword: e.currentTarget.value,
                  });
                }}
              />
            </div>
          </div>
          <div className='flex items-center justify-start flex-wrap gap-6 w-full font-medium py-2 h-10'>
            {passwordData.newPassword === passwordData.confirmPassword ? (
              <p className='text-green-400'>{passwordData.message}</p>
            ) : (
              <p className='text-rose-400'>Password does not match</p>
            )}
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
