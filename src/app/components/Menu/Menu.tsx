import React from 'react'
import styles from "./Menu.module.scss"
import useWindowWidth from "../../hooks/useWindowWidth";
import { ContentType } from '@/app/interfaces';

type Props={
  setBodyContent:  React.Dispatch<React.SetStateAction<ContentType>>;
}
const Menu = (props:Props) => {
  const {setBodyContent}=props;
  const width = useWindowWidth();
  const mobile = width >0 && width<768;
  return (
   mobile&& <div className={styles.main}>
        <div className={styles.menuItem}><p onClick={()=>{
          setBodyContent("overview")
        }}>OVERVIEW</p></div>
        <div  className={styles.menuItem}><p onClick={()=>{
          setBodyContent("structure")
        }}>STRUCTURE</p></div>
        <div  className={styles.menuItem}><p onClick={()=>{
          setBodyContent("geology")
        }}>SURFACE</p></div>
    </div>
  )
}

export default Menu