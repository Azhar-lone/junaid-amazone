import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Popular email providers
const popularEmailProviders = [
  "gmail.com",
  "yahoo.com",
  "outlook.com",
  "hotmail.com",
];

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, review } = body;
    // Check if the email domain is from a popular provider
    const emailDomain = email.split("@")[1];
    if (!popularEmailProviders.includes(emailDomain)) {
      return NextResponse.json(
        {
          message:
            "Please use a popular email provider (Gmail, Yahoo, Outlook).",
        },
        { status: 400 }
      );
    }

    // Configure nodemailer transport using Gmail's SMTP or another provider
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // Your Gmail address
        pass: process.env.EMAIL_PASS, // Your Gmail app password
      },
    });

    // Mail options
    const mailOptions = {
      from: email,
      to: process.env.EMAIL_RECEIVER, // Your receiving email address
      subject: "New Review Submission",
      text: `Email: ${email}\nMessage: ${review}`,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    // Respond with success
    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "An error occurred while sending the email" },
      { status: 500 }
    );
  }
}
