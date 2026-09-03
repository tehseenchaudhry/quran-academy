import nodemailer from "nodemailer"


export const sendEmails = nodemailer.createTransport({
    service: "gmail",
    auth: {
        pass: process.env.EMAIL_PASS,
        user: process.env.EMAIL_USER
    }
})