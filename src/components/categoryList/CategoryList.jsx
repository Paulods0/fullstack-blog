import Link from "next/link"
import Image from "next/image"

import styles from "./category-list.module.scss"

const getData = async () => {
  const response = await fetch("http://localhost:3000/api/categories", {
    cache: "no-cache",
  })
  if (!response.ok) {
    throw new Error("Failed")
  }
  return response.json()
}

const CategoryList = async () => {
  const categories = await getData()
  // console.log(categories)
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        {categories?.map((category) => (
          <Link
            key={category._id}
            href={`/blog?cat=${category.slug}`}
            className={`${styles.category} ${styles[category.slug]}`}
          >
            {category.img && (
              <Image
                src={category.img}
                alt="category photo"
                width={32}
                height={32}
                className={styles.image}
              />
            )}
            {category.title}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default CategoryList
