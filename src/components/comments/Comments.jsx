"use client"

import Link from "next/link"
import Image from "next/image"
import useSWR from "swr"

import styles from "./comments.module.scss"
import { useSession } from "next-auth/react"
import { useState } from "react"

const fetcher = async (url) => {
  const res = await fetch(url)

  const data = await res.json()
  if (!res.ok) {
    const error = new Error(data.message)
    throw error
  }
  return data
}

const Comments = ({ postSlug }) => {
  const { status } = useSession()

  const { data, mutate, isLoading } = useSWR(
    `http://localhost:3000/api/comments?postSlug=${postSlug}`,
    fetcher
  )

  const [desc, setDesc] = useState("")
  const handleSubmit = async () => {
    await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({ desc, postSlug }),
    })
    mutate()
  }
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>
      {status === "authenticated" ? (
        <div className={styles.write}>
          <textarea
            placeholder="Write a comment..."
            className={styles.input}
            onChange={(e) => setDesc(e.target.value)}
          />
          <button className={styles.button} onClick={handleSubmit}>
            Send
          </button>
        </div>
      ) : (
        <Link href="/login">Login to write a comment</Link>
      )}

      <div className={styles.comments}>
        {isLoading
          ? "Loading..."
          : data?.map((comment, index) => (
              <div className={styles.comment} key={index}>
                <div className={styles.user}>
                  {comment.user?.image && (
                    <Image
                      src={comment.user.image}
                      alt="user photo"
                      height={50}
                      width={50}
                      className={styles.image}
                    />
                  )}

                  <div className={styles.userInfo}>
                    <span className={styles.username}>{comment.user.name}</span>
                    <span className={styles.date}>
                      {comment.createdAt.substring(0, 10)}
                    </span>
                  </div>
                </div>

                <p className={styles.desc}>{comment.desc}</p>
              </div>
            ))}
      </div>
    </div>
  )
}

export default Comments
