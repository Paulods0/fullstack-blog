import { transporter } from "@/config"
import { NextResponse } from "next/server"

export async function POST(req) {
  const body = await req.json()

  // const mailOptions = {

  // }
  try {
    const response = await transporter.sendMail({
      from: "pauloluguenda0@gmail.com",
      to: "pauloluguenda0@gmail.com",
      replyTo: body.email,
      subject: "Contato Através do Blog",
      text: body.message,
      html: `<b>${body.name}</b> <br/> ${body.message}`,
    })

    // console.log(response)
    return new NextResponse(JSON.stringify({ status: "ok" }))
  } catch (err) {
    console.log(err)
    throw new Error("Failed")
  }

  // console.log(response)
  // return new NextResponse(JSON.stringify(response))
}
