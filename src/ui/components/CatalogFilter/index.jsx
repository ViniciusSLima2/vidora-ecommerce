'use client'
import styles from "./index.module.css"
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {React, useEffect, useState, useRef} from 'react'
const CatalogFilter = (props) => {
    const title = useRef();
    const container = useRef();
    let isShowing = false;
    
    useEffect(() => {
        title.current.addEventListener("click", () => {
            if(isShowing){
                container.current.classList.remove(styles["active"]);
                isShowing = false
            }else{
                container.current.classList.add(styles["active"]);
                isShowing = true
            }
        })
    })
    
    return (
        <div className={styles["container"]} ref={container}>
           <p className={styles["title"]} ref={title}>{props.title}</p>
           <div className={styles["body"]}>
                {props.children}
           </div>
        </div>
    )
}

export default CatalogFilter;