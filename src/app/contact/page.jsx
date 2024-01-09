"use client"

import { FacebookIcon, Github, GithubIcon, Instagram } from "lucide-react"
import styles from "./contact.module.scss"
import Link from "next/link"
import { useState } from "react"
import { sendMail } from "@/utils/api"

const ContactPage = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = {
      name,
      email,
      message,
    }
    // console.log(data)
    await sendMail(data)

    setEmail("")
    setName("")
    setMessage("")
  }

  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1>Contact</h1>
        <p>
          I would love to connect with you, please fill out the form so I know
          where to reach you.😉
        </p>
        <div className={styles.links}>
          <p>You can also follow me on social medias like:</p>
          <span>
            <Link href="https://facebook.com/paulodasilva/">
              <FacebookIcon size={23} />
            </Link>
            <Link href="https://instagram.com/paulods0/">
              <Instagram size={23} />
            </Link>
            <Link href="https://github.com/PauloDs0/">
              <Github size={23} />
            </Link>
          </span>
        </div>
      </div>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.inputContainer}>
          <input
            value={name}
            type="text"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className={styles.inputContainer}>
          <input
            value={email}
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <textarea
          value={message}
          rows={10}
          placeholder="Message"
          className={styles.textarea}
          onChange={(e) => setMessage(e.target.value)}
        />

        <button className={styles.button} type="submit">
          Send Message
        </button>
      </form>
    </div>
  )
}

export default ContactPage
