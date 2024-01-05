import React from 'react'
import styles from "./CharInfo.module.scss"
import useWindowWidth from '@/app/hooks/useWindowWidth'
type Props={
    title:string,
    value:string
}
const CharInfo = (props:Props) => {
  const width = useWindowWidth();
  const mobile = width >0 && width<768;
  const tablet = width >= 768 && width <= 1024;
  const desktop = width > 1024;
    const {title,value}=props;
  return (
     <div className={styles.main}>
        <p className={styles.title}>{title}</p>
        <p className={styles.value}> {value}</p>
    </div>
    
    )
  
}

export default CharInfo