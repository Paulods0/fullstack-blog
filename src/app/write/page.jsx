"use client"
import { useEffect, useState } from "react"
import { FileImageIcon } from "lucide-react"
import ReactQuill from "react-quill"
import { BounceLoader } from "react-spinners"

import "react-quill/dist/quill.bubble.css"

import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage"
import { app } from "@/utils/firebase"
import Loader from "@/components/loader/Loader"
import Image from "next/image"

import styles from "./writePage.module.scss"

const storage = getStorage(app)

const categoryOptions = [
  "Food",
  "Coding",
  "Culture",
  "Travel",
  "Fashion",
  "Style",
]
const WritePage = () => {
  const { status } = useSession()
  const router = useRouter()

  const [isImageLoading, setIsImageLoading] = useState(false)
  const [isPostLoading, setIsPostLoading] = useState(false)

  const [file, setFile] = useState("")
  const [value, setValue] = useState("")
  const [media, setMedia] = useState("")
  const [title, setTitle] = useState("")
  const [category, setCategory] = useState("")

  useEffect(() => {
    const upload = () => {
      const name = new Date().getTime + file.name
      const storageRef = ref(storage, name)

      const uploadTask = uploadBytesResumable(storageRef, file)

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          setIsImageLoading(true)
        },
        (error) => {
          console.log(error)
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setMedia(downloadURL)
            setIsImageLoading(false)
          })
        }
      )
    }

    file && upload()
  }, [file])

  if (status === "loading") {
    return <div className={styles.loading}>Loading...</div>
  }

  if (status === "unauthenticated") {
    router.push("/")
  }

  const slugify = (str) =>
    str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "_")
      .replace(/^-+|-+$/g, "")

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsPostLoading(true)

    const response = await fetch("/api/posts", {
      method: "POST",
      body: JSON.stringify({
        title,
        desc: value,
        img: media,
        slug: slugify(title),
        catSlug: category,
      }),
    })

    if (response.ok) {
      router.push("/")
    }
    setIsPostLoading(false)
  }

  return (
    <div className={styles.container}>
      <div className={styles.inputContainer}>
        <div className={styles.inputRowContainer}>
          <input
            type="text"
            placeholder="Title"
            className={styles.input}
            onChange={(e) => setTitle(e.target.value)}
          />
          <div className={styles.postImageContainer}>
            {isImageLoading && <Loader size={150} absolute={true} />}

            {media && (
              <div className={styles.postImageWrapper}>
                <Image src={media} fill className={styles.image} />
              </div>
            )}
          </div>
        </div>

        <select
          onChange={(e) => setCategory(e.target.value)}
          className={styles.select}
        >
          <option disabled selected>
            Select A Category
          </option>
          {categoryOptions.map((option, index) => (
            <option key={index} value={option.toLowerCase()}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div className={styles.editor}>
        <div className={styles.add}>
          <input
            type="file"
            id="image"
            onChange={(e) => setFile(e.target.files[0])}
            style={{ display: "none", cursor: "pointer" }}
          />
          <button className={styles.addButton}>
            <label htmlFor="image" style={{ cursor: "pointer" }}>
              <FileImageIcon size={16} color="crimson" />
            </label>
          </button>
        </div>

        <ReactQuill
          className={styles.textArea}
          theme="bubble"
          value={value}
          onChange={setValue}
          placeholder="Tell your story"
        />
        <button
          disabled={isPostLoading}
          className={styles.publishButton}
          onClick={handleSubmit}
          style={{
            opacity: isPostLoading || !media ? 0.5 : 1,
            pointerEvents: isPostLoading || !media ? "none" : "auto",
          }}
        >
          {isPostLoading ? <BounceLoader size={25} color="white" /> : "Publish"}
        </button>
      </div>
    </div>
  )
}

export default WritePage

{
  /* {isPostLoading && (
  <div className={styles.postLoader}>
    <Loader size={150} absolute={false} />
  </div>
)} */
}
