'use client'

import { useEffect } from "react";
import { signal } from '@preact/signals-react';
import styles from "./index.module.css"
import { auth } from "@/config/firebase";
import { isUserLogged } from "../_app";
import CartLogged from "@/ui/partials/Cart/Logged";
import CartNotLogged from "@/ui/partials/Cart/NotLogged";
import { useSignals } from "@preact/signals-react/runtime";
const Cart = (props) => {
    useSignals()
    useEffect(() => {
        
    }, [])
    
    return(
        <div className={styles["container"]}>
            {isUserLogged.value ? <CartLogged></CartLogged> : <CartNotLogged></CartNotLogged>}
        </div>
        
    )
    
}

export default Cart;