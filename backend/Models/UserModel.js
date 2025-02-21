/** @format */

import mongoose from "mongoose";

const profileSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    role: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    mobile: {
      type: String,
      required: true,
    },
    about: {
      type: String,
    },
    picture: {
      type: String,
    },
    courses: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "StudyNotion_Course",
    },
  },
  { timestamps: true }
);

const userModel = mongoose.model("StudyNotion_user", profileSchema);

export default userModel;
