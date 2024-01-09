"use client"

import { useEffect, useState } from "react"

import Image from "next/image"
import Loader from "@/components/loader/Loader"
import { FileImageIcon, PlusCircleIcon } from "lucide-react"

import ReactQuill from "react-quill"
import "react-quill/dist/quill.bubble.css"

import styles from "./edit.module.scss"
import { useParams } from "next/navigation"

const categoryOptions = [
  "Food",
  "Coding",
  "Culture",
  "Travel",
  "Fashion",
  "Style",
]

const EditPostPage = () => {
  const { id } = useParams()

  const [open, setOpen] = useState(false)
  const [isImageLoading, setIsImageLoading] = useState(false)
  const [isPostLoading, setIsPostLoading] = useState(false)

  const [file, setFile] = useState("")
  const [value, setValue] = useState("")
  const [media, setMedia] = useState("")
  const [title, setTitle] = useState("")
  const [category, setCategory] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    const response = await fetch(`/api/posts/post/${id}`, {
      method: "POST",
      body: JSON.stringify({
        title,
        value,
        category,
      }),
    })

    if (response.ok) {
      alert("Success")
    }
  }

  useEffect(() => {
    const getPost = async () => {
      const data = await fetch(`/api/posts/post/${id}`)
      const post = await data.json()
      setMedia(post.img)
      setTitle(post.title)
      setCategory(post.catSlug)
      setValue(post.desc)

      // console.log(post)
    }

    getPost()
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.inputContainer}>
        <div className={styles.inputRowContainer}>
          <input
            value={title}
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
          value={category}
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
        <button className={styles.button} onClick={() => setOpen(!open)}>
          <PlusCircleIcon width={16} color="crimson" />
        </button>

        {open && (
          <div className={styles.add}>
            <input
              type="file"
              id="image"
              onChange={(e) => setFile(e.target.files[0])}
              style={{ display: "none" }}
            />
            <button className={styles.addButton}>
              <label htmlFor="image">
                <FileImageIcon size={16} color="crimson" />
              </label>
            </button>
          </div>
        )}

        <ReactQuill
          className={styles.textArea}
          theme="bubble"
          value={value}
          onChange={setValue}
          placeholder="Tell your story"
        />
        <button className={styles.publishButton} onClick={handleSubmit}>
          Edit Post
        </button>
      </div>

      {isPostLoading && (
        <div className={styles.postLoader}>
          <Loader size={150} absolute={false} />
        </div>
      )}
    </div>
  )
}

export default EditPostPage
