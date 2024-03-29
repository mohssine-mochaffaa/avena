import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import Footer from '@/components/Footer'


export default function Home() {
  const [menu,setMenu] = useState("none")
  const [isPageLoaded, setIsPageLoaded] = useState(false);


  const handleMenu =()=>{
    if (menu == "none") {
      setMenu("inline")
    }else{
      setMenu("none")
    }
  }
  



  useEffect(() => {
    const checkPageLoaded = () => {
      if (document.readyState === 'complete') {
        setIsPageLoaded(false);
      } else {
        window.requestAnimationFrame(checkPageLoaded);
        setIsPageLoaded(true)
      }
    };

    window.requestAnimationFrame(checkPageLoaded);

    return () => {
      // Cleanup any pending animation frame request when the component unmounts
      window.cancelAnimationFrame(checkPageLoaded);
    };
  }, []);




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
        {isPageLoaded && (
          <div className={styles.splash}>
          <Image className={styles.Image} width={100} height={100} src="/assets/logoW.jpeg"/>
          </div>
        )}
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


        <div id="nettoyageId" className={styles.main22}>
        <video loop autoPlay muted className={styles.video}>
        <source src="/assets/vid.mp4" />
      </video>
          <div className={styles.mainbox}>
            <div>
            <h1 className={styles.tilteApropre}>GROUPE &nbsp;AVENA SERVICES</h1> 
            <p className={styles.minitilteApropre}>Créez un environnement de travail propre et sain adapté à vos besoins.</p>
            </div>
          </div>
        </div>
        
        <div className={styles.secssion1}>
          <div className={styles.sec1Container}>
            <div className={styles.s1}>
              <img style={{width:"100%",minWidth:"200px",marginBottom:"0px",marginTop:"-60px"}} src="/assets/shake.jpg"/>
            </div>
            <div className={styles.s2}>
              <h1 style={{color:"#082680",fontWeight:"bold",marginBottom:"10px"}}>Le choix d'un partenaire fiable</h1>
              <p style={{fontWeight:500,color:"#4C4C4C",lineHeight:"25px"}}>Groupe AVENA Services est une société spécialisée dans le nettoyage, sécurité, gardiennage, l'entretien des locaux professionnels et particuliers et l'entretien des espaces verts. Nous proposons des services adaptés à toutes vos contraintes et spécificités dans vos locaux professionnels. Notre engagement est de vous offrir une prestation irréprochable à moindre prix.</p>
              
            </div>
          </div>
        </div>
 
        <div id='securityId' className={styles.main25}>
          <div className={styles.mainbox}>
            <div>
            <h1 className={styles.tilteApropre}>Solutions de sécurité personnalisées pour répondre à vos besoins uniques</h1>  
            </div>
          </div>
        </div>


        <div className={styles.secssion2}>
          <div className={styles.cards4}>
            <h1>Engagements</h1>
            <center>
            <div className={styles.cards4Container}>
              <div className={styles.card4}>
              <img src="/assets/thumbs-up.png" alt="" />
              <h1>Clients satisfaits</h1>
              </div>

              <div className={styles.card4}>
              <img src="/assets/calendar.png" alt="" />
              <h1>Horaires sur mesure</h1>
              </div>

              <div className={styles.card4}>
              <img src="/assets/cleaning.png" alt="" />
              <h1>Produits de pointe</h1>
              </div>

              <div className={styles.card4}>
              <img src="/assets/clean.png" alt="" />
              <h1>Qualité garantie</h1>
              </div>
            </div>
            </center>
          </div>

        </div>

        <div id='gardenId' className={styles.main255}>
          <div className={styles.mainbox}>
            <div>
            <h1 className={styles.tilteApropre}>De la conception à la mise en œuvre, nous travaillerons en étroite collaboration avec vous pour donner vie à votre vision.</h1>
            </div>
          </div>
        </div>

<Footer/>
      </main> 
    </>
  )
}
