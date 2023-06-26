import React from 'react'
import styles from "./footer.module.css"
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className={styles.container}>
     <div>2023 jobhikar. All Rights Reserved</div>
      <div className={styles.container}>
       <Link href="https://www.facebook.com/jobhikarquiz" target='_blank'>
       <Image
        src='/1.png'
        alt='facebook'
        width={20}
        height={20}
        className={styles.icon}
       />
       </Link>
       <Link href="">
       <Image
        src='/2.png'
        alt='lnstagram'
        width={20}
        height={20}
        className={styles.icon}
       />
       </Link>
       <Link href="">
       <Image
        src='/3.png'
        alt='twitter'
        width={20}
        height={20}
        className={styles.icon}
       />
       </Link>
       <Link href="">
        <Image
        src='/4.png'
        alt='youtube'
        width={20}
        height={20}
        className={styles.icon}
       />
       </Link>
      </div>
    </div>
  )
}

export default Footer