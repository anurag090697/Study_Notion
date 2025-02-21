/** @format */

import express from "express";
import {
    alreadyLoggedUser,
  otpGenrate,
  registerUser,
  userLogin,
} from "../Controllers/UserController.js";

const userRoute = express.Router();

userRoute.post("/generateOtp", otpGenrate);
userRoute.post("/registerUser", registerUser);
userRoute.post("/login", userLogin);
userRoute.get("/alreadyLogged", alreadyLoggedUser);

export default userRoute;
