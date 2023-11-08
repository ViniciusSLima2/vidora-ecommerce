"use client"

import styles from "./index.module.css"
import {useRef, useState} from "react"
const SearchBarHome = (props) => {
    const imgContainer = useRef();
    const input = useRef();
    const [isVisible, setIsVisible] = useState(false);
    
    return (
        <div className={styles["search-container"]} tabIndex="0" onClick={() => {setIsVisible(true)}}>
            <img src="/magnifyier.svg" alt="magnifier"  ref={imgContainer}/>
            <input type="text" onChange={props.inputHandler} ref={input} placeholder="Search" tabIndex="1" 
            className={isVisible && styles["visible"]} />
        </div>
    )
}

export default SearchBarHome;
