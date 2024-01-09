"use client"

import { MoonIcon, SunIcon } from "lucide-react"
import styles from "./theme.module.scss"
import { useContext } from "react"
import { ThemeContext } from "@/context/ThemeContext"

const ThemeToggle = () => {
  const { theme, toggle } = useContext(ThemeContext)
  // console.log(theme)

  return (
    <div
      onClick={toggle}
      className={styles.container}
      style={
        theme === "dark"
          ? { left: 1, background: "#FFF" }
          : { right: 1, background: "#0f172a" }
      }
    >
      <MoonIcon stroke="black" fill="yellow" size={14} />
      <div
        className={styles.ball}
        style={
          theme === "dark"
            ? { left: 3, background: "#0f172a" }
            : { right: 3, background: "#FFF" }
        }
      ></div>
      <SunIcon stroke="black" fill="yellow" size={14} />
    </div>
  )
}

export default ThemeToggle
