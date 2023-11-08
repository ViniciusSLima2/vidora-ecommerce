import BannerCarousel from "@/ui/components/BannerCarousel";
import BannerCarouselItem from "@/ui/components/BannerCarouselItem";
import styles from "./index.module.css"
const HomeBanner = () => {

    const imgBannerHref = ['shoes1.jpg','shoes3.jpeg','shoes2.jpeg']
    return (
        <section className={styles["home-banner"]}>
            <BannerCarousel hrefArray = {imgBannerHref}>
            </BannerCarousel>
        </section>
    )
}

export default HomeBanner;