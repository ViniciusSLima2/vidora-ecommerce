import styles from "./index.module.css"
import NavBarLink from "@/ui/components/NavBarLink"
import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation";
import SearchBarHome from "@/ui/components/SearchBarHome"
import NavBar from "@/ui/components/NavBar"
const Header = (props) => {
    const paths = usePathname()
    const pathNames = paths?.split('/').filter(path => path)
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
            <Link href="/home" className={styles["logo-title"]}>Vidora</Link>

            <NavBar ></NavBar>

            <div className={styles["functionalities-container"]}>
                <SearchBarHome inputHandler={inputHandler}></SearchBarHome>

                <Link href="/cart">
                    <svg fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                        width="800px" height="800px" viewBox="0 0 902.86 902.86"
                    >
                        <g>
                            <g>
                                <path d="M671.504,577.829l110.485-432.609H902.86v-68H729.174L703.128,179.2L0,178.697l74.753,399.129h596.751V577.829z
                M685.766,247.188l-67.077,262.64H131.199L81.928,246.756L685.766,247.188z"/>
                                <path d="M578.418,825.641c59.961,0,108.743-48.783,108.743-108.744s-48.782-108.742-108.743-108.742H168.717
                c-59.961,0-108.744,48.781-108.744,108.742s48.782,108.744,108.744,108.744c59.962,0,108.743-48.783,108.743-108.744
                c0-14.4-2.821-28.152-7.927-40.742h208.069c-5.107,12.59-7.928,26.342-7.928,40.742
                C469.675,776.858,518.457,825.641,578.418,825.641z M209.46,716.897c0,22.467-18.277,40.744-40.743,40.744
                c-22.466,0-40.744-18.277-40.744-40.744c0-22.465,18.277-40.742,40.744-40.742C191.183,676.155,209.46,694.432,209.46,716.897z
                M619.162,716.897c0,22.467-18.277,40.744-40.743,40.744s-40.743-18.277-40.743-40.744c0-22.465,18.277-40.742,40.743-40.742
                S619.162,694.432,619.162,716.897z"/>
                            </g>
                        </g>
                    </svg>
                </Link>

                <Link href="/account">
                    <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 21C5 17.134 8.13401 14 12 14C15.866 14 19 17.134 19 21M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </Link>
            </div>
        </section>
    )
}

export default Header