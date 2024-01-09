"use client"

import { useSession } from "next-auth/react"
import { Edit, Trash } from "lucide-react"
import Link from "next/link"
import { BounceLoader } from "react-spinners"

import styles from "./actionbuttons.module.scss"
import { useRouter } from "next/navigation"
import { useState } from "react"

const ActionButtons = ({ postId }) => {
  const router = useRouter()
  const { status, data } = useSession()
  const [isDeleting, setIsDeleting] = useState(false)

  const deteleData = async () => {
    setIsDeleting(true)
    await fetch(`/api/posts/post/${postId}`, {
      method: "DELETE",
    })
    setIsDeleting(false)
    router.push("/")
  }

  return (
    <>
      {status === "authenticated" && (
        <div className={styles.actions}>
          <Link href={`/posts/edit/${postId}`}>
            <Edit color="green" size={18} />
          </Link>
          <button onClick={deteleData}>
            {isDeleting ? (
              <BounceLoader size={16} color="#DC143C" />
            ) : (
              <Trash color="#DC143C" size={18} />
            )}
          </button>
        </div>
      )}
    </>
  )
}

export default ActionButtons
