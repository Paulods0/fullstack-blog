import Image from "next/image"
import Pagination from "../pagination/Pagination"
import styles from "./cardlist.module.scss"
import Card from "../card/Card"

const getData = async (page, cat) => {
  const response = await fetch(
    `http://localhost:3000/api/posts?page=${page}&cat=${cat || ""}`,
    {
      cache: "no-cache",
    }
  )
  if (!response.ok) {
    throw new Error("Failed")
  }
  return response.json()
}

const CardList = async ({ page, cat }) => {
  const { posts, count } = await getData(page, cat)
  // console.log("CardList ~ posts", posts)

  const POST_PER_PAGE = 2

  const hasPrev = POST_PER_PAGE * (page - 1) > 0
  const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>
      <div className={styles.posts}>
        {posts?.map((post) => (
          <Card key={post._id} post={post} />
        ))}
      </div>
      <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext} />
    </div>
  )
}

export default CardList
