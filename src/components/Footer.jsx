import React from 'react'
import styles from '@/styles/Home.module.css'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className={styles.footer}>
        <div className={styles.footerSections}>
        <div className={styles.footerSec}>
        <Image style={{borderRadius:"100px"}} width={110} height={110} src="/assets/logoW.jpeg" />
        <p>Groupe AVENA Services est une société spécialisée dans le nettoyage, sécurité, gardiennage, l'entretien des locaux professionnels et particuliers et l'entretien des espaces verts. Nous proposons des services adaptés à toutes vos contraintes et spécificités dans vos locaux professionnels. Notre engagement est de vous offrir une prestation irréprochable à moindre prix.</p>
        </div>
        <div className={styles.footerSec}>
            <h3>Restons connecter</h3>
        </div>
        <div className={styles.footerSec}>
        <h3>Contact</h3>
        </div>
        </div>
    </div>
  )
}

export default Footer