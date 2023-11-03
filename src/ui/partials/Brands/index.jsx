import styles from "./index.module.css"
const Brands = (props) => {
    return (
        <section className={styles.container}>
            <h3 className={styles["title"]}>
                Brands
            </h3>

            <div className={styles["branch-cards-container"]}>
                {props.children?.map((card)=>{
                    return(card)
                })}
            </div>
        </section>
    )
}

export default Brands