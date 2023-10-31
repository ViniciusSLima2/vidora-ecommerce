'use client'

import styles from "./index.module.css"
import {useRef, useEffect} from "react"
const SearchBarHome = (props) => {
    const imgContainer = useRef()
    const input = useRef()

    
    useEffect(() => {
        let isVisible = false;
        imgContainer.current.addEventListener("click" , ()=> {
            if(!isVisible){
                input.current.classList.add(styles["visible"])
                isVisible = true;
            }else{
                input.current.classList.remove(styles["visible"])
                isVisible = false;
            }
            
        })
    }, [])
    
    return (
        <div className={styles["search-container"]} tabIndex="0">
            <img src="./magnifyier.svg" alt="magnifier"  ref={imgContainer}/>
            <input type="text" onChange={props.inputHandler} ref={input} placeholder="Search" tabIndex="1"/>
        </div>
    )
}

export default SearchBarHome;
