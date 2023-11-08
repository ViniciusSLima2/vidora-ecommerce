
import {useRef, useEffect} from 'react'
import styles from "./index.module.css"
const ProductImagePicker = (props) => {
    const mainImg = useRef();
    const handlerImage = (n) => {
        console.log("n")
        mainImg.current.src = props.images[n]["src"];
    }
    return (
        <div className={styles["container"]}>
            <img src={props.images[0]["src"]} alt="Main Product Image" className={styles["main-img"]} ref={mainImg}/>
            <div className={styles["alt-image-container"]}>
                {props.images?.map((image, index) => {
                    return(<img key={index.toString()} src={image.src} className={styles["alt-images"]} onClick={() => {handlerImage(index)}}/>)
                })}
            </div>
        </div>
    )
}

export default ProductImagePicker;