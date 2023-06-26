import React from 'react'
import styles from "./page.module.css"
import Image from 'next/image'
import {notFound} from "next/navigation"

async function getData(id) {
  const res = await fetch(`http://127.0.0.1:3000/api/posts/${id}`,{
     cache:"no-store",
  })
  if (!res.ok) {
    return notFound()

  }
 
  return res.json()
}

const BlogPost = async({params}) => {
  const data = await getData(params.id)
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>
            {data.title}
          </h1>
          <p className={styles.desc}>
           {data.desc}
          </p>
          <div className={styles.author}>
            <Image 
             src={data.img}
             alt="profile-avatar"
             className={styles.avatar}
             height={40}
             width={40}
            />
            <span className={styles.username}>{data.username}</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image 
          src={data.img}
          alt='flying-basketballPlayer'
          height={300}
          width={300}
          className={styles.image}
          />
          <p>
            {data.content}
          </p>
        </div>

      </div>

    </div>
  )
}

export default BlogPost