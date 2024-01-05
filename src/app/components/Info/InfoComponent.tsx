import React from "react";
import styles from "./InfoComponent.module.scss";
import arrow from "../../../../public/assets/external-link-square.svg";
import Image from "next/image";
import useWindowWidth from "@/app/hooks/useWindowWidth";
import CharInfo from "../Characteristics/CharInfo";
import { ContentType, Planet } from "@/app/interfaces";
import InfoTablet from "../Characteristics/InfoTablet";
import Link from "next/link";
type Props = {
  header: string;
  content: string ;
  source: string;
  data: Planet[];
  setBodyContent:  React.Dispatch<React.SetStateAction<ContentType>>;
};
const InfoComponent = (props: Props) => {
  const { header, content, source, data, setBodyContent } = props;

  const width = useWindowWidth();
  const mobile = width > 0 && width < 768;
  const tablet = width >= 768 && width <= 1024;
  const desktop = width > 1024;
  return (
    (mobile && (
      <div className={styles.main}>
        <p className={styles.header}>{header}</p>
        <p className={styles.content}>{content}</p>
        <div className={styles.source}>
          Source:
          <a href={source} target="_blank">
            Wikpedia
          </a>
          <Image src={arrow} alt="" />
        </div>
      </div>
    )) ||
    ((tablet || desktop) && (
      <div className={styles.tablet}>
        <div className={styles.main} style={{ alignItems: "baseline" }}>
          <p className={styles.header}>{header}</p>
          <p className={styles.content}>{content}</p>
          <div className={styles.source}>
            Source:
            <a href={source} target="_blank">
              Wikpedia
            </a>
            <Image src={arrow} alt="" />
          </div>
        </div>
        <div className={styles.menu}>
          {Data.map((item, key) => {
             return (
                  <InfoTablet name={item.name} value={item.value} key={key} setBodyContent={setBodyContent}/>
             );
          })}
        </div>
      </div>
    ))
  );
};

export default InfoComponent;

const Data = [
  {
    name: "01",
    value: "overview",
  },
  {
    name: "02",
    value: "Internal Structure",
  },
  {
    name: "03",
    value: "Surface Geology",
  },
];
