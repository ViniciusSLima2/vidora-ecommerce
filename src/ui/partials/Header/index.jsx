import styles from "./index.module.css"
import NavBarLink from "@/ui/components/NavBarLink"
import { useState } from "react"
import Link from "next/link"
import SearchBarHome from "@/ui/components/SearchBarHome"

const Header = () => {

    const [inputText, setInputText] = useState("")
    const inputHandler = (e) => {

        const lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
    }
    return (
        <div className={styles.container}>
            <Link href="home" className={styles["logo-title"]}>Vidora</Link>
            <div className={styles["nav-bar"]}>
                <ul>
                    <li>
                        <NavBarLink href="home">Home</NavBarLink>

                    </li>
                    <li>
                        <div className={styles["nav-bar-link"]}>
                            <NavBarLink href="female" classList={styles["nav-bar-link"]}>Female</NavBarLink>
                        </div>

                        <div className={styles["dropdown-wrapper"]}>
                            <div className={styles["dropdown-container"]}>
                                <Link href="nike">Nike</Link>
                                <Link href="adidas">Adidas</Link>
                                <Link href="puma">Puma</Link>
                                <Link href="olympikus">Olympikus</Link>
                                <Link href="vans">Vans</Link>
                                <Link href="reserva">Reserva</Link>
                                <Link href="mizuno">Mizuno</Link>
                            </div>
                        </div>

                    </li>
                    <li>
                        <div className={styles["nav-bar-link"]}>
                            <NavBarLink href="masculino" classList={styles["nav-bar-link"]}>Masculine</NavBarLink>
                        </div>

                        <div className={styles["dropdown-wrapper"]}>
                            <div className={styles["dropdown-container"]}>
                                <Link href="nike">Nike</Link>
                                <Link href="adidas">Adidas</Link>
                                <Link href="puma">Puma</Link>
                                <Link href="olympikus">Olympikus</Link>
                                <Link href="vans">Vans</Link>
                                <Link href="reserva">Reserva</Link>
                                <Link href="mizuno">Mizuno</Link>
                                <Link href="all-start">All-Star</Link>
                            </div>
                        </div>

                    </li>
                </ul>
            </div>

            <div className={styles["functionalities-container"]}>
                <SearchBarHome inputHandler={inputHandler}></SearchBarHome>
                <div className={styles["funct"]}>
                    <img src="" alt="" />
                    <Link href="account">Account</Link>
                </div>

                <div className={styles["funct"]}>
                    <img src="" alt="" />
                    <Link href="Bag">Bag</Link>
                </div>
            </div>
        </div>
    )
}

export default Header