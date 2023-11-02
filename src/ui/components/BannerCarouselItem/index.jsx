import { Children } from "react";
import styles from "./index.module.css"
const BannerCarouselItem = (props) => {
    return (
        <img className={styles["banner-carousel-item"]} href={props.href}/> 
    )
}

export default BannerCarouselItem;