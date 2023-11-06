
import {useRef, useEffect} from 'react'
import styles from "./index.module.css"
const BannerCarousel = (props) => {
    const previousBtn = useRef()
    const nextBtn = useRef()
    const carouselContainer = useRef()
    let imgsArray = [];
    let index = 0;
    const handleNextBtn = (e) => {
        if(index + 1 <= imgsArray.length - 1){
            index += 1;
            carouselContainer.current.style.transform = "translate(-" + window.innerWidth * index + "px)";
            hideBtn()
        }
    }

    const handlePreviousBtn = (e) => {
        if(index - 1 >= 0){
            index -= 1;
            carouselContainer.current.style.transform = "translate(-" + window.innerWidth * index + "px)";
            hideBtn()
        }
    }

    const hideBtn = () => {
        previousBtn.current.style.display = index === 0 ? 'none' : 'block';
        nextBtn.current.style.display = index === imgsArray.length - 1 ? 'none' : 'block';
    }

    useEffect(()=> {
        imgsArray = document.querySelectorAll(`.${styles["banner-carousel-wrapper"]} .${styles["shoes-img"]}`);

        if(carouselContainer.current){
            const resizeObserver = new ResizeObserver((entries) => {
                carouselContainer.current && (carouselContainer.current.style.transform = "translate(0px)");
                index = 0;
                hideBtn()
            })
        
            resizeObserver.observe(carouselContainer.current)
        }
        
    }, [])

    

    return (
        <div className={styles["banner-carousel-wrapper"]}>
            <img className={`${styles["previous-btn"]} ${styles["arrow"]}`} src="arrow.svg" ref={previousBtn} onClick={handlePreviousBtn}/>
            <div className={styles["banner-carousel-container"]} ref={carouselContainer}>
                {props.hrefArray?.map((item, index) => {
                    return(
                        <img key={index.toString()} src={item} alt="shoes" className={styles["shoes-img"]}/>
                    )
                })}
            </div>
            <img className={`${styles["next-btn"]} ${styles["arrow"]}`} src="arrow.svg" ref={nextBtn} onClick={handleNextBtn}/>
        </div>
    )
}

export default BannerCarousel;