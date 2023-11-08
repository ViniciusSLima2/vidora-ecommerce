import BrandCard from "@/ui/components/BrandCard";
import BenefitsInfo from "@/ui/partials/BenefitsInfo";
import Header from "@/ui/partials/Header";
import Brands from "@/ui/partials/Brands";
import HomeBanner from "@/ui/partials/HomeBanner";
import ProductsCarousel from "@/ui/partials/ProductsCarousel";
import ProductCard from "@/ui/components/ProductCard";
import ImageGrids from "@/ui/partials/ImageGrids";
import Collections from "@/ui/partials/Collections";
import Footer from "@/ui/partials/Footer";
import Breadcrumb from "@/ui/components/Breadcrumb";
import { usePathname } from "next/navigation";
const Home = () => {
    const paths = usePathname()
    return (
        <div className="home-container">
            <Header></Header>
            <HomeBanner></HomeBanner>
            <BenefitsInfo></BenefitsInfo>
            
            <ImageGrids></ImageGrids>
            <Brands>
                <BrandCard srcImg="nike-logo.webp" brandName="Nike" hrefLink="/products/nike"></BrandCard>
                <BrandCard srcImg="adidas-logo.png" brandName="Adidas" hrefLink="/products/adidas"></BrandCard>
                <BrandCard srcImg="reserva-logo.png" brandName="Reserva" fontColor="red" hrefLink="/products/reserva"></BrandCard>
                <BrandCard srcImg="puma-logo.png" brandName="Puma" hrefLink="/products/puma"></BrandCard>
                <BrandCard srcImg="olympikus-logo.webp" brandName="Olympikus" hrefLink="/products/olympikus"></BrandCard>
            </Brands>

            <ProductsCarousel title={"Nike"}>
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

            <Collections></Collections>

            <ProductsCarousel title={"Adidas"}>
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
            </ProductsCarousel>

            <Footer></Footer>
            <Breadcrumb paths={paths}></Breadcrumb>
        </div>
        
    )
}

export default Home;