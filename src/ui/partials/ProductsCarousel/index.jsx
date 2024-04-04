'use client'
import {useRef, useEffect} from 'react'
import styles from "./index.module.css"
const ProductsCarousel = (props) => {
    const previousBtn = useRef()
    const nextBtn = useRef()
    const carouselContainer = useRef()
    const wrapperContainer = useRef()
    let imgsArray;
    let index = 0;
    let cardWidth = "";

    function isOverflown() {
        return wrapperContainer.current.scrollHeight > wrapperContainer.current.clientHeight || wrapperContainer.current.scrollWidth > wrapperContainer.current.clientWidth;
    }

    const hideBtn = (maxTranslations) => {
        previousBtn.current && (previousBtn.current.style.display = index === 0 ? 'none' : 'block');
        nextBtn.current && (nextBtn.current.style.display = index === maxTranslations ? 'none' : 'block');
        
    }

    const moveCarousel = (direction) => {
        if(isOverflown()){
            imgsArray = document.querySelectorAll(`.${styles["banner-carousel-wrapper"]} .${styles["shoes-img"]}`);
            cardWidth = carouselContainer.current.children[0]?.getBoundingClientRect().width + 10;
            const carouselViewWidth = wrapperContainer.current.clientWidth;
            const carouselScrollWidth = carouselContainer.current.scrollWidth;
            const cardsOnScreen = Math.floor(carouselViewWidth / cardWidth);
            const maxTranslations = Math.floor(carouselScrollWidth / (cardsOnScreen * cardWidth));
            index += -direction;
            carouselContainer.current.style.transform = "translate(-" + (cardWidth * cardsOnScreen * index)  + "px)";
            hideBtn(maxTranslations)
        }
    }

    useEffect(()=> {
        imgsArray = document.querySelectorAll(`.${styles["banner-carousel-wrapper"]} .${styles["shoes-img"]}`);
        cardWidth = carouselContainer.current.children[0]?.getBoundingClientRect().width + 10;
        if(carouselContainer.current){
            const resizeObserver = new ResizeObserver((entries) => {
                carouselContainer.current && (carouselContainer.current.style.transform = "translate(0px)");
                hideBtn()
                index = 0;
            })
        
            resizeObserver.observe(carouselContainer.current)
        }
    }, [])

    

    return (
        <section className={styles["main-container"]} suppressHydrationWarning>
            <p className={styles["carousel-title"]}>{props.title}</p>
            <div className={styles["wrapper"]} ref={wrapperContainer}>
                <img className={`${styles["previous-btn"]} ${styles["arrow"]}`} src="/arrow.svg" ref={previousBtn} onClick={() => moveCarousel(1)}/>
                <div className={styles["container"]} ref={carouselContainer}>
                    {props.children?.map((card, index) => {
                        return(<div key={index.toString()}>{card}</div>)
                    })}
                </div>
                <img className={`${styles["next-btn"]} ${styles["arrow"]}`} src="/arrow.svg" ref={nextBtn} onClick={() => moveCarousel(-1)}/>
            </div>
        </section>
        
    )
}

export default ProductsCarousel;