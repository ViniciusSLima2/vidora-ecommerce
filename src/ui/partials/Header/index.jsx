import styles from "./index.module.css"
import NavBarLink from "@/ui/components/NavBarLink"
import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import SearchBarHome from "@/ui/components/SearchBarHome"
import NavBar from "@/ui/components/NavBar"
const Header = () => {

    const container = useRef()
    useEffect(() => {
        window.addEventListener("scroll", () => {
            window.scrollY > 60 ? container.current?.classList.add(styles["fixed"]) : container.current?.classList.remove(styles["fixed"]);
        })
    })
    
    const [inputText, setInputText] = useState("")
    const inputHandler = (e) => {
        const lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
    }
    return (
        <section className={styles.container} ref={container}>
            <Link href="home" className={styles["logo-title"]}>Vidora</Link>
            
            <NavBar></NavBar>

            <div className={styles["functionalities-container"]}>
                <SearchBarHome inputHandler={inputHandler}></SearchBarHome>

                <Link href="cart"><img src="/shopping-cart.png" alt="" /></Link>

                <Link href="account"><img src="/user.png" alt="" /></Link>
            </div>
        </section>
    )
}

export default Header