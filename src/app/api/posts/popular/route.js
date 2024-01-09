import prisma from "@/utils/connect"
import { NextResponse } from "next/server"

export const GET = async () => {
  try {
    const popularPosts = await prisma.post.findMany({
      take: 6,
      where: {
        views: {
          gt: 0,
        },
      },
      orderBy: {
        createdAt: "desc",
      },
      include: { user: true },
    })
    // console.log(popularPosts)

    return new NextResponse(JSON.stringify(popularPosts, { status: 200 }))
  } catch (error) {
    console.log(error)
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong" }, { status: 500 })
    )
  }
}
