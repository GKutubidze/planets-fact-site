import React from 'react'
import styles from "./Characteristics.module.scss"
import CharInfo from './CharInfo';
type Props={
    rotation: string,
    revolution: string,
    radius: string,
    temperature:string,
}
const Characteristics = (props:Props) => {
    const {rotation,revolution,radius,temperature}=props;
    const Data= [{
         title: 'Rotation time',
        value:rotation
    },
  {
    
    title: 'Revolution time',
    value:revolution
  },{
    title: 'Radius',
    value:radius
     
  },
{
   title:  'average temp.',
    value:temperature
}];
  return (
    <div className={styles.main}>

        {Data.map((item,key)=>{
           return <CharInfo  title={item.title} value={item.value} key={key} />
        })}
        

     </div>
  )
}

export default Characteristics