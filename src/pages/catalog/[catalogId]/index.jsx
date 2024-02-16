
import styles from './index.module.css'
import { useRouter } from 'next/router'
import ProductCard from "@/ui/components/ProductCard";
import CatalogFilter from "@/ui/components/CatalogFilter";
import PriceSlider from "@/ui/components/PriceSlider";
import Checkbox from "@/ui/components/Checkbox";
import { useEffect } from "react";
import { signal } from '@preact/signals-react';

const name = signal([])
const CatalogId = (props) => {
    const router = useRouter()
    
    
    return (
        <div className={styles["container"]}>
            <div className={styles["hero-banner"]}>
                <img src="/masculine-catalog-banner.jpg" alt="shoes" />
            </div>

            <div className={styles["catalog-container"]}>
                <div className={styles["header"]}>
                    <p>name props</p>
                    <div className={styles["order-by-container"]}>
                        <p>Order by:</p>
                        <select>
                            <option value="asc">Ascending Price</option>
                            <option value="desc">Descending Price</option>
                            <option value="relevant">Relevant</option>
                        </select>
                    </div>
                </div>

                <div className={styles["catalog-body"]}>
                    <div className={styles["catalog-filter-side"]}>
                        <div className={styles["categories-filter"]}>
                            <CatalogFilter title={"Brands"}>
                                <div className={styles["categories"]}>
                                    <Checkbox name={"Nike"}></Checkbox>
                                    <Checkbox name={"Adidas"}></Checkbox>
                                    <Checkbox name={"Puma"}></Checkbox>
                                    <Checkbox name={"Reserva"}></Checkbox>
                                    <Checkbox name={"Vans"}></Checkbox>
                                    <Checkbox name={"Mizuno"}></Checkbox>
                                </div>
                            </CatalogFilter>
                        </div>

                        <div className={styles["categories-filter"]}>
                            <CatalogFilter title={"Prices"}>
                                <PriceSlider></PriceSlider>
                            </CatalogFilter>
                        </div>

                    </div>

                    <div className={styles["products-container"]}>
                        <div className={styles["products"]}>
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
                            <ProductCard imgSrc="shoes1.jpeg" title={"Tenis nike"} price="399.99" imgAlt={"tenis"}></ProductCard>
                            <ProductCard imgSrc="shoes1.jpeg" title={"Tenis nike"} price="399.99" imgAlt={"tenis"}></ProductCard>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CatalogId;
