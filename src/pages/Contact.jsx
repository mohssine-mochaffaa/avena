import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useState } from 'react'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Contact() {
  const [menu,setMenu] = useState("none")

  const handleMenu =()=>{
    if (menu == "none") {
      setMenu("inline")
    }else{
      setMenu("none")
    }
  }
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400&display=swap" rel="stylesheet"/>
      </Head>

      <main className={styles.app}>
        <div className={styles.nav}>

          <div className={styles.nav1}>
            <div className={styles.nav1Container}>
            <div className={styles.navS1}>
              <p className={styles.text}>Le choix d'un partenaire fiable</p>
            </div>
            <div className={styles.navS2}>
              <p className={styles.text2} style={{display:'flex',alignItems:"center"}}> <p className={styles.text}>Appelez-nous:</p>+212 6 59 85 35 33</p>
              <p className={styles.text2} style={{display:'flex',alignItems:"center"}}> <p className={styles.text}>Envoyez-nous un mail:</p> avenaservices@gmail.com</p>
              <a href="https://www.linkedin.com/company/avena-services/" target='_blank' style={{marginTop:"6px",marginLeft:"5px",cursor:"pointer",textDecoration:"none"}}><Image width={20} height={20} src="/assets/linkedin.png"/></a>

            </div>
          </div>
          </div>

          <div className={styles.nav2}>
            <div className={styles.nav2S1}>
              <Image width={110} height={100} src="/assets/logoW.jpeg" />
            </div>

            <div className={styles.nav2S2}>
            <Link style={{textDecoration:"none"}} href="/"><p className={styles.page}>Acceuil</p></Link>
            <Link style={{textDecoration:"none"}} href="/apropos"><p className={styles.page}>A propos</p></Link>
            <Link style={{textDecoration:"none"}} href="/Services"><p className={styles.page}>Nos services</p></Link>
            <Link style={{textDecoration:"none"}} href="/Contact"><p className={styles.page}>Contact</p></Link>
            </div>

            <div className={styles.nav2S3}>
              <button className={styles.devisButton}>Demandez un devis</button>
            </div>
          </div>
        </div>
        <div className={styles.navPhone}>
        <div className={styles.nav2S1}>
              <Image style={{marginLeft:"20px"}} width={75} height={75} src="/assets/logoW.jpeg" />
        </div>
        <div>
          <img onClick={handleMenu} style={{width:"40px",height:"40px",marginRight:"20px",cursor:"pointer"}} src="/assets/bar.png" alt="" />
        </div>
        </div>
        <div style={{display:menu}} className={styles.menu}>
          <div className={styles.menuList}>
            <Link style={{textDecoration:"none",marginBottom:"20px"}} href="/"><p className={styles.page}>Acceuil</p></Link>
            <Link style={{textDecoration:"none",marginBottom:"20px"}} href="/apropos"><p className={styles.page}>A propos</p></Link>
            <Link style={{textDecoration:"none",marginBottom:"20px"}} href="/Services"><p className={styles.page}>Nos services</p></Link>
            <Link style={{textDecoration:"none",marginBottom:"20px"}} href="/Contact"><p className={styles.page}>Contact</p></Link>
          </div>
        </div>


        <div className={styles.contact}>

            <div className={styles.imageContainer}>
            </div>
            
            <div className={styles.contactContainer}>
        <form>
       
      <input placeholder='Votre nom' type="text" name="user_name" />
      <input  placeholder='Votre email' type="email" name="user_email" />
      <input  placeholder='Votre Numéro de téléphone' type="email" name="user_email" />
      <textarea placeholder='Message...' name="message" />
      <input type="submit" value="Envoyer" />
    </form>
            </div>
        </div>




      </main>
    </>
  )
}
