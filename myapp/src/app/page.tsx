import Image from 'next/image'
import Hero from "public/hero.png"
import styles from "./page.module.css"
import Button from '@/components/button/Button'


export default function Home() {
  return (
     <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Better Design for your digital products</h1>
         <p className={styles.desc}>
          turning your idea into reality . we bring together the teams from the global tech industry together.
         </p>
         <Button url="/portfolio" text="See Our Work"/>
      </div>
      <div className={styles.item}>
      <Image src={Hero} alt='heroImg' className={styles.img}/>
      {/* <Image src="https://images.unsplash.com/photo-1686481394225-dba348a3ee0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=1000&q=60" alt='tower-img' height={200} width={200}/>
     <Image src="https://render.fineartamerica.com/images/rendered/search/t-shirt/29/30/images/artworkimages/medium/1/all-you-need-is-love-balazs-solti-transparent.png?targetx=20&targety=0&imagewidth=259&imageheight=405&modelwidth=300&modelheight=405" alt='t-shirt' width={200} height={200}/> */}
      </div>
      </div>
  )
}
