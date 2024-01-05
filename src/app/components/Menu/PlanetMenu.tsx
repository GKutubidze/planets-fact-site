import React from 'react'
import styles from "./PlanetMenu.module.scss"
import arrow from "../../../../public/assets/icon-arrow.svg"
import Image from 'next/image'
type Props={
    color:string,
    name:string
}
const PlanetMenu = (props:Props) => {
    const {color,name}=props;
  return (
    <div className={styles.main}>
        <div className={styles.body}>
        <div className={styles.circle} style={{backgroundColor:color}}></div>
        <div className={styles.name}><p>{name}</p></div>
        </div>
        <Image src={arrow} alt='' className={styles.image}/>
    </div>
  )
}

export default PlanetMenu