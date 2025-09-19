/** @format */

import express from "express";
import {
  alreadyLoggedUser,
  editProfile,
  otpGenrate,
  passwordChange,
  registerUser,
  updatePicture,
  userLogin,
  userLogout,
} from "../Controllers/UserController.js";
import upload from "../middlewares/imageUpload.js";

const userRoute = express.Router();

userRoute.post("/generateOtp", otpGenrate);
userRoute.post("/registerUser", registerUser);
userRoute.post("/login", userLogin);
userRoute.get("/alreadyLogged", alreadyLoggedUser);
userRoute.post("/logout", userLogout);
userRoute.patch("/updateUser", editProfile);
userRoute.patch("/passwordUpdate", passwordChange);
userRoute.post(
  "/updatePicture",
  upload.single("picture"),
  updatePicture
);

export default userRoute;
