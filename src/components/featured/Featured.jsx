// "use client"

import Image from "next/image"
import styles from "./featured.module.scss"
import Link from "next/link"
// import { useEffect, useState } from "react"

const getData = async () => {
  try {
    const response = await fetch("http://localhost:3000/api/posts/recent", {
      cache: "no-cache",
    })
    if (!response.status === 200) {
      throw new Error("Fetch failed!")
    }
    return response.json()
  } catch (error) {
    console.log(error)
  }
}

const Featured = async () => {
  const data = await getData()
  const markup = data?.[0].desc?.substring(0, 250)
  // console.log(markup)

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey, Paulo Luguenda here!</b> Discover my stories and creative ideas.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image
            src={data?.[0].img}
            alt="post image"
            fill
            className={styles.image}
          />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>{data?.[0].title}</h1>
          <div
            className={styles.postDesc}
            dangerouslySetInnerHTML={{
              __html: data?.[0].desc?.substring(0, 250),
            }}
          />
          <Link href={`/posts/${data?.[0].slug}`} className={styles.button}>
            Read More
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Featured
