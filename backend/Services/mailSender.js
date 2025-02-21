/** @format */

import { createTransport } from "nodemailer";
import "dotenv/config";

// export const sendMail = async (reciever, body) => {
//   const transport = createTransport({
//     service: "gmail",
//     auth: {
//       user: process.env.usermail,
//       pass: process.env.userpass,
//     },
//   });
//   try {
//     await transport.sendMail({
//       from: process.env.usermail,
//       to: reciever,
//       subject: "This is otp for reseting you password",
//       text: `Hello user, this ${body} is the otp for your password reset and it will be valid for sixty secons only.If you did not request this we advise you to change your password asap.`,
//     });
//   } catch (err) {
//     console.log(err);
//   }
// };

export const sendMail = async (reciever, otp) => {
  const transport = createTransport({
    service: "gmail",
    auth: {
      user: process.env.usermail,
      pass: process.env.userpass,
    },
  });

  const htmlBody = `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Password Reset OTP</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                background-color: #f4f4f4;
                margin: 0;
                padding: 0;
            }
            .email-container {
                max-width: 600px;
                margin: 20px auto;
                background-color: #ffffff;
                border-radius: 10px;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                overflow: hidden;
            }
            .email-header {
                background-color: #4caf50;
                color: white;
                text-align: center;
                padding: 20px 10px;
            }
            .email-body {
                padding: 20px;
                color: #333333;
            }
            .email-body h1 {
                font-size: 24px;
                margin: 0 0 20px;
            }
            .otp-box {
                background-color: #f1f1f1;
                border: 1px dashed #4caf50;
                padding: 15px;
                font-size: 22px;
                text-align: center;
                font-weight: bold;
                margin: 20px 0;
                color: #4caf50;
            }
            .email-footer {
                background-color: #f9f9f9;
                color: #666666;
                text-align: center;
                padding: 15px 10px;
                font-size: 14px;
            }
            .btn {
                display: inline-block;
                background-color: #4caf50;
                color: white;
                text-decoration: none;
                padding: 10px 20px;
                border-radius: 5px;
                margin-top: 10px;
                font-size: 16px;
            }
            .btn:hover {
                background-color: #45a049;
            }
        </style>
    </head>
    <body>
        <div class="email-container">
            <div class="email-header">
                <h1>Password Reset Request</h1>
            </div>
            <div class="email-body">
                <p>Hi ${reciever},</p>
                <p>We received a request to reset your password. Use the OTP below to proceed:</p>
                <div class="otp-box">${otp}</div>
                <p>If you did not request this, please ignore this email or contact support if you have concerns.</p>
            </div>
            <div class="email-footer">
                <p>Thank you for using our service.</p>
                <p><strong>Team StudyNotion.</strong></p>
            </div>
        </div>
    </body>
    </html>
  `;

  try {
    await transport.sendMail({
      from: process.env.usermail,
      to: reciever,
      subject: "Password Reset OTP",
      html: htmlBody,
    });
  } catch (err) {
    console.log(err);
  }
};