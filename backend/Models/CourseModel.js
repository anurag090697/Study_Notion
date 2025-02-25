/** @format */

import mongoose from "mongoose";

const courseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    instructor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "StudyNotion_user",
      required: true,
    },
    content: [{ type: String }],
    enrolled: [
      { type: mongoose.Schema.Types.ObjectId, ref: "StudyNotion_user" },
    ],
    price: {
      type: Number,
    },
    thumbnail: {
      type: String,
    },
    ratings: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "studyNotion_Rating",
      },
    ],
    totalDuration: {
      type: String,
    },
    published: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const courseModel = mongoose.model("studyNotion_course", courseSchema);

export default courseModel;
