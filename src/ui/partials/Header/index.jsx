import styles from "./index.module.css"
import NavBarLink from "@/ui/components/NavBarLink"
import { useState } from "react"
import Link from "next/link"
import SearchBarHome from "@/ui/components/SearchBarHome"
import NavBar from "@/ui/components/NavBar"
const Header = () => {

    const [inputText, setInputText] = useState("")
    const inputHandler = (e) => {
        const lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
    }
    return (
        <div className={styles.container}>
            <Link href="home" className={styles["logo-title"]}>Vidora</Link>
            
            <NavBar></NavBar>

            <div className={styles["functionalities-container"]}>
                <SearchBarHome inputHandler={inputHandler}></SearchBarHome>

                <Link href="cart"><img src="/shopping-cart.png" alt="" /></Link>

                <Link href="account"><img src="/user.png" alt="" /></Link>
            </div>
        </div>
    )
}

export default Header