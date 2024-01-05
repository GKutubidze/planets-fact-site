import React from 'react'
import styles from "./MyImage.module.scss"
import { ContentType, Planet } from '@/app/interfaces';
import Image from 'next/image';
import useWindowWidth from '@/app/hooks/useWindowWidth';
type Props= {
    data:Planet | undefined;
    bodyContent: ContentType;
}
function Path(bodyContent:ContentType,data:Planet|undefined){
    let planet:string |undefined="";
    let second:string|undefined=""

    if(bodyContent=="overview"){
        planet = data?.images.planet.substring(1);

    }
    else if(bodyContent=="geology")
    {
         planet = data?.images.geology.substring(1);
         second= data?.images.planet.substring(1);

    }
    else{
         planet = data?.images.internal.substring(1);

    }
    return [planet,second];
}
 

 

// ... Path function and other logic here ...

const MyImage = (props: Props) => {
    const width = useWindowWidth();
    const desktop = width >= 1024;
    const tablet = width < 1024;

    const { data, bodyContent } = props;
    const [path, second] = Path(bodyContent, data);
    const img = data?.images.planet.substring(1);

    if (second !== "" && desktop) {
        return (
            <div className={styles.main}>
                <Image
                    src={second || ""}
                    alt=''
                    width={200}
                    height={200}
                    className={styles.image}
                    priority={true} // Setting priority to true for the second image
                />
                <Image
                    src={path || ""}
                    alt=""
                    width={200}
                    height={200}
                    className={styles.secondImage}
                />
            </div>
        );
    } else if (second === "" && desktop) {
        return (
            <div className={styles.main}>
                <Image
                    src={path || ""}
                    alt=""
                    width={200}
                    height={200}
                    className={styles.image}
                    priority={true} // Setting priority to true for the main image
                />
            </div>
        );
    } else if (tablet) {
        return (
            <div className={styles.main}>
                <Image
                    src={img || ""}
                    alt=''
                    width={200}
                    height={200}
                    className={styles.image}
                    priority={true} // Setting priority to true for the tablet image
                />
            </div>
        );
    }
};

export default MyImage;
