import React from 'react'
import Header from '../components/Header/Header'
import data from "../../../public/data/data.json";
import PlanetMenu from '../components/Menu/PlanetMenu';
import styles from "./page.module.scss"
import Link from 'next/link';
 const page = () => {
  return (
   <div className={styles.main}>
    <Header data={data}/>
    <div className={styles.container} >
      {Data.map((item,key)=>{
        return(
          <Link href={`http://localhost:3000/planets/${item.name}`} className={styles.link}>
          <PlanetMenu color={item.color} name={item.name} key={key} />
          </Link>
        ) 
      })}
     </div>
   
   </div>
  )
}

export default page

const Data =[
  {
    color:"#DEF4FC",
    name:"mercury"
  },
  {
    color:"#F7CC7F",
    name:"venus"
  },
  {
    color:"#545BFE",
    name:"earth"
  },
  {
    color:"#FF6A45",
    name:"mars"
  },
  {
    color:"#ECAD7A",
    name:"jupiter"
  },
   {
    color:"#FCCB6B",
    name:"saturn"
  },
  {
    color:"#65F0D5",
    name:"uranus"
  },
  {
    color:"#497EFA",
    name:"neptune"
  }
]
