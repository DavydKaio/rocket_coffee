import Image from 'next/image'
import { useEffect, useState } from 'react';

import logo1 from '../../../public/assets/logos/logo-desktop.svg'
import logo2 from '../../../public/assets/logos/logo-mobile.svg'

import styles from './Header.module.css'

export default function Header(props) {
  console.log(props.windowSize)
  return (
    <header className={styles.header}>
      <a href="#" className={styles.logo}>
        <Image
          src={props.windowSize > 428 ? logo1 : logo2}
          alt='logo'
          width={50}
          height={50}
          layout='fixed'
        />
      </a>
      <nav>
        <ul className={styles.nav_list}>
          <li className={styles.nav_item}><a href="#">Home</a></li>
          <li className={styles.nav_item}><a href="#">Menu</a></li>
          <li className={styles.nav_item}><a href="#">Recompensas</a></li>
          <li className={styles.nav_item}><a href="#">Gift Cards</a></li>
          <li className={styles.nav_item}><a href="#">Lojas</a></li>
        </ul>
      </nav>
      <button className={styles.button}>PEGAR MEU CAFÉ</button>
    </header>
  )
};
