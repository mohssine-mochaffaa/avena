import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useRef, useState } from 'react'
import Link from 'next/link'
import emailjs from '@emailjs/browser';


const inter = Inter({ subsets: ['latin'] })

export default function Contact() {
  const [menu,setMenu] = useState("none")
  const form = useRef();
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [phone,setPhone] = useState("")
  const [message,setMessage] = useState("")
  const [sendit,setSendit] = useState(false)

  const handleMenu =()=>{
    if (menu == "none") {
      setMenu("inline")
    }else{
      setMenu("none")
    }
  }


  const sendEmail = (e) => {
    e.preventDefault();
 

    emailjs.sendForm(process.env.NEXT_PUBLIC_SERVICE_ID, process.env.NEXT_PUBLIC_TEMPLATE_ID, form.current, process.env.NEXT_PUBLIC_PUBLIC_KEY)
      .then((result) => {
          console.log(result.text);
      }, (error) => { 
          console.log(error.text);
      });

      setSendit(true)
      setName("")
      setEmail("")
      setMessage("")
      setEmail("")
      setPhone('')
  };
  return (
    <>
      <Head>
      <title>Groupe avena</title>
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
              <div>
              <a href="https://wa.me/+212659853533" target='_blank' style={{marginTop:"6px",marginLeft:"10px",cursor:"pointer",textDecoration:"none"}}><Image width={20} height={20} src="/assets/whatsapp.png"/></a>
              <a href="https://www.linkedin.com/company/avena-services/" target='_blank' style={{marginTop:"6px",marginLeft:"5px",cursor:"pointer",textDecoration:"none"}}><Image width={20} height={20} src="/assets/linkedin.png"/></a>
              </div>
            </div>
          </div>
          </div>

          <div className={styles.nav2}>
            <div className={styles.nav2S1}>
              <Image width={110} height={100} src="/assets/logoW.jpeg" />
            </div>

            <div className={styles.nav2S2}>
            <Link style={{textDecoration:"none"}} href="/"><p className={styles.page}>Accueil</p></Link>
            <Link style={{textDecoration:"none"}} href="/apropos"><p className={styles.page}>À propos</p></Link>
            <Link style={{textDecoration:"none"}} href="/Services"><p className={styles.page}>Nos services</p></Link>
            <Link style={{textDecoration:"none"}} href="/Contact"><p className={styles.page}>Contact</p></Link>
            </div>

            <div className={styles.nav2S3}>
            <a style={{textDecoration:'none'}} href="https://wa.me/+212659853533" target='_blank'><button className={styles.devisButton}>Demandez un devis</button></a>
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
            <Link style={{textDecoration:"none",marginBottom:"20px"}} href="/"><p className={styles.page}>Accueil</p></Link>
            <Link style={{textDecoration:"none",marginBottom:"20px"}} href="/apropos"><p className={styles.page}>À propos</p></Link>
            <Link style={{textDecoration:"none",marginBottom:"20px"}} href="/Services"><p className={styles.page}>Nos services</p></Link>
            <Link style={{textDecoration:"none",marginBottom:"20px"}} href="/Contact"><p className={styles.page}>Contact</p></Link>
          </div>
        </div>


        <div className={styles.contact}>

            <div className={styles.imageContainer}>
            </div>
            
            <div className={styles.contactContainer}>
        <form ref={form} onSubmit={sendEmail}> 
      <input value={name} onChange={(e)=> setName(e.target.value)} placeholder='Votre nom' type="text" name="user_name" required/>
      <input value={email} onChange={(e)=> setEmail(e.target.value)} placeholder='Votre email' type="email" name="user_email" required/>
      <input value={phone} onChange={(e)=> setPhone(e.target.value)} placeholder='Votre Numéro de téléphone' type="text" name="user_phone" required/>
      <textarea value={message} onChange={(e)=> setMessage(e.target.value)} placeholder='Message...' name="message" required/>
      <input type="submit" value="Envoyer" />
      {sendit && <div><p>Votre message a éte bien envoyer</p></div>}
    </form>
            </div>
        </div>




      </main>
    </>
  )
}
