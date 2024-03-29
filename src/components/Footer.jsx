import React from 'react'
import styles from '@/styles/Home.module.css'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className={styles.footer}>
        <div className={styles.footerSections}>
        <div className={styles.footerSec}>
        <Image style={{borderRadius:"100px",border:"1px solid white"}} width={110} height={110} src="/assets/logoB.jpeg" />
        <p>Groupe AVENA Services est une société spécialisée dans le nettoyage, sécurité, gardiennage, l'entretien des locaux professionnels et particuliers et l'entretien des espaces verts. Nous proposons des services adaptés à toutes vos contraintes et spécificités dans vos locaux professionnels. Notre engagement est de vous offrir une prestation irréprochable à moindre prix.</p>
        </div>
        <div style={{display:"none"}} className={styles.footerSec}>
            <h3>Restons connecter</h3>
        </div> 
        <div className={styles.footerSec2}><br /><br /><br /><br />
        <h3>Contact</h3>
        <div className={styles.footerSec3}><img className={styles.imgF} src="/assets/mapF.png" alt="" /><p>Appt 01, Lotissement Chamesse Al Madina N°26, Benslimane 13000</p></div>
        <div className={styles.footerSec3}><img className={styles.imgF} src="/assets/callF.png" alt="" /><p>+212 6 59 85 35 33</p></div>
        <div className={styles.footerSec3}><img className={styles.imgF} src="/assets/emailF.png" alt="" /><p>avenaservices@gmail.com</p></div>
        <div className={styles.footerSec3}><img className={styles.imgF} src="/assets/calendarF.png" alt="" /><p>Heures de bureau: 08h30 -  18h00</p></div>

        </div>
        </div><br /><br />
        <div style={{width:"100%"}}>
          <center style={{width:"100%"}}><p style={{color:"white",textAlign:"center"}}>© 2023 GROUPE AVENA SERVICES . All Rights Reserved.</p></center>
        </div>
    </div>
  )
}

export default Footer
