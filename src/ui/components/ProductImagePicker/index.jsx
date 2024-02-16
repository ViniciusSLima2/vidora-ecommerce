"use client"
import {useRef, useEffect} from 'react'
import styles from "./index.module.css"
const ProductImagePicker = (props) => {
    const mainImg = useRef();
    const handlerImage = (n) => {
        mainImg.current.src = props.images[n];
    }
    console.log(props.image)
    const imageLinks = props.images ? props.images : []
    return (
        <div className={styles["container"]}>
            <img src={imageLinks[0]} alt="Main Product Image" className={styles["main-img"]} ref={mainImg}/>
            <div className={styles["alt-image-container"]}>
                {imageLinks.map((image, index) => {
                    return(<img key={index.toString()} src={image} className={styles["alt-images"]} onClick={() => {handlerImage(index)}}/>)
                })}
            </div>
        </div>
    )
}

export default ProductImagePicker;