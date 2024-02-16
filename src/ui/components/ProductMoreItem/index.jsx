
import {useState} from 'react'
import styles from "./index.module.css"
const ProductMoreItem = (props) => {
    const [quantity, setQuantity] = useState(1);

    const handleMoreItem = () => {
        
        if(quantity === ""){
            setQuantity(1);
            props.handler(1);
            return
        }
        setQuantity(parseInt(quantity) + 1)
        props.handler(1)
    }

    const handleLessItem = () => {
        if(quantity === ""){
            setQuantity(1);
            props.handler(1);
            return
        }
        if(quantity - 1 >= 1){
            setQuantity(quantity - 1)
            props.handler(-1)
        }
    }


    return (
        <div className={styles["container"]}>
            <p onClick={handleLessItem}>-</p>
            <input className={styles.number} value={quantity} onChange={ (e) => {(e.target.value === ""); setQuantity(e.target.value); props.setQnt(quantity)}}/>
            <p onClick={handleMoreItem}>+</p>
        </div>
    )
}

export default ProductMoreItem;