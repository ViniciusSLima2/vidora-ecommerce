import BrandCard from "@/ui/components/BrandCard";
import BenefitsInfo from "@/ui/partials/BenefitsInfo";
import Header from "@/ui/partials/Header";
import Brands from "@/ui/partials/Brands";
import HomeBanner from "@/ui/partials/HomeBanner";

const Home = () => {
    return (
        <div className="home-container">
            <Header></Header>
            <HomeBanner></HomeBanner>
            <BenefitsInfo></BenefitsInfo>
            
            <Brands>
                <BrandCard srcImg="nike-logo.png" brandName="Nike" hrefLink="/products/nike"></BrandCard>
                <BrandCard srcImg="adidas-logo.webp" brandName="Adidas" hrefLink="/products/adidas"></BrandCard>
                <BrandCard srcImg="puma-logo.png" brandName="Puma" hrefLink="/products/puma"></BrandCard>
                <BrandCard srcImg="reserva-logo.jpg" brandName="Reserva" fontColor="red" hrefLink="/products/reserva"></BrandCard>
                <BrandCard srcImg="olympikus-logo.png" brandName="Olympikus" hrefLink="/products/olympikus"></BrandCard>
            </Brands>
        </div>
        
    )
}

export default Home;