import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import styles from "./page.module.css"

async function getData() {
  const res = await fetch("http://127.0.0.1:3000/api/posts",{
     cache:"no-store",
  })
  if (!res.ok) {
    return notFound()
  }
  return res.json()
}
 
const Blog = async () => {
  const data = await getData();
  return (
    <div className={styles.mainContainer}>
      {data.map((item)=>(
      <Link key={item.id} href={`/blog/${item._id}`} className={styles.container}>
        <div className={styles.imageContainer}>
          <Image 
          src={item.img}
           alt="snow-pic"
           height={400}
           width={250}
           className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>{item.title}</h1>
          <p className={styles.desc}>{item.desc}</p>
        </div>
      </Link>
      ))}
    </div>
  )
}
export default Blog;