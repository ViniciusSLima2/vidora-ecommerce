
import {useRef, useEffect} from 'react'
import styles from "./index.module.css"
import { filterParameters } from '@/pages/products'
const Checkbox = (props) => {
    const inputRef = useRef()

    useEffect(() => {   
        inputRef.current.addEventListener(("change"), (e) => {
            if(props.for === "productsPriceFilter"){
                if(e.target.checked) props.setFunction([props.values.minValue, props.values.maxValue])
                else props.removeFunction()
            }else if(props.for === "productsBrandsFilter"){
                if(e.target.checked) props.setFunction(props.name)
                else props.removeFunction(props.name)
            }
        })
        
    }, [])
    return (
        <div className={styles["container"]}>
            <input type="checkbox" id={props.name} name={props.name} ref={inputRef} value={props.values?.maxValue}/>
            <label htmlFor={props.name}>{props.name.charAt(0).toUpperCase() + props.name.slice(1)}</label>
        </div>
    )
}

export default Checkbox;