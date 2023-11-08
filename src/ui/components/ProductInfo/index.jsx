
import { useRef, useEffect } from 'react'
import styles from "./index.module.css"
import Breadcrumb from '../Breadcrumb';
import ProductMoreItem from '../ProductMoreItem';
import Link from 'next/link';
const ProductInfo = (props) => {
    let quantity = 1;

    const handleChangeQuantity = (n) => {
        quantity += n
    }

    const setQnt = (n) => {
        quantity = n;
    }

    return (
        <div className={styles["container"]}>
            <div className={styles["title-container"]}>
                <p className={styles["title"]}>
                    {props.product.title}
                </p>
                <p className={styles["price"]}>
                    ${props.product.price}
                </p>
            </div>

            <p className={styles["description"]}>
                {props.product.description}
            </p>

            <div className={styles["add-cart-container"]}>
                <ProductMoreItem handler={handleChangeQuantity} setQnt={setQnt}></ProductMoreItem>

                <button>ADD TO CARD</button>
            </div>


            <div className={styles["categories"]}>
                <p>Categories: {props.itemCategories?.map((category, index) => {
                    return (<Link key={index.toString()} href={category}>{category}</Link>)
                })}</p>
            </div>
        </div>
    )
}

export default ProductInfo;