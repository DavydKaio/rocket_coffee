import Image from 'next/image'

import styles from './Main.module.css'

import blur1 from '../../../public/assets/imgs/blur-1.png'
import image from '../../../public/assets/imgs/rocket-coffee.png'

export default function Main(props) {
  return (
    <div className={styles.main}>
      <h1 className={styles.title}>Great Coffe</h1>
      <h1 className={styles.titleStroke}>{props.text}</h1>
      <Image src={image} alt='rocket coffee' objectFit={'contain'} />
    </div>
  )
};
