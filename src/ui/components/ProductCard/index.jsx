
import {useRef, useEffect} from 'react'
import styles from "./index.module.css"
const ProductCard = (props) => {
    
    return (
        <div className={styles["container"]}>
            <img src={"/" + props.imgSrc} alt={props.imgAlt}/>

            <div className={styles["description-container"]}>
                <p className={styles["title"]}>{props.title}</p>
                <p className={styles["price"]}>R$ {props.price}</p>
            </div>
        </div>
    )
}

export default ProductCard;