'use client'
import styles from './index.module.css'
import { useRouter } from 'next/router'
import ProductCard from "@/ui/components/ProductCard";
import CatalogFilter from "@/ui/components/CatalogFilter";
import PriceSlider from "@/ui/components/PriceSlider";
import Checkbox from "@/ui/components/Checkbox";
import { useEffect, useRef } from "react";
import { effect, signal } from '@preact/signals-react';
import { shoes } from '@/signals/shoesSignals';
import { useSignals } from '@preact/signals-react/runtime';

import ProductPricesFilterOptions from '@/ui/components/ProductFiltersCollection/ProductPricesFilterOptions';
import ProductBrandsOptions from '@/ui/components/ProductFiltersCollection/ProductBrandsFilter';
export const productsShoes = signal(shoes.value)
export const filterParameters = signal({priceParams: {minValue: 0, maxValue: 100000000}, brands: []})
export const filterParamsChanged = signal([0])
const Products = (props) => {
    useSignals()
    const orderByRef = useRef()
    useEffect(() => {
        productsShoes.value = shoes.value.filter((item) => {
            if(parseFloat(item.price) <= parseFloat(filterParameters.value?.priceParams?.maxValue) &&
            parseFloat(item.price) >= parseFloat(filterParameters.value?.priceParams?.minValue)){
                if(filterParameters.value?.brands.length > 0) return filterParameters.value.brands.includes(item.brand)
                else return true  
            }
        })
        
    }, [filterParameters.value])

    useEffect(() => {
        productsShoes.value = shoes.value.sort(function(a, b){return parseFloat(a.price) - parseFloat(b.price)})
    }, [shoes.value])

    useEffect(() => {
        orderByRef.current.addEventListener('change', (e) => {
            console.log(e.target.value)
            if(e.target.value === "asc") productsShoes.value = [...productsShoes.value.sort(function(a, b){return parseFloat(a.price) - parseFloat(b.price)})]
            else if (e.target.value === "desc") productsShoes.value = [...productsShoes.value.sort(function(a, b){return parseFloat(b.price) - parseFloat(a.price)})]
            else productsShoes.value = [...productsShoes.value.sort(function(a, b){return a.title.length - b.title.length})]
        })
    }, [orderByRef.current])

    return (
        <div className={styles["container"]}>
            <div className={styles["hero-banner"]}><img src="/masculine-catalog-banner.jpg" alt="shoes" /></div>
            <div className={styles["catalog-container"]}>
                <div className={styles["header"]}>
                    <p>Filtros</p>
                    <div className={styles["order-by-container"]}>
                        <p>Order by:</p>
                        <select ref={orderByRef}>
                            <option value="asc">Ascending Price</option>
                            <option value="desc">Descending Price</option>
                            <option value="relevant">Relevant</option>
                        </select>
                    </div>
                </div>

                <div className={styles["catalog-body"]}>
                    <div className={styles["catalog-filter-side"]}>
                        <div className={styles["categories-filter"]}>
                            <CatalogFilter title={"Brands"} isCheckbox={true}>
                                <ProductBrandsOptions></ProductBrandsOptions>
                            </CatalogFilter>
                        </div>

                        <div className={styles["categories-filter"]}>
                            <CatalogFilter title={"Prices"}>
                                <ProductPricesFilterOptions></ProductPricesFilterOptions>
                            </CatalogFilter>
                        </div>

                    </div>

                    <div className={styles["products-container"]}>
                        <div className={styles["products"]}>
                            {productsShoes.value?.map((item) => { return <ProductCard shoesData={item}></ProductCard>})}
                        </div>
                    </div>
                </div>
            </div>1
        </div>
    )
}

export default Products;
