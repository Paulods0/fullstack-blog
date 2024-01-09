import MenuPosts from "../menuPosts/MenuPosts"
import MenuCategories from "../menuCategories/MenuCategories"

import styles from "./menu.module.scss"

const Menu = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.subtitle}>{"What's hot"}</h2>
      <h1 className={styles.title}>Most Popular</h1>
      <MenuPosts />
      {/**MIDDLE SECTION */}
      <h2 className={styles.subtitle}>{"Discover by topics"}</h2>
      <h1 className={styles.title}>Categories</h1>
      <MenuCategories />
      {/**BOTTOM SECTION */}
      {/* <h2 className={styles.subtitle}>{"Choosen by the editor"}</h2>
      <h1 className={styles.title}>Editors Pick</h1>
      <MenuPosts withImage={true} /> */}
    </div>
  )
}

export default Menu
