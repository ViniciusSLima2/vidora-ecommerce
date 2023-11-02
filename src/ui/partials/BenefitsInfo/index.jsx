import BenefitsInfoCard from "@/ui/components/BenefitsInfoCard"
import styles from "./index.module.css"
const BenefitsInfo = () => {
    const cardsInfo = [
        {"imgSrc" : "truck.jpg", "title" : "Free Delivery", "description" : "Lorem ipsuming Simply Dummy Text"},
        {"imgSrc" : "truck.jpg", "title" : "Free Delivery", "description" : "Lorem ipsuming Simply Dummy Text"},
        {"imgSrc" : "truck.jpg", "title" : "Free Delivery", "description" : "Lorem ipsuming Simply Dummy Text"},
        {"imgSrc" : "truck.jpg", "title" : "Free Delivery", "description" : "Lorem ipsuming Simply Dummy Text"},
    ]

    return (
        <section className={styles.container}>
            {cardsInfo.map((card, index) => {
                return (<BenefitsInfoCard imgSrc={card.imgSrc} key={index.toString()} description={card.description} title={card.title}></BenefitsInfoCard>)
            })}
        </section>
    )
}

export default BenefitsInfo