import ProductCard from "@/ui/components/ProductCard"
import styles from "./index.module.css"
import {useRef, useEffect} from 'react';
import { useSignals } from "@preact/signals-react/runtime";
import { shoes } from "@/signals/shoesSignals";
import { auth } from "@/config/firebase";
import { signOut } from "firebase/auth";
const CartLogged = (props) => {

    function signOutAccount(){
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          });
    }
    
    return(
        <div>
            <p>Logged</p>
            <button onClick={signOutAccount}>Sair</button>
        </div>
        
    )
}

export default CartLogged