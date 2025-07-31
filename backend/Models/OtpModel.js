/** @format */

import mongoose from "mongoose";

const OTPSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  otp: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
    expires: 5 * 60, 
  },
  purpose: {
    type: String,
    required: true,
  },
});

const otpModel = mongoose.model("OTPBag", OTPSchema);

export default otpModel;
