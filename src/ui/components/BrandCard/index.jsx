import styles from "./index.module.css"
import Link from "next/link";
const BrandCard = (props) => {
    return (
        <Link className={styles["card-container"]} href={props.hrefLink}>
            <img src={props.srcImg} alt={props.imgAlt} />
            <p className={props.fontColor ? styles[props.fontColor] : styles["basic"]}></p>
        </Link>
    )
}

export default BrandCard;