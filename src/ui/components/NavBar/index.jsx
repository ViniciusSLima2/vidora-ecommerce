"use client";

import NavBarLink from "../NavBarLink";
import styles from './index.module.css'
import React, {useState, useRef, useEffect} from "react";
const NavBar = () => {
    const hamburguer = useRef()
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        if(isActive){
            const categories = document.querySelectorAll(`.${styles["link-container"]} span`);
            console.log(categories)
            categories.forEach((category) => {
                category.addEventListener("click", () => {
                    if(category.nextElementSibling.classList.contains(styles["full-max-height"])){
                        category.nextElementSibling.classList.remove(styles["full-max-height"])
                    }else{
                        category.nextElementSibling.classList.add(styles["full-max-height"])
                    }
                })
            })
        }
    }, [isActive])
    return (
        <div className={styles["nav-bar-container"]}>
            <ul className={
                isActive ? `${styles["active"]} ${styles["header-nav"]}`  : styles["header-nav"]
            }>
                <li>
                    <NavBarLink href="home">Home</NavBarLink>
                </li>
                <li>
                    <div className={styles["link-container"]}>
                        {!isActive && <NavBarLink href="masculino">Masculino</NavBarLink>}
                        {isActive && <span>Masculino</span>}

                        <div className={styles["hover-down-wrapper"]}>
                            <div className={styles["hover-down-container"]}>
                                <NavBarLink href="nike">Nike</NavBarLink>
                                <NavBarLink href="adidas">Adidas</NavBarLink>
                                <NavBarLink href="puma">Puma</NavBarLink>
                                <NavBarLink href="olympikus">Olympikus</NavBarLink>
                                <NavBarLink href="vans">Vans</NavBarLink>
                                <NavBarLink href="reserva">Reserva</NavBarLink>
                                <NavBarLink href="mizuno">Mizuno</NavBarLink>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <div className={styles["link-container"]}>
                        {!isActive && <NavBarLink href="feminino">Feminino</NavBarLink>}
                        {isActive && <span>Feminino</span>}

                        <div className={styles["hover-down-wrapper"]}>
                            <div className={styles["hover-down-container"]}>
                                <NavBarLink href="nike">Nike</NavBarLink>
                                <NavBarLink href="adidas">Adidas</NavBarLink>
                                <NavBarLink href="puma">Puma</NavBarLink>
                                <NavBarLink href="olympikus">Olympikus</NavBarLink>
                                <NavBarLink href="vans">Vans</NavBarLink>
                                <NavBarLink href="reserva">Reserva</NavBarLink>
                                <NavBarLink href="mizuno">Mizuno</NavBarLink>
                            </div>
                        </div>
                        
                    </div>
                </li>
            </ul>

            <div className={
                    isActive ? `${styles["active"]} ${styles["hamburguer"]}` : styles["hamburguer"]
                }
                ref={hamburguer} onClick={() => {setIsActive(!isActive)}}>
                <span className={styles["bar"]}></span>
                <span className={styles["bar"]}></span>
                <span className={styles["bar"]}></span>
            </div>
        </div>
    )
}

export default NavBar
