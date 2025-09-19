/** @format */

import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Common/Navbar";
import useDarkMode from "./Services/DarkMode";
import Home from "./Components/Common/Home";
import Footer from "./Components/Common/Footer";
import Login from "./Components/User/Login";
import SignUp from "./Components/User/SignUp";
import Profile from "./Components/User/Profile";
import Sidebar from "./Components/Common/Sidebar";
import { useContext, useEffect } from "react";
import { AppContext } from "./Context/AppContext";
import AboutUs from "./Components/Detail/AboutUs";
import Contact from "./Components/Detail/Contact";
import { axiosInstance } from "./Context/AxiosConfig";
import Settings from "./Components/User/Settings";

function App() {
  useDarkMode();
  const { user, sidebar, setUser } = useContext(AppContext);
  const alreadyLogged = async () => {
    try {
      const response = await axiosInstance.get("user/alreadyLogged/");
      // console.log(response,user);
      setUser({ ...response.data, logged: true });
    } catch (error) {
      console.log(error);
    }
  };
  // console.log(sidebar)
  // console.log(user);
  useEffect(() => {
    // console.log(user);
    alreadyLogged();
  }, []);
  return (
    <div
      className={`container min-w-full pt-16 dark:bg-black select-none scroll-smooth min-h-dvh ${
        sidebar ? "lg:pl-60" : ""
      }`}
    >
      <BrowserRouter>
        <Navbar />
        <Sidebar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route element={<Login />} path='/login'></Route>
          <Route element={<SignUp />} path='/signup'></Route>
          <Route element={<Profile />} path='/user/profile'></Route>
          <Route element={<AboutUs />} path='/about'></Route>
          <Route element={<Contact />} path='/contact'></Route>
          <Route element={<Settings />} path='/user/settings'></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
