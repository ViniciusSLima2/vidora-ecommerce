'use client'
import styles from "./index.module.css"
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {React, useEffect, useState} from 'react'
import { signal } from "@preact/signals-react";
import { useSignals } from "@preact/signals-react/runtime";
import { getNameById } from "@/services/firestore/firestoreService";

const pathNames = signal([])
const productName = signal("")
const Breadcrumb = (props) => {
    useSignals()
    const paths = usePathname()
    useEffect(()=>{
        if(paths) pathNames.value = paths.split('/').filter( path => path )
        if(pathNames.value[0] === "products") getNameById(pathNames.value[1]).then(result => productName.value = result)
    }, [paths])
    
    return (
        <div className={styles["container"]}>
            {pathNames.value?.map((pathName, index) => { 
                const href = `/${pathNames.value?.slice(0, index + 1).join('/')}`
                const itemLink = productName.value !== "" && index === 1 ? productName.value.toUpperCase() : pathName.toUpperCase()
                return(
                    <>
                        <Link key={index.toString()} href={href}>{itemLink}</Link>
                        {pathNames.value.length !== index + 1 && <span></span>}
                    </>
                )
            })}
        </div>
    )
}

export default Breadcrumb;