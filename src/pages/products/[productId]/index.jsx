import ProductImagePicker from "@/ui/components/ProductImagePicker";
import ProductInfo from "@/ui/components/ProductInfo";
import Breadcrumb from "@/ui/components/Breadcrumb";
import styles from './index.module.css'
import { useRouter } from 'next/router'
import ProductsCarousel from "@/ui/partials/ProductsCarousel";
import ProductCard from "@/ui/components/ProductCard";
const Index = (props) => {
    const router = useRouter()
    console.log(router.query.productId)
    const product = {
        "title" : "TÊNIS ADISTAR 2.0",
        "price" : "699,99",
        "description" : "muitobom muitobommuitobommuitobommuitobommuitobommuitobommuitobommuitobommuitobommuitobommuitobommuitobommuitobommuitobom",
        "images" : [
            {
                "src" : "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/35c23345c82d41ceb8bff6a83882fa24_9366/Tenis_Adistar_2.0_Branco_ID1729_HM1.jpg",
                "alt" : "adidas"
            },
            {
                "src" : "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/b51a2e42bec5459badaa24a90b3c7481_9366/Tenis_Adistar_2.0_Branco_ID1729_HM3_hover.jpg",
                "alt" : "adidas"
            },
            {
                "src" : "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/4838c9158da84f9e8e8a1e6c6dc691bd_9366/Tenis_Adistar_2.0_Branco_ID1729_HM4.jpg",
                "alt" : "adidas"
            },
            {
                "src" : "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/ea1d2274b0044393a5c1767315985c99_9366/Tenis_Adistar_2.0_Branco_ID1729_HM5.jpg",
                "alt" : "adidas"
            },
        ],
        "itemCategories" : ["Running", "Shoes"]
    }
    return (
        <div className={styles["container"]}>
            <section className={styles["main-description"]}>
                <ProductImagePicker images={product.images}></ProductImagePicker>
                <ProductInfo product={product}></ProductInfo>
            </section>

            <ProductsCarousel title={"You could also like:"}>
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
            </ProductsCarousel>
        </div>
    )
}

export default Index;
