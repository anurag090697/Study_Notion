/** @format */

import express from "express";
import {
  alreadyLoggedUser,
  editProfile,
  otpGenrate,
  registerUser,
  userLogin,
} from "../Controllers/UserController.js";

const userRoute = express.Router();

userRoute.post("/generateOtp", otpGenrate);
userRoute.post("/registerUser", registerUser);
userRoute.post("/login", userLogin);
userRoute.get("/alreadyLogged", alreadyLoggedUser);
userRoute.patch("/updateUser", editProfile);

export default userRoute;
