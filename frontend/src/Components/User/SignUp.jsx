/** @format */

import React, { useEffect, useState } from "react";
import { BiHide } from "react-icons/bi";
import { BiShow } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";
import loginP from "../../assets/loginP.jpg";
import OtpInput from "react-otp-input";

function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [otpOn, setOtpOn] = useState(false);

  const [signupData, setSignupData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
    mobile: "",
    role: "student",
  });
  const [onetimepassword, setOneTimePassword] = useState("");
  const [resposeMessage, setResponseMessage] = useState({
    message: "",
    error: "",
  });
  const generateOtp = async (e) => {
    e.preventDefault();
    try {
      const response = "";
      console.log(signupData);
    } catch (error) {
      setResponseMessage(error.data);
    }
  };
  //   console.log(onetimepassword);
  useEffect(() => {
    setTimeout(() => {
      setResponseMessage({ message: "", error: "" });
    }, [5000]);
  }, [resposeMessage]);
  return (
    <div className='w-full flex items-center justify-center dark:text-white '>
      <div className='flex flex-wrap gap-10 py-4 md:px-14 items-center justify-center '>
        {otpOn ? (
          <div className='flex flex-col items-center justify-between gap-2 py-3'>
            <h2 className='text-2xl font-bold'>Verify email</h2>
            <h3 className='text-lg text-gray-500'>
              A verification code has been sent to you. Enter the code below
            </h3>
            <OtpInput
              value={onetimepassword}
              onChange={setOneTimePassword}
              numInputs={6}
              renderSeparator={<span>&nbsp;&nbsp;&nbsp;</span>}
              renderInput={(props) => (
                <input
                  {...props}
                  placeholder='_'
                  style={
                    {
                      //   boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                    }
                  }
                  className='p-1 w-12 h-12 text-center focus:ring-2 ring-amber-400 dark:ring-white outline-none bg-gray-600 text-white rounded-md'
                />
              )}
            />
            <div className='h-5 text-emerald-500 w-full font-medium text-center text-xs'>
              <p className=''>{resposeMessage.message}</p>
              <p className='text-rose-500'>{resposeMessage.error}</p>
            </div>
            <button className='text-sm mx-auto flex items-center justify-center gap-2 w-full bg-amber-300 rounded-lg p-3 font-medium hover:scale-110 duration-400 ease-in-out'>
              Submit
            </button>
          </div>
        ) : (
          <div className='lg:w-2/5 p-3'>
            <div className=''>
              <h3 className='font-bold text-2xl py-2'>
                Join the millions learning to code with StudyNotion for free
              </h3>
              <p className='text-lg '>
                Build skills for today, tomorrow, and beyond.
                <span className='font-medium bg-gradient-to-r from-blue-600 to-emerald-500 w-fit bg-clip-text text-transparent'>
                  Education to future-proof your career.
                </span>
              </p>
            </div>
            <div className='flex items-center justify-center pt-2 w-fit gap-5 font-medium'>
              <p
                onClick={(e) =>
                  setSignupData((prev) => ({ ...prev, role: "student" }))
                }
                className={`${
                  signupData.role == "student" ? "bg-gray-400" : ""
                } px-3 py-1 rounded-2xl transition-transform cursor-pointer`}
              >
                Student
              </p>{" "}
              <p
                onClick={(e) =>
                  setSignupData((prev) => ({ ...prev, role: "instructor" }))
                }
                className={`${
                  signupData.role == "instructor" ? "bg-gray-400" : ""
                } px-3 py-1 rounded-2xl cursor-pointer`}
              >
                Instructor
              </p>
            </div>

            <form
              action=''
              onSubmit={(e) => generateOtp(e)}
              className='flex flex-wrap items-start justify-between gap-2 py-3'
            >
              <div className='w-64 flex flex-col items-start justify-start'>
                <label htmlFor='firstname' className='mt-2'>
                  First Name <span className='text-red-600'>*</span>
                </label>
                <input
                  type='text'
                  value={signupData.firstname}
                  onChange={(e) =>
                    setSignupData((prev) => ({
                      ...prev,
                      firstname: e.target.value,
                    }))
                  }
                  placeholder='Enter First Name'
                  name='firstname'
                  required
                  className='p-2 w-full focus:ring-2 ring-amber-400 dark:ring-white outline-none bg-gray-600 text-white rounded-md'
                />
              </div>{" "}
              <div className='w-64 flex flex-col items-start justify-start'>
                <label htmlFor='lastname' className='mt-2'>
                  Last Name <span className='text-red-600'>*</span>
                </label>
                <input
                  type='text'
                  value={signupData.lastname}
                  onChange={(e) =>
                    setSignupData((prev) => ({
                      ...prev,
                      lastname: e.target.value,
                    }))
                  }
                  placeholder='Enter Last Name'
                  name='lastname'
                  required
                  className='p-2 w-full focus:ring-2 ring-amber-400 dark:ring-white outline-none bg-gray-600 text-white rounded-md'
                />
              </div>
              <div className='w-64 flex flex-col items-start justify-start'>
                <label htmlFor='email'>
                  Email Address <span className='text-red-600'>*</span>
                </label>
                <input
                  type='text'
                  required
                  name='email'
                  placeholder='Enter Email'
                  value={signupData.email}
                  onChange={(e) =>
                    setSignupData((prev) => ({
                      ...prev,
                      email: e.target.value,
                    }))
                  }
                  className='p-2 w-full focus:ring-2 ring-amber-400 dark:ring-white outline-none bg-gray-600 text-white rounded-md'
                />
              </div>
              <div className='w-64 flex flex-col items-start justify-start'>
                <label htmlFor='mobile'>Phone Number</label>
                <input
                  type='number'
                  name='mobile'
                  placeholder='Enter Phone Number'
                  value={signupData.mobile}
                  onChange={(e) =>
                    setSignupData((prev) => ({
                      ...prev,
                      mobile: e.target.value,
                    }))
                  }
                  className='p-2 w-full focus:ring-2 ring-amber-400 dark:ring-white outline-none bg-gray-600 text-white rounded-md'
                />
              </div>
              <div className='w-64 relative flex flex-col items-start justify-start'>
                <label htmlFor='password' className='mt-2'>
                  Password <span className='text-red-600'>*</span>
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  value={signupData.password}
                  onChange={(e) =>
                    setSignupData((prev) => ({
                      ...prev,
                      password: e.target.value,
                    }))
                  }
                  placeholder='Enter Password'
                  name='password'
                  required
                  className='p-2 pr-3 w-full focus:ring-2 ring-amber-400 dark:ring-white outline-none bg-gray-600 text-white rounded-md'
                />
                <p
                  onClick={() => setShowPassword((prev) => !prev)}
                  className='cursor-pointer absolute text-black bottom-2.5 right-2 text-xl hover:text-amber-400'
                >
                  {showPassword ? <BiHide /> : <BiShow />}
                </p>
              </div>{" "}
              <div className='w-64 relative flex flex-col items-start justify-start'>
                <label htmlFor='confirmpassword' className='mt-2'>
                  Confirm Password <span className='text-red-600'>*</span>
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  value={signupData.confirmPassword}
                  onChange={(e) =>
                    setSignupData((prev) => ({
                      ...prev,
                      confirmPassword: e.target.value,
                    }))
                  }
                  placeholder='Confirm Password'
                  name='confirmpassword'
                  required
                  className='p-2 pr-3 w-full focus:ring-2 ring-amber-400 dark:ring-white outline-none bg-gray-600 text-white rounded-md'
                />
                <p
                  onClick={() => setShowPassword((prev) => !prev)}
                  className='cursor-pointer absolute text-black bottom-2.5 right-2 text-xl hover:text-amber-400'
                >
                  {showPassword ? <BiHide /> : <BiShow />}
                </p>
              </div>
              <div className='h-5 text-emerald-500 w-full font-medium text-center text-xs'>
                <p className=''>{resposeMessage.message}</p>
                <p className='text-rose-500'>{resposeMessage.error}</p>
              </div>
              <button className='text-sm mx-auto flex items-center justify-center gap-2 w-full bg-amber-300 rounded-lg p-3 font-medium hover:scale-110 duration-400 ease-in-out'>
                Sign In
              </button>
            </form>

            <p className='text-center w-full text-slate-500 text-xl pb-2'>or</p>
            <button
              disabled
              className='cursor-not-allowed mx-auto text-sm flex items-center justify-center gap-2 w-full bg-amber-300 rounded-lg p-3 font-medium hover:scale-110 duration-400 ease-in-out'
            >
              <FcGoogle /> Sign In with Google
            </button>
          </div>
        )}
        <div className='lg:w-1/2 px-4'>
          <img className='w-full aspect-3/2 object-cover' src={loginP} alt='' />
        </div>
      </div>
    </div>
  );
}

export default SignUp;
