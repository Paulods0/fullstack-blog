import { FadeLoader } from "react-spinners"
import styles from "./loader.module.scss"

const loading = () => {
  return (
    <div className={styles.preLoader}>
      <FadeLoader size={70} color="#DC143C" />
    </div>
  )
}

export default loading
