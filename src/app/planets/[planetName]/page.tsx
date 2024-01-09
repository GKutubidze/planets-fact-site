"use client";
import Header from "@/app/components/Header/Header"
import Menu from "@/app/components/Menu/Menu"
import React, { useState } from "react"
import data from "../../../../public/data/data.json"
import InfoComponent from "@/app/components/Info/InfoComponent"
import Characteristics from "@/app/components/Characteristics/Characteristics"
import styles from "./page.module.scss"
import { ContentType, Planet } from "@/app/interfaces";
import MyImage from "@/app/components/MyImage/MyImage";
import dynamic from 'next/dynamic';


const PlanetInfo = ({ params }: any) => {
  

  const [bodyContent, setBodyContent] = useState<ContentType >("overview");
  const temp:(Planet |undefined)= data.find((item) => {
    return item.name.toLocaleLowerCase() === params.planetName.toLowerCase();
  });
 
  
  return (
    <div>
      <Header  data={data}/>
      <Menu setBodyContent={setBodyContent} />
      <div className={styles.body}>
        {/* <Image
          src={planet || ""}
          alt=""
          width={200}
          height={200}
          className={styles.image}
        /> */}
        <MyImage data={temp} bodyContent={bodyContent}/>
        <InfoComponent
          data={data}
          header={temp?.name || ""}
           content={(temp && temp[bodyContent]?.content) || ""}
          source={(temp && temp[bodyContent]?.source) || ""}
          setBodyContent={setBodyContent}
        />
 </div>
        <Characteristics
          rotation={temp?.rotation || ""}
          revolution={temp?.revolution || ""}
          radius={temp?.radius || ""}
          temperature={temp?.temperature || ""}
        />
     
    </div>
  );
};

export default PlanetInfo;



