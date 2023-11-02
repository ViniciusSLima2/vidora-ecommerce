import { Children } from "react";
import styles from "./index.module.css"
const BenefitsInfoCard = (props) => {
    return (
        <div className={styles["card-container"]}>
            <img src={props.imgSrc} alt="Card Image"/>
            <div className={styles["text-container"]}>
                <p className={styles["title"]}>{props.title}</p>
                <p className={styles["description"]}>{props.description}</p>
            </div>
        </div>
    )
}

export default BenefitsInfoCard;