const nodemailer = require("nodemailer")

export let transporter = nodemailer.createTransport({
  service: "Gmail",
  host: "smtp.gmail.com",
  secure: true,
  port: 587,
  tls: true,
  auth: {
    user: "pauloluguenda0@gmail.com",
    pass: "ovolmgavguggvfjg",
  },
})
