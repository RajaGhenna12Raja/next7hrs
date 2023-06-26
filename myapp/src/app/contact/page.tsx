import React from 'react'
import styles from "./page.module.css"
import Image from 'next/image'
import Button from '@/components/button/Button'

const Contact = () => {
  return (
    <div className={styles.container}>
       <h1 className={styles.title}>Lets keep in Touch</h1>
       <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image
          src="/contact.png"
          alt='contact-img'
          fill={true}
          className={styles.image}
          />
        </div>
        <div className={styles.form}>
          <input type='text' placeholder='Name' className={styles.input}/>
          <input type='text' placeholder='Email' className={styles.input}/>
           <textarea className={styles.textArea} cols={30} rows={10} placeholder='Type your Message'></textarea>
           <Button url="#" text="send" />
        </div>
       </div>
    </div>
  )
}

export default Contact