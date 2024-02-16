
import Link from 'next/link'
import {useRef, useEffect} from 'react'
import styles from "./index.module.css"
const ProductCard = (props) => {
    const cardInfo = props.shoesData 
    return (
        <Link className={styles["container"]} href={"/products/" + cardInfo?.id}>
            <img src={cardInfo?.imgLinks[0]} alt={cardInfo?.imgAlt}/>

            <div className={styles["description-container"]}>
                <p className={styles["title"]}>{cardInfo?.title}</p>
                <p className={styles["price"]}>R$ {cardInfo?.price}</p>
            </div>
        </Link>
    )
}

export default ProductCard;