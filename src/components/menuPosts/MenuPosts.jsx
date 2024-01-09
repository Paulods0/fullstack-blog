import Link from "next/link"
import Image from "next/image"
import styles from "./menuPosts.module.scss"

const getData = async () => {
  try {
    const response = await fetch("http://localhost:3000/api/posts/popular", {
      cache: "no-cache",
    })

    if (!response.ok) {
      throw new Error("Failed")
    }
    return response.json()
  } catch (error) {
    console.log(error)
  }
}

const MenuPosts = async ({ withImage }) => {
  const popularPost = await getData()
  // console.log(popularPost)
  return (
    <>
      <div className={styles.items}>
        {popularPost.map((post) => (
          <div key={post._id}>
            <Link href={`/posts/${post.slug}`} className={styles.item}>
              {withImage && (
                <div className={styles.imageContainer}>
                  <Image src="/1.jpg" alt="" fill className={styles.image} />
                </div>
              )}
              <div className={styles.textContainer}>
                <span className={`${styles.category} ${styles[post.catSlug]}`}>
                  {post.catSlug}
                </span>
                <h3 className={styles.postTitle}>{post.title}</h3>
                <div className={styles.details}>
                  <span className={styles.username}>{post.user.name}</span>
                  <span className={styles.date}>
                    {" "}
                    - {post.createdAt.substring(0, 10)}
                  </span>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  )
}

export default MenuPosts
