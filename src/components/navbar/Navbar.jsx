import Link from "next/link"
import { Github, InstagramIcon, LinkedinIcon } from "lucide-react"
import ThemeToggle from "../themeToggle/ThemeToggle"
import AuthLinks from "../authLinks/AuthLinks"

import styles from "./navbar.module.scss"

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <Link target="_blank" href="https://github.com/PauloDs0">
          <Github size={20} />
        </Link>
        <Link target="_blank" href="https://www.linkedin.com/in/paulods-dev/">
          <LinkedinIcon size={20} />
        </Link>
        <Link target="_blank" href="https://www.instagram.com/paulodasilva0/">
          <InstagramIcon size={20} />
        </Link>
      </div>
      <div className={`${styles.logo} dancing_font`}>PauloBlog</div>
      <div className={styles.links}>
        <ThemeToggle />
        <Link href={"/"} className={styles.link}>
          Home
        </Link>
        <Link href={"/contact"} className={styles.link}>
          Contact
        </Link>
        <Link href={"/about"} className={styles.link}>
          About
        </Link>
        <AuthLinks />
      </div>
    </div>
  )
}

export default Navbar
