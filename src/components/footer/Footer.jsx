import Image from "next/image"
import {
  FacebookIcon,
  GithubIcon,
  InstagramIcon,
  TwitterIcon,
} from "lucide-react"
import styles from "./footer.module.scss"
import Link from "next/link"

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <h1 className={styles.logoText}>Luguenda</h1>
        </div>
        <p className={styles.desc}>
          Welcome to my tech world! I'm Paulo Luguenda, a technology enthusiast
          and passionate developer with a thirst for knowledge. In this blog, I
          share insights, information, and experiences related to the vast
          universe of technology, fashion, cuisine, and much more..
        </p>
        <div className={styles.icons}>
          <FacebookIcon size={18} />
          <TwitterIcon size={18} />
          <InstagramIcon size={18} />
          <GithubIcon size={18} />
        </div>
      </div>

      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Tags</span>
          <Link href="/">Style</Link>
          <Link href="/">Fashion</Link>
          <Link href="/">Coding</Link>
          <Link href="/">Travel</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Socials</span>
          <Link target="_blank" href="https://github.com/PauloDs0">
            Github
          </Link>
          <Link target="_blank" href="https://www.linkedin.com/in/paulods-dev/">
            Linkedin
          </Link>
          <Link target="_blank" href="https://www.instagram.com/paulodasilva0/">
            Instagram
          </Link>
          <Link
            target="_blank"
            href="https://www.facebook.com/profile.php?id=100015254298722"
          >
            Facebook
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Footer
