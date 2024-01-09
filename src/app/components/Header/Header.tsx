"use client";
import React from "react";
import styles from "./Header.module.scss";
import Image from "next/image";
import menuIcon from "../../../../public/assets/icon-menu.svg";
import Link from "next/link";
import useWindowWidth from "../../hooks/useWindowWidth";
import { Planet } from "@/app/interfaces";
type Props ={
  data:Planet[];
}
const Header = (props:Props) => {
  const {data}=props;
  const width = useWindowWidth();
  const mobile = width >0 && width<768;
  const tablet = width >= 768 && width <= 1024;
  const desktop = width > 1024;
  const URL=process.env.URL;
  if (mobile) {
    return (
      <div className={styles.main}>
        <p>THE PLANETS</p>
        <Link href={`/planets`}>
          <Image src={menuIcon} alt="" className={styles.menu} />
        </Link>
      </div>
    );
  } else if (tablet||desktop) {
    return(
    <div className={styles.mainTablet}>
      <p className={styles.planetTitle} >THE PLANETS</p>
      <div className={styles.menucontainer}>
         {data.map((item,key)=>{
          return (
          <Link href={`/planets/${item.name}`} className={styles.link}><p key={key}>{item.name}</p></Link>
          )
         })}
      </div>
    </div>
    )
  } else if (desktop) {
  }
};

export default Header;

 

 
