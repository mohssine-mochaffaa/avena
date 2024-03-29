import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useState } from 'react'
import Scroll from 'react-scroll'
import Link from 'next/link'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Services() {
  const [menu,setMenu] = useState("none");

  var ScrollLink = Scroll.Link;


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




        <div style={{display:"none"}} className={styles.main2}>
          <div className={styles.mainbox}>
            <div>
            <h1 className={styles.tilteApropre}>AVENA SERVICES NOTRE MISSION EST VOTRE BIEN ETRE</h1>
            </div>
          </div>
        </div>
        
<br /><br />
        <div className={styles.main3}>
          <div className={styles.main3Container}>
          <center>
            <h1 style={{letterSpacing:"5px",color:"black",fontFamily:"sans-serif",fontWeight:"500"}}>Nous sommes animés par la passion. L'exellence et notre amour pour notre métier.</h1>
          </center>
          </div>  
        </div>

        <div className={styles.services}>
          <div className={styles.service}>
          <div className={styles.imaging}>
          <Image fill src="/assets/grass.jpg" />
          </div>
          <ScrollLink 
        to="jardinage" 
        spy={true} 
        smooth={true} 
        duration={500} 
        className={styles.serviceTest} 
        activeClass='some-active-class'
        offset={-150}>
            <div >  
          <p>Jardinage et entretien des espaces verts</p>
            </div>
            </ScrollLink>
          </div>

          <div className={styles.service}>
          <ScrollLink 
        to="securite" 
        spy={true} 
        smooth={true} 
        duration={500} 
        className={styles.serviceTest2}
        activeClass='some-active-class'
        offset={-150}>
            <div>
        <p>Gardiennage et sécurité</p>
            </div>
            </ScrollLink>
            <div className={styles.imaging}>
          <Image fill src="/assets/camera.jpeg" />
          </div>
          </div>
          <div className={styles.service}>
          <div className={styles.imaging}>
          <Image fill src="/assets/window.jpeg" />
          </div>
          <ScrollLink 
        to="nettoyage" 
        spy={true} 
        smooth={true} 
        duration={500} 
        className={styles.serviceTest3} 
        activeClass='some-active-class'
        offset={-150}>
            <div> 
        <p>Nettoyage et hygiène</p>
            </div>
            </ScrollLink>
          </div>
        </div>
        
        <div className={styles.servicesContainer}>
          <div className={styles.servicesText}>
            <h3 id='jardinage'>Jardinage et entretien des espaces verts</h3>
            <p>Transformez votre espace extérieur en une oasis à couper le souffle grâce à nos services d'aménagement paysager. De la conception à la mise en œuvre, en passant par la planification, nous travaillerons en étroite collaboration avec vous pour donner vie à votre vision. Notre équipe intégrera une variété d'éléments tels que des plantes, des aménagements en dur, des jeux d'eau et des éclairages pour créer un paysage harmonieux et accueillant.</p>
            <div className={styles.images}>
              <div className={styles.imaging2}>
              <Image fill src="/assets/gar1.jpg" />

              </div>
              <div className={styles.imaging2}>
              <Image fill src="/assets/gar2.jpg" />

              </div>
              <div className={styles.imaging2}>
              <Image fill src="/assets/gar3.jpg" />

              </div>
              
            </div>
            <h3 id='securite'>Gardiennage et sécurité</h3>
          <p>Nous comprenons que la sécurité est une priorité absolue pour vous et votre entreprise. C'est pourquoi nous proposons une gamme complète de services de sécurité conçus pour répondre à vos besoins spécifiques, à vos préférences et à votre budget. Que vous ayez besoin de sécurité pour un événement spécial, de protection des cadres ou de sécurité pour votre entreprise ou votre organisation, nous avons ce qu'il vous faut.
Nous nous engageons à fournir des services de sécurité de première qualité aux entreprises, aux organisations et aux particuliers. Notre équipe de professionnels de la sécurité, hautement qualifiés et expérimentés, se consacre à assurer votre sécurité et votre tranquillité d'esprit.</p>
<div className={styles.images}>
<div className={styles.imaging2}>
<Image fill src="/assets/sec1.jpg" />

</div>
<div className={styles.imaging2}>
<Image fill src="/assets/sec2.jpg" />

</div>
<div className={styles.imaging2}>
<Image fill src="/assets/sec3.jpg" />

</div>
             
            </div>
         <h3 id='nettoyage'>Nettoyage et hygiène</h3>
         <p>Notre entreprise de nettoyage est fière de son professionnalisme, de sa fiabilité et de son souci du détail. Nous nous efforçons de dépasser vos attentes en fournissant des services de nettoyage de qualité supérieure qui sont adaptés à vos besoins et préférences uniques. Nous offrons également des options de programmation flexibles, des prix compétitifs et un service exceptionnel.
Nous n'utilisons que les meilleurs produits et équipements de nettoyage pour garantir une efficacité et une sécurité maximales. Nous respectons également des protocoles de nettoyage et des directives de sécurité stricte afin d'éviter toute contamination croisée et de garantir la santé et la sécurité de nos clients et de notre personnel.
Nous comprenons qu'un espace propre et organisé est crucial pour la productivité, la relaxation et le bien-être général. C'est pourquoi nous proposons une gamme complète de services de nettoyage adaptés à vos besoins spécifiques, à vos préférences et à votre budget. Que vous ayez besoin d'un nettoyage en profondeur ponctuel, d'un entretien régulier ou d'un nettoyage pour un événement spécial, nous avons ce qu'il vous faut. </p>
<div className={styles.images}>
  <div className={styles.imaging2}>
<Image fill src="/assets/cl1.jpg" />

</div>
<div className={styles.imaging2}>
<Image fill src="/assets/cl2.jpg" />

</div>
<div className={styles.imaging2}>
<Image fill src="/assets/cl3.jpg" />

</div>
            </div>
          </div>
        </div>
        <br />

        <Footer/>

        </main>
    </>
  )
}
