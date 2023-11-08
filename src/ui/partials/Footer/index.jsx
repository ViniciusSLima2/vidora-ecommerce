import ProductCard from "@/ui/components/ProductCard"
import styles from "./index.module.css"
import {useRef, useEffect} from 'react';
import Link from "next/link";
const Footer = (props) => {
   
    return (
        <section className={styles["container"]}>
            <p>COPYRIGHT ALL RIGHTS RESERVED 2023</p>

            <div className={styles["social-media"]}>
                <Link href="a"><img src="/facebook.png" alt="facebook logo" /></Link>
                <Link href="a"><img src="/twitter.png" alt="facebook logo" /></Link>
                <Link href="a"><img src="/pinterest.png" alt="facebook logo" /></Link>
                <Link href="a"><img src="/instagram.png" alt="facebook logo" /></Link>
            </div>
            <Link href="help">HELP</Link>
        </section>
    )
}

export default Footer