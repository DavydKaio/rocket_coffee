import Image from 'next/image'

import styles from '../styles/Home.module.css'

import blur1 from '../../public/assets/imgs/blur-1.png'
import blur2 from '../../public/assets/imgs/blur-2.png'

import Header from '../components/Header/Header'
import Main from '../components/Main/Main'
import React, { useEffect, useState } from 'react'

const useViewPort = () => {
  const [ width, setWidth ] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return { width }
}

export default function Home(props) {
  const { width } = useViewPort();

  return (
    <div>
      <Header windowSize={width}/>
      <Main text="<Great Code/>" />
      <div className={styles.blur1}>
        <Image placeholder={'blur'} src={blur1} alt='blur1' layout={'intrinsic'} />
      </div>
      <div className={styles.blur2}>
        <Image placeholder={'blur'} src={blur2} alt='blur2' layout={'intrinsic'} />
      </div>
    </div>
  )
};
