import ProductCard from "@/ui/components/ProductCard"
import styles from "./index.module.css"
import {useRef, useEffect} from 'react';
const Collections = (props) => {
    const categories = useRef();
    const collections = useRef();
    let lastCollection = 0;
    const setCollection = (n) => {
        categories.current.children[n].classList.add(styles["active"])
        categories.current.children[lastCollection].classList.remove(styles["active"])
        translateContainer(n);
        lastCollection = n;
    } 

    const translateContainer = (n) => {
        collections.current.style.transform = "translate(-" + window.innerWidth * n +  "px";
    }
    useEffect(() => {
        categories.current.children[0].classList.add(styles["active"])
    })
    return (
        <section className={styles.container}>
            <div className={styles["categories"]} ref={categories}>
                <p onClick={() => {setCollection(0)}}>New Arrivals</p>
                <p onClick={() => {setCollection(1)}}>Best Seller</p>
                <p onClick={() => {setCollection(2)}}>Most Popular</p>
            </div>

            <div className={styles["collections-wrapper"]}>
                <div className={styles["collections"]} ref={collections}> 
                    <div className={styles["collection"]}>
                        <ProductCard imgSrc="shoes1.jpeg" title={"Tenis nike"} price="399.99" imgAlt={"tenis"}></ProductCard>
                        <ProductCard imgSrc="shoes1.jpeg" title={"Tenis nike"} price="399.99" imgAlt={"tenis"}></ProductCard>
                        <ProductCard imgSrc="shoes1.jpeg" title={"Tenis nike"} price="399.99" imgAlt={"tenis"}></ProductCard>
                        <ProductCard imgSrc="shoes1.jpeg" title={"Tenis nike"} price="399.99" imgAlt={"tenis"}></ProductCard>
                        <ProductCard imgSrc="shoes1.jpeg" title={"Tenis nike"} price="399.99" imgAlt={"tenis"}></ProductCard>
                        <ProductCard imgSrc="shoes1.jpeg" title={"Tenis nike"} price="399.99" imgAlt={"tenis"}></ProductCard>
                        <ProductCard imgSrc="shoes1.jpeg" title={"Tenis nike"} price="399.99" imgAlt={"tenis"}></ProductCard>
                        <ProductCard imgSrc="shoes1.jpeg" title={"Tenis nike"} price="399.99" imgAlt={"tenis"}></ProductCard>
                        <ProductCard imgSrc="shoes1.jpeg" title={"Tenis nike"} price="399.99" imgAlt={"tenis"}></ProductCard>
                        <ProductCard imgSrc="shoes1.jpeg" title={"Tenis nike"} price="399.99" imgAlt={"tenis"}></ProductCard>
                        <ProductCard imgSrc="shoes1.jpeg" title={"Tenis nike"} price="399.99" imgAlt={"tenis"}></ProductCard>
                    </div>

                    <div className={styles["collection"]}>
                        <ProductCard imgSrc="adidas-shoes1.webp" title={"Tenis adidas"} price="488.99" imgAlt={"tenis"}></ProductCard>
                        <ProductCard imgSrc="adidas-shoes1.webp" title={"Tenis adidas"} price="488.99" imgAlt={"tenis"}></ProductCard>
                        <ProductCard imgSrc="adidas-shoes1.webp" title={"Tenis adidas"} price="488.99" imgAlt={"tenis"}></ProductCard>
                        <ProductCard imgSrc="adidas-shoes1.webp" title={"Tenis adidas"} price="488.99" imgAlt={"tenis"}></ProductCard>
                        <ProductCard imgSrc="adidas-shoes1.webp" title={"Tenis adidas"} price="488.99" imgAlt={"tenis"}></ProductCard>
                        <ProductCard imgSrc="adidas-shoes1.webp" title={"Tenis adidas"} price="488.99" imgAlt={"tenis"}></ProductCard>
                        <ProductCard imgSrc="adidas-shoes1.webp" title={"Tenis adidas"} price="488.99" imgAlt={"tenis"}></ProductCard>
                        <ProductCard imgSrc="adidas-shoes1.webp" title={"Tenis adidas"} price="488.99" imgAlt={"tenis"}></ProductCard>
                        <ProductCard imgSrc="adidas-shoes1.webp" title={"Tenis adidas"} price="488.99" imgAlt={"tenis"}></ProductCard>
                        <ProductCard imgSrc="adidas-shoes1.webp" title={"Tenis adidas"} price="488.99" imgAlt={"tenis"}></ProductCard>
                        <ProductCard imgSrc="adidas-shoes1.webp" title={"Tenis adidas"} price="488.99" imgAlt={"tenis"}></ProductCard>
                    </div>

                    <div className={styles["collection"]}>
                        <ProductCard imgSrc="shoes1.jpeg" title={"Tenis nike"} price="399.99" imgAlt={"tenis"}></ProductCard>
                        <ProductCard imgSrc="shoes1.jpeg" title={"Tenis nike"} price="399.99" imgAlt={"tenis"}></ProductCard>
                        <ProductCard imgSrc="shoes1.jpeg" title={"Tenis nike"} price="399.99" imgAlt={"tenis"}></ProductCard>
                        <ProductCard imgSrc="shoes1.jpeg" title={"Tenis nike"} price="399.99" imgAlt={"tenis"}></ProductCard>
                        <ProductCard imgSrc="shoes1.jpeg" title={"Tenis nike"} price="399.99" imgAlt={"tenis"}></ProductCard>
                        <ProductCard imgSrc="shoes1.jpeg" title={"Tenis nike"} price="399.99" imgAlt={"tenis"}></ProductCard>
                        <ProductCard imgSrc="shoes1.jpeg" title={"Tenis nike"} price="399.99" imgAlt={"tenis"}></ProductCard>
                        <ProductCard imgSrc="shoes1.jpeg" title={"Tenis nike"} price="399.99" imgAlt={"tenis"}></ProductCard>
                        <ProductCard imgSrc="shoes1.jpeg" title={"Tenis nike"} price="399.99" imgAlt={"tenis"}></ProductCard>
                        <ProductCard imgSrc="shoes1.jpeg" title={"Tenis nike"} price="399.99" imgAlt={"tenis"}></ProductCard>
                    </div>
                </div>
            </div>
            
        </section>
    )
}

export default Collections