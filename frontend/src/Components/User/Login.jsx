/** @format */

import React, { useContext, useEffect, useState } from "react";
import { BiHide } from "react-icons/bi";
import { BiShow } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";
import loginP from "../../assets/loginP.jpg";
import { axiosInstance } from "../../Context/AxiosConfig";
import { AppContext } from "../../Context/AppContext";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [emailPass, setEmailPass] = useState({ email: "", password: "" });
  const { user, setUser } = useContext(AppContext);
  const [resposeMessage, setResponseMessage] = useState({
    message: "",
    error: "",
  });
  const logInUser = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post("/user/login", {
        ...emailPass,
      });
      // console.log(response);
      setUser({ ...response.data, logged: true });
      console.log(user);
    } catch (error) {
      // setResponseMessage(error.response.data);
      console.log(error);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setResponseMessage({ message: "", error: "" });
    }, [20000]);
  }, [resposeMessage]);

  return (
    <div className='w-full flex items-center justify-center dark:text-white'>
      <div className='flex flex-wrap gap-10 p-14 items-center justify-center'>
        <div className='lg:w-1/3 p-3'>
          <div className=''>
            <h3 className='font-bold text-2xl py-2'>Welcome Back</h3>
            <p className='text-lg'>
              Build skills for today, tomorrow, and beyond.
              <span className='font-medium bg-gradient-to-r from-blue-600 to-emerald-500 w-fit bg-clip-text text-transparent'>
                Education to future-proof your career.
              </span>
            </p>
          </div>
          <form
            action=''
            onSubmit={(e) => logInUser(e)}
            className='flex flex-col items-start justify-start gap-3 py-3'
          >
            <label htmlFor='email'>
              Email Address <span className='text-red-600'>*</span>
            </label>
            <input
              type='text'
              required
              name='email'
              placeholder='Enter Email'
              value={emailPass.email}
              onChange={(e) =>
                setEmailPass((prev) => ({ ...prev, email: e.target.value }))
              }
              className='p-2 w-72 focus:ring-2 ring-amber-400 dark:ring-white outline-none bg-gray-600 text-white rounded-md'
            />

            <label htmlFor='password' className='mt-2'>
              Password <span className='text-red-600'>*</span>
            </label>
            <div className='relative'>
              <input
                type={showPassword ? "text" : "password"}
                value={emailPass.password}
                onChange={(e) =>
                  setEmailPass((prev) => ({
                    ...prev,
                    password: e.target.value,
                  }))
                }
                placeholder='Enter Password'
                name='password'
                required
                className='p-2 pr-3 w-72 focus:ring-2 ring-amber-400 dark:ring-white outline-none bg-gray-600 text-white rounded-md'
              />
              <p
                onClick={() => setShowPassword((prev) => !prev)}
                className='cursor-pointer absolute text-black bottom-2.5 right-2 text-xl hover:text-amber-400'
              >
                {showPassword ? <BiHide /> : <BiShow />}
              </p>
            </div>
            <div className='h-5 text-emerald-500 w-72 font-medium text-center text-xs'>
              <p className=''>{resposeMessage.message}</p>
              <p className='text-rose-500'>{resposeMessage.error}</p>
            </div>
            <button className='text-sm flex items-center justify-center gap-2 w-72 bg-amber-300 rounded-lg p-3 font-medium hover:scale-110 duration-400 ease-in-out'>
              Sign In
            </button>
          </form>

          <p className='text-center w-72 text-slate-500 text-xl'>or</p>
          <button
            disabled
            className='text-sm flex items-center my-3 cursor-not-allowed justify-center gap-2 w-72 bg-amber-300 rounded-lg p-3 font-medium hover:scale-110 duration-400 ease-in-out'
          >
            <FcGoogle /> Sign In with Google
          </button>
        </div>
        <div className='w-1/2 px-4'>
          <img className='w-full aspect-3/2 object-cover' src={loginP} alt='' />
        </div>
      </div>
    </div>
  );
}

export default Login;
