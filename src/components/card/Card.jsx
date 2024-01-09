import Image from "next/image"
import styles from "./card.module.scss"
import Link from "next/link"

const Card = ({ key, post }) => {
  return (
    <div key={post._id} className={styles.container}>
      {post.img && (
        <div className={styles.imageContainer}>
          <Image
            src={post.img}
            alt="Post Image"
            fill
            className={styles.image}
          />
        </div>
      )}
      <div className={styles.textContainer}>
        <div className={styles.details}>
          <span className={styles.date}>
            {post.createdAt.substring(0, 10)} -{" "}
          </span>
          <span className={styles.category}>{post.catSlug}</span>
        </div>
        <Link href={`/posts/${post.slug}`}>
          <h1 className={styles.title}>{post.title}</h1>
        </Link>
        <div
          className={styles.desc}
          dangerouslySetInnerHTML={{
            __html: post.desc.substring(0, 60),
          }}
        />

        <Link href={`/posts/${post.slug}`} className={styles.link}>
          Read More
        </Link>
      </div>
    </div>
  )
}

export default Card
