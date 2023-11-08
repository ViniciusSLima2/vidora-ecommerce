import styles from "./index.module.css"
import NavBarLink from "@/ui/components/NavBarLink"
import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import SearchBarHome from "@/ui/components/SearchBarHome"
import NavBar from "@/ui/components/NavBar"
const ImageGrids = () => {

    return(
        <section className={styles["container"]}>
            <img src="/creative-imgs/s11.jpg" alt="" />
            <img src="/creative-imgs/s2.jpg" alt="" />
            <img src="/creative-imgs/s4.jpg" alt="" />
            <img src="/creative-imgs/s3.jpg" alt="" />
        </section>
    )
}

export default ImageGrids