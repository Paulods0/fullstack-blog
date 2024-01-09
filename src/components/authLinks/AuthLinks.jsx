"use client"
import Link from "next/link"
import { useState } from "react"
import { signOut, useSession } from "next-auth/react"
import { LogOut } from "lucide-react"

import styles from "./authlinks.module.scss"

const AuthLinks = () => {
  const [open, setOpen] = useState(false)
  const { status } = useSession()
  return (
    <>
      {status === "unauthenticated" ? (
        <Link href={"/login"} className={styles.link}>
          Login
        </Link>
      ) : (
        <>
          <Link href={"/write"} className={styles.link}>
            Write
          </Link>
          <span className={styles.logout} onClick={signOut}>
            <LogOut size={16} color="white" />
          </span>
        </>
      )}

      <div className={styles.burger} onClick={() => setOpen(!open)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      {open && (
        <div className={styles.responsiveMenu}>
          <Link href={"/"}>Home</Link>
          <Link href={"/"}>Contact</Link>
          <Link href={"/"}>About</Link>
          {status === "notuathenticaded" ? (
            <Link href={"/login"}>Login</Link>
          ) : (
            <>
              <Link href={"/write"}>Write</Link>
              <span className={styles.link}>Logout</span>
            </>
          )}
        </div>
      )}
    </>
  )
}

export default AuthLinks
