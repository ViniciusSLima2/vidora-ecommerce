"use client"
import ProductImagePicker from "@/ui/components/ProductImagePicker";
import ProductInfo from "@/ui/components/ProductInfo";
import Breadcrumb from "@/ui/components/Breadcrumb";
import styles from './index.module.css'
import { useRouter } from 'next/router'
import ProductsCarousel from "@/ui/partials/ProductsCarousel";
import ProductCard from "@/ui/components/ProductCard";
import { shoes } from "@/signals/shoesSignals";
import { useSignals } from "@preact/signals-react/runtime";
import { getDocById } from "@/services/firestore/firestoreService";
import { signal } from "@preact/signals-react";
import { useEffect } from "react";
const productData = signal(undefined)
const id = signal("")
const Index = () => {
    const router = useRouter()
    useSignals()
    id.value = router.query.productId
    useEffect(() => {
        if(router.query.productId) getDocById(router.query.productId).then(result => productData.value = result)
    }, [router.query.productId])


        return (
            <div className={styles["container"]}>
                <section className={styles["main-description"]}>
                    <ProductImagePicker images={productData?.value?.imgLinks}></ProductImagePicker>
                    <ProductInfo product={productData?.value}></ProductInfo>
                </section>
                <ProductsCarousel title={"You could also like:"}>
                    {shoes.value?.slice(0, 15).map((shoes) => {
                        return <ProductCard shoesData={shoes}></ProductCard>
                    })}</ProductsCarousel>
            </div>
        )
    
}

export default Index;
