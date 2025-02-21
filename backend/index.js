/** @format */

import express from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import userRoute from "./Routes/UserRoutes.js";
import courseRoute from "./Routes/CousreRoutes.js";
import { sendMail } from "./Services/mailSender.js";

const corsOptions = {
  origin: process.env.MAIN_PORT,
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH"],
};

const app = express();
const port = 6969;

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use("/user", userRoute);
app.use("/course", courseRoute);

app.get("/", async (req, res) => {
  // await sendMail('cool.niks213@gmail.com', '56248');
  res.send("heaahhaah");
});

try {
  await mongoose.connect(process.env.DB_ID);
  app.listen(port, () => {
    console.log(`Database connected and server is running at port ${port}`);
  });
} catch (err) {
  console.log(err);
}
