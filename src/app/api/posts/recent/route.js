import prisma from "@/utils/connect"
import { NextResponse } from "next/server"

export async function GET() {
  try {
    const recentPost = await prisma.post.findMany({
      take: 1,
      orderBy: {
        createdAt: "desc",
      },
    })
    // console.log(recentPost)
    return new NextResponse(JSON.stringify(recentPost, { status: 200 }))
  } catch (error) {
    console.log(error)
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong" }, { status: 500 })
    )
  }
}
