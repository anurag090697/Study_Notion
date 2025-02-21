/** @format */
import { v4 as uuidv4 } from "uuid";

export const newOtp = () => {
  let otp = "";
  for (let i = 0; i < 6; i++) {
    otp += Math.floor(Math.random() * 10);
  }
  return otp;
};

export const generateUniqueId = () => {
  const uuidString = uuidv4();
  const str = uuidString.split("-").join("");
  const uniqueId = "UPIS" + str.substring(0, 11).toUpperCase();
  //   console.log(uniqueId.length);
  return uniqueId;
};
