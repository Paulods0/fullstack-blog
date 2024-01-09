import styles from "./about.module.scss"

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>About Me</h1>
        <p className={styles.paragraph}>What you need to know</p>

        <div className={styles.text}>
          Hello there! I'm Paulo Jorge da Silva Luguenda, a 23-year-old
          fullstack developer hailing from the vibrant city of Luanda in Angola.
          Born and raised in this culturally rich environment, I've developed a
          deep appreciation for both the tech world and the finer things in
          life. <br /> <br /> As a passionate coder, I navigate the realms of
          web development with enthusiasm and creativity. Beyond the lines of
          code, I'm equally addicted to fashion and culinary arts, finding
          inspiration in the perfect blend of aesthetics and flavors. Whether
          crafting elegant lines of code or experimenting with new recipes, I
          believe in the beauty of creating. <br /> <br /> Join me on this
          journey where technology meets style and the culinary world unfolds.
          I'm not just a developer; I'm a curious explorer, constantly seeking
          inspiration from the intersections of different worlds. Let's connect,
          share ideas, and embark on a multidimensional adventure together!
        </div>
      </div>
    </div>
  )
}

export default AboutPage
