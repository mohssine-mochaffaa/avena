import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useState } from 'react'
import Link from 'next/link'
import Footer from '@/components/Footer'


export default function Apropos() {
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
        <title>Groupe avena</title>
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

        <div id='securityId' className={styles.main225}>
          <div className={styles.mainbox}>
            <div>
            <h1 className={styles.tilteApropre}>Presentation</h1>
            </div>
          </div>
        </div>
        <div className={styles.secssion1}>
          <div className={styles.sec11Container}>
          <div className={styles.s11}>
              <img style={{width:"100%",minWidth:"150px",marginBottom:"0px"}} src="/assets/logoW.jpeg"/>
            </div>
            <div className={styles.s2}>
              <p style={{fontWeight:500,color:"#4C4C4C",fontSize:"17px",lineHeight:"25px"}}>Groupe Avena Services est votre partenaire fiable pour les services de nettoyage et de sécurité. Nous savons que le maintien d'un environnement propre et sécurisé est essentiel au bien-être de votre entreprise ou de votre espace résidentiel. Grâce à notre expertise professionnelle et à notre engagement en faveur de l'excellence, nous proposons des solutions complètes adaptées à vos besoins spécifiques en matière de nettoyage et de sécurité. Découvrez la gamme de services que nous proposons et profitez de la tranquillité d'esprit que procure un environnement propre et sécurisé.
La satisfaction du client est au cœur de tout ce que nous faisons. Nous nous efforçons de dépasser vos attentes en fournissant des services de nettoyage et de sécurité de qualité supérieure, adaptés à vos besoins spécifiques. Notre équipe d'assistance à la clientèle est à votre disposition pour répondre à toutes vos questions ou préoccupations, afin de vous garantir une expérience sans faille tout au long de notre partenariat.</p>
              <br />
              <p style={{fontWeight:500,color:"#4C4C4C",fontSize:"17px",lineHeight:"25px"}}>Choisissez Groupe Avena Services pour vos besoins en matière de nettoyage et de sécurité et profitez des avantages d'un environnement propre, sûr et bien entretenu. Contactez-nous dès aujourd'hui pour discuter de vos besoins spécifiques et laissez-nous créer une solution personnalisée qui réponde à vos besoins. Ensemble, nous ferons briller votre espace et en assurerons la sécurité.</p>
            </div>
            <div className={styles.s1}>
              <img style={{width:"100%",minWidth:"150px",marginBottom:"0px"}} src="/assets/logoW.jpeg"/>
            </div>
          </div>
        </div>

        <div id='securityId' className={styles.main225}>
          <div className={styles.mainbox}>
            <div>
            <h1 className={styles.tilteApropre}>Nos valeurs</h1>
            </div>
          </div>
        </div>

        <div className={styles.valeurs}>
          <div className={styles.valeursContainer}>
            <div className={styles.val}>
              <div className={styles.topVal}>
                <center><div style={{backgroundColor: "#16389c"}} className={styles.valLogo}></div></center>
                <center><p>Qualité</p></center>
              </div>
              <div className={styles.mainVal}>
                <p>Nous donnons la priorité à la fourniture de services de haute qualité. Cela inclut des procédures de nettoyage approfondies, un personnel de sécurité bien formé et notre préoccupation pour le souci du détail. Des programmes de formation de notre personnel, des mesures de contrôle de la qualité de l'entreprise pour vous assurer de notre engagement en faveur de l'excellence.</p>
              </div>
            </div>

            <div className={styles.val}>
              <div className={styles.topVal}> 
              <center><div style={{backgroundColor: "#ff4afc"}} className={styles.valLogo}></div></center>
                <center><p>Confidentialité </p></center>
              </div>
              <div className={styles.mainVal}>
                <p>Nous donnons la priorité à la fourniture de services de haute qualité. Cela inclut des procédures de nettoyage approfondies, un personnel de sécurité bien formé et notre préoccupation pour le souci du détail. Des programmes de formation de notre personnel, des mesures de contrôle de la qualité de l'entreprise pour vous assurer de notre engagement en faveur de l'excellence.</p>
              </div> 
            </div>

            <div className={styles.val}>
              <div className={styles.topVal}>
              <center><div style={{backgroundColor: "#7430e8"}} className={styles.valLogo}></div></center>
                <center><p>Meilleurs services à moindre prix </p></center>
              </div>
              <div className={styles.mainVal}>
                <p>Nous donnons la priorité à la fourniture de services de haute qualité. Cela inclut des procédures de nettoyage approfondies, un personnel de sécurité bien formé et notre préoccupation pour le souci du détail. Des programmes de formation de notre personnel, des mesures de contrôle de la qualité de l'entreprise pour vous assurer de notre engagement en faveur de l'excellence.</p>
              </div>
            </div>

            <div className={styles.val}>
              <div className={styles.topVal}>
              <center><div style={{backgroundColor: "#16a9fe"}} className={styles.valLogo}></div></center>
                <center><p>Un excellent service à la clientèle</p></center>
              </div>
              <div className={styles.mainVal}>
                <p>Nous donnons la priorité à la fourniture de services de haute qualité. Cela inclut des procédures de nettoyage approfondies, un personnel de sécurité bien formé et notre préoccupation pour le souci du détail. Des programmes de formation de notre personnel, des mesures de contrôle de la qualité de l'entreprise pour vous assurer de notre engagement en faveur de l'excellence.</p>
              </div>
            </div>


          </div>
        </div>
        <Footer/>

      </main>
    </>
  )
}
