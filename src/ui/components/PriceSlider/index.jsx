import { Children, useEffect, useRef, useState } from "react";
import styles from "./index.module.css"
const PriceSlider = (props) => {
    const container = useRef()
    const priceInputRef = useRef()
    const rangeInputRef = useRef()
    const [minRange, setMinRange] = useState(0);
    const [maxRange, setMaxRange] = useState(2000);
    let priceGap = 100;
    useEffect((e) => {
        const rangeInput = rangeInputRef.current.querySelectorAll(`.${styles["range-input"]} input`)
        const priceInput = priceInputRef.current.querySelectorAll(`input`)
        const range = container.current.querySelector(`.${styles["progress"]}`);
        console.log(priceInput)
        rangeInput[0].value = priceInput[0].value = 0
        rangeInput[1].value = priceInput[1].value = 3000
        priceInput.forEach(input =>{
            input.addEventListener("input", e =>{
                let minPrice = parseInt(priceInput[0].value),
                maxPrice = parseInt(priceInput[1].value);
                console.log("d")
                
                if((maxPrice - minPrice >= priceGap) && maxPrice <= rangeInput[1].max){
                    if(e.target.className === styles["input-min"]){
                        rangeInput[0].value = minPrice;
                        range.style.left = ((minPrice / rangeInput[0].max) * 100) + "%";
                    }else{
                        rangeInput[1].value = maxPrice;
                        range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
                    }
                }
            });
        });
        rangeInput.forEach(input =>{
            input.addEventListener("input", e =>{
                let minVal = parseInt(rangeInput[0].value),
                maxVal = parseInt(rangeInput[1].value);
                if((maxVal - minVal) < priceGap){
                    if(e.target.className === styles["range-min"]){
                        rangeInput[0].value = maxVal - priceGap
                    }else{
                        rangeInput[1].value = minVal + priceGap;
                    }
                }else{
                    priceInput[0].value = minVal;
                    priceInput[1].value = maxVal;
                    range.style.left = ((minVal / rangeInput[0].max) * 100) + "%";
                    range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
                }
            });
        });
        
    })
    
    return (
        <div className={styles["container"]} ref={container}>
            <div className={styles["slider"]}>
                <div className={styles["progress"]}></div>
            </div>
            <div className={styles["range-input"]} ref={rangeInputRef}>
                <input type="range" className={styles["range-min"]} min="0" max="3000"  step="50"/>
                <input type="range" className={styles["range-max"]} min="0" max="3000"  step="50"/>
            </div>

            <div className={styles["price-input"]} ref={priceInputRef}>
                <div className={styles["field"]}>
                    <span>Min</span>
                    <input type="number" className={styles["input-min"]}/>
                </div>
                <div className={styles["field"]}>
                    <span>Max</span>
                    <input type="number" className={styles["input-max"]}/>
                </div>
            </div>
        </div>
    )
}

export default PriceSlider;