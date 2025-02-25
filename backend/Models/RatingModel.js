/** @format */

import mongoose from "mongoose";

const ratingSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "StudyNotion_user",
      required: true,
    },
    rating: {
      type: String,
      required: true,
    },
    comment: {
      type: String,
      required: true,
    },
    course: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "studyNotion_course",
      index: true,
    },
  },
  { timestamps: true }
);

const ratingModel = mongoose.model("studyNotion_Rating", ratingSchema);

export default ratingModel;
