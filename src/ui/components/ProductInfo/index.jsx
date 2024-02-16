
import { useRef, useEffect } from 'react'
import styles from "./index.module.css"
import Breadcrumb from '../Breadcrumb';
import ProductMoreItem from '../ProductMoreItem';
import Link from 'next/link';
const ProductInfo = (props) => {
    let quantity = 1;
    let lastSize;
    const sizesContainer = useRef();
    const handleChangeQuantity = (n) => {
        quantity += n
    }

    const setQnt = (n) => {
        quantity = n;
    }


    useEffect(()=>{
        sizesContainer.current.addEventListener("click", (e) => {
            if(lastSize)
                lastSize.style.backgroundColor = "#FFF";
                
            lastSize = e.target;
            e.target.style.backgroundColor = "rgba(0, 0, 0, 0.3)";
        })
    }, [])


    return (
        <div className={styles["container"]}>
            <Breadcrumb></Breadcrumb>

            <div className={styles["title-container"]}>
                <p className={styles["title"]}>
                    {props.product?.title}
                </p>
                <p className={styles["price"]}>
                    ${props.product?.price}
                </p>
            </div>

            <div className={styles["add-cart-container"]}>
                <ProductMoreItem handler={handleChangeQuantity} setQnt={setQnt}></ProductMoreItem>

                <button>ADD TO CARD</button>
            </div>


            <div className={styles["categories"]}>
                <p>Categories: {props.itemCategories?.map((category, index) => {
                    return (<Link key={index.toString()} href={category}>{category}</Link>)
                })}</p>
            </div>

            <div className={styles["sizes-container"]} ref={sizesContainer}>
                <p>Product Size</p>
                <div className={styles["sizes"]}>
                    <p>28</p>
                    <p>29</p>
                    <p>30</p>
                    <p>31</p>
                    <p>32</p>
                    <p>33</p>
                    <p>34</p>
                    <p>35</p>
                    <p>36</p>
                </div>
            </div>

            <button className={styles["buy-btn"]}>Buy now</button>
        </div>
    )
}

export default ProductInfo;