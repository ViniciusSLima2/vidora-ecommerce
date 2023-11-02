import BenefitsInfo from "@/ui/partials/BenefitsInfo";
import Header from "@/ui/partials/Header";
import HomeBanner from "@/ui/partials/HomeBanner";

const Home = () => {
    return (
        <div className="home-container">
            <Header></Header>
            <HomeBanner></HomeBanner>
            <BenefitsInfo></BenefitsInfo>
        </div>
        
    )
}

export default Home;