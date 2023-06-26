import React from 'react'
import styles from "./page.module.css"
import Image from 'next/image';
import Button from '@/components/button/Button';

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="https://images.pexels.com/photos/5255996/pexels-photo-5255996.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt='sad-mood' fill={true} className={styles.img}/>
        </div>
        <div className={styles.imgText}>
          <h1>Digital StoryTellers</h1>
          <h2>Handcrafting award winning digital experiences</h2>
        </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who are We?</h1>
          <p className={styles.desc}>
          A classic slip-up for new analysts is not knowing dummy data 
          from real data, which be confusing (and embarrassing) when
          you’re working fast on a project with others.
          <br /><br/>
          That’s because in some cases dummy 
          can “look” real, so make sure to ensure everyone involved is aware when dummy data is active.
          </p>
        </div>
        <div className={styles.item}>
        <h1 className={styles.title}>What we Do?</h1>
          <p className={styles.desc}>
          A classic slip-up for new analysts is not knowing dummy data 
          from real data, which be confusing (and embarrassing) when
          you’re working fast on a project with others.
          <br /><br/>
          That’s because in some cases dummy 
          can “look” real, so make sure to ensure everyone involved is aware when dummy data is active.
          </p>
          <br /><br/>
          <br /><br/>
          <br /><br/>
          <Button url="contact" text="Contact"/>
        </div>
      </div>      
      </div>
  )
}

export default About;