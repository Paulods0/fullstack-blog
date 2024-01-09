import Menu from "@/components/menu/Menu"
import Image from "next/image"
import Comments from "@/components/comments/Comments"

import styles from "./singlePage.module.scss"
import ActionButtons from "@/components/actionButtons/ActionButtons"
import { getAuthSession } from "@/utils/auth"

const getData = async (slug) => {
  try {
    const response = await fetch(`http://localhost:3000/api/posts/${slug}`, {
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

const SinglePage = async ({ params }) => {
  const { slug } = params
  const data = await getData(slug)
  const auth = await getAuthSession()

  // console.log(data)

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>{data?.title}</h1>

          <div className={styles.user}>
            <div className={styles.contentWrapper}>
              {data?.user?.image && (
                <div className={styles.userImgContainer}>
                  <Image
                    src={data?.user?.image}
                    alt="avatar photo"
                    fill
                    className={styles.avatar}
                  />
                </div>
              )}
              <div className={styles.userTextContainer}>
                <span className={styles.username}>{data?.user?.name}</span>
                <span className={styles.date}>
                  {data?.createdAt.substring(0, 10)}
                </span>
              </div>
            </div>
            {data?.user.email === auth?.user?.email && (
              <ActionButtons postId={data.id} />
            )}
          </div>
        </div>

        <div className={styles.imgContainer}>
          <Image src={data.img} alt="" fill className={styles.image} />
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.post}>
          <div
            className={styles.description}
            dangerouslySetInnerHTML={{ __html: data?.desc }}
          />

          <div className={styles.comment}>
            <Comments postSlug={slug} />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  )
}

export default SinglePage
