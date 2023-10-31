import Link from "next/link"
import {usePathname} from "next/navigation"
import styles from './index.module.css'
import React from "react";
const NavBarLink = (props) => {
    const pathname = usePathname()
    return (
        <Link key={props.href} href={"/" + props.href}
            className={pathname === "/" + props.href ? `${styles["link"]} ${styles["active-link"]}` : styles["link"]}>
                {props.children}
        </Link>
    )
}

export default NavBarLink