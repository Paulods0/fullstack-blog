import prisma from "@/utils/connect"
import { app } from "@/utils/firebase"
import { deleteObject, getStorage, ref } from "firebase/storage"
import { NextResponse } from "next/server"

export async function GET(req, { params }) {
  const { id } = params
  // console.log(id)
  try {
    const post = await prisma.post.findUnique({
      where: { id },
    })

    return new NextResponse(JSON.stringify(post, { status: 200 }))
  } catch (error) {
    console.log(error)
    return new NextResponse(JSON.stringify(error, { status: 400 }))
  }
}

export async function POST(req, { params }) {
  const { id } = params
  const body = await req.json()

  try {
    const post = await prisma.post.update({
      where: {
        id: id,
      },
      data: {
        title: body.title,
        desc: body.value,
        catSlug: body.category,
        img: body.media,
      },
    })

    return new NextResponse(JSON.stringify(post, { status: 200 }))
  } catch (error) {
    console.log(error)
    return new NextResponse(JSON.stringify(error, { status: 400 }))
  }
}
export async function DELETE(req, { params }) {
  const { id } = params
  try {
    const post = await prisma.post.findUnique({
      where: { id },
    })

    const img = post.img
    const storage = getStorage(app)
    const photoRef = ref(storage, img)

    await deleteObject(photoRef)

    await prisma.post.delete({
      where: {
        id,
      },
    })
    // console.log("Deleted")
    return new NextResponse(JSON.stringify({ status: 200 }))
  } catch (error) {
    console.log(error)
    return new NextResponse(JSON.stringify(error, { status: 400 }))
  }
}
