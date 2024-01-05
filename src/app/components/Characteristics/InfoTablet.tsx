import React from 'react'
import styles from "./InfotTablet.module.scss"
import { ContentType } from '@/app/interfaces'
type Props={
    name:string,
    value:string,
    setBodyContent:  React.Dispatch<React.SetStateAction<ContentType>>;

}
 const InfoTablet = (props:Props) => {
  function handleChange(){
    if(value.toLocaleLowerCase()==="overview"){
      setBodyContent("overview");
      
    }
    else if(value.toLocaleLowerCase().split(" ")[1]==="geology") {
      setBodyContent("geology");
    }
    else if(value.toLocaleLowerCase().split(" ")[1]==="structure") {
      setBodyContent("structure");
    }
    
  }
    const {name,value,setBodyContent}=props;
   return (
    <div className={styles.main} onClick={()=>{
      handleChange();
    }}>
        <div className={styles.name}>{name}</div>
        <div className={styles.value}>{value}</div>
    </div>
  )
}

export default InfoTablet