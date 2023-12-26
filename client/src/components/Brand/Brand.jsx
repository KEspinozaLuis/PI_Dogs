import React from 'react';
import { BsGithub, BsLinkedin } from "react-icons/bs";
import styles from './brand.module.css'


const Brand = () => {
  return (
    <div className={styles.brand}>
        <div className={styles.social}>
            <a href="https://github.com/KEspinozaLuis" target="_blank"><BsGithub/></a>
            <a href="https://www.linkedin.com/in/keny-espinoza-luis-45b8b5193/" target="_blank"><BsLinkedin/></a>
        </div>
        <p className={styles.name}>KEL</p>
        <span className={styles.line}></span>
    </div>
  )
}

export default Brand