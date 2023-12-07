import ProductImagePicker from "@/ui/components/ProductImagePicker";
import ProductInfo from "@/ui/components/ProductInfo";
import Breadcrumb from "@/ui/components/Breadcrumb";
import styles from './index.module.css'
import { useRouter } from 'next/router'
import ProductsCarousel from "@/ui/partials/ProductsCarousel";
import ProductCard from "@/ui/components/ProductCard";
import CatalogFilter from "@/ui/components/CatalogFilter";
const CatalogId = (props) => {
    const router = useRouter()
    console.log(router.query.catalogId)
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
                            <CatalogFilter title={"Categories"}>
                                <div className={styles["categories"]}>
                                    <p>Running</p>
                                    <p>Casual</p>
                                    <p>Fine</p>
                                </div>
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
