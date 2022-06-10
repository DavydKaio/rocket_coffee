import react from 'react'
import Image from 'next/image'

import logo from '../../../public/assets/logos/logo-desktop.svg'

import styles from './Header.module.css'

export default function Header(props) {
  return (
    <header className={styles.header}>
      <a href="#">
        <Image
          src={logo}
          alt='logo'
          width={50}
          height={50}
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
