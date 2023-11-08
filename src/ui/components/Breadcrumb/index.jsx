import styles from "./index.module.css"
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {React, useEffect, useState} from 'react'
const Breadcrumb = (props) => {
    
    const [paths, setPaths] = useState(useRouter().pathname)
    let pathNames = ""
    useEffect(()=>{
        pathNames = props.paths?.split('/').filter( path => path )
        console.log(paths)
    }, [paths])
    return (
        <div className={styles["container"]}>
            {pathNames !== "" && pathNames.map((pathName, index) => {
                const href = `/${pathNames.slice(0, index + 1).join('/')}`
                let itemLink = pathName[0].toUpperCase() + pathName.slice(1, pathName.length)
                return(
                    <>
                        <Link key={index.toString()} href={href}>{itemLink}</Link>
                        {pathNames.length !== index + 1 && <span></span>}
                    </>
                )
            })}
        </div>
    )
}

export default Breadcrumb;