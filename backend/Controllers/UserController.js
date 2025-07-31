/** @format */

import otpModel from "../Models/OtpModel.js";
import userModel from "../Models/UserModel.js";
import { generatejwtToken } from "../Services/jwtToken.js";
import { sendMail } from "../Services/mailSender.js";
import { newOtp } from "../Services/otpGenerator.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const otpGenrate = async (req, res) => {
  try {
    const { email } = req.body;
    // console.log(email, firstname);
    const findUser = await userModel.findOne({ email });
    // console.log(findUser);
    // return res.send("heheheh");
    if (findUser) {
      return res
        .status(409)
        .json({ message: "", error: "User already exists" });
    }
    const otp = newOtp();
    const tempotp = new otpModel({
      email,
      otp,
      purpose: "registerSN",
    }).save();
    await sendMail(email, otp);
    res.status(201).json({ message: "Send email successfully", error: "" });
  } catch (error) {
    res.status(500).json({ message: "", error: error });
  }
};

export const registerUser = async (req, res) => {
  try {
    let { email, firstname, lastname, password, role, mobile, otp } = req.body;

    // console.log(email, firstname, lastname, password, role, mobile,otp);
    const hashedPassword = await bcrypt.hash(password, 11);
    password = hashedPassword;
    const verifyotp = await otpModel.findOne({ email });

    if (!verifyotp) {
      return res.status(404).json({ message: "", error: "Otp expired" });
    } else if (verifyotp.otp != otp) {
      return res.status(401).json({ message: "", error: "Incorrect otp" });
    }

    const newUser = new userModel({
      email,
      firstname,
      lastname,
      password,
      role,
      mobile,
    });
    if (!newUser) {
      return res
        .status(401)
        .json({ messgae: "", error: "An error occured please try again." });
    }

    await newUser.save();
    res.status(202).json(newUser);
  } catch (error) {
    res.status(500).json({ message: "", error: error });
  }
};

export const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const findUser = await userModel.findOne({ email });
    if (!findUser) {
      return res.status(404).json({ message: "", error: "User not found" });
    }
    const matchPassword = await bcrypt.compare(password, findUser.password);
    // console.log(matchPassword);

    if (!matchPassword) {
      return res
        .status(403)
        .json({ message: "", error: "Incorrect Password." });
    }
    const newToken = generatejwtToken(findUser);
    findUser.password = null;
    res
      .cookie("studyNotion", newToken, {
        httpOnly: true,
        sameSite: "strict",
        maxAge: 5 * 24 * 60 * 60 * 1000,
        secure: true,
      })
      .status(202)
      .json({ ...findUser, logged: true });
  } catch (error) {
    res.status(500).json({ message: "", error: error });
  }
};

// .cookie("studyNotion", newToken, {
//   httpOnly: true,
//   sameSite: "strict",
//   maxAge: 5 * 24 * 60 * 60 * 1000,
//   secure: true,
// })

export const alreadyLoggedUser = async (req, res) => {
  try {
    const { studyNotion } = req.cookies;

    const verifyToken = jwt.verify(studyNotion, process.env.JWT_SECRET);
    if (!studyNotion || !verifyToken) {
      return res.status(404).json({ message: "", error: "Not logged" });
    }
    const findUser = await userModel.findById(verifyToken.userId);
    if (!findUser) {
      return res.status(404).json({ message: "", error: "User not found." });
    }
    findUser.password = null;
    res.status(202).json(findUser);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

export const editProfile = async (req, res) => {
  try {
    const { data } = req.body;

    console.log(data);
    res.send("hehe");
  } catch (error) {
    res.status(500).json({ error: error });
  }
};
