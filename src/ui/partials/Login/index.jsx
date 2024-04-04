import ProductCard from "@/ui/components/ProductCard"
import styles from "./index.module.css"
import {useRef, useEffect} from 'react';
import { useSignals } from "@preact/signals-react/runtime";
import { shoes } from "@/signals/shoesSignals";
import Checkbox from "@/ui/components/Checkbox";
import Link from "next/link";
import LoginForm from "@/ui/components/LoginForm";
import { signInWithRedirect } from "firebase/auth";
import { auth, googleProvider } from "@/config/firebase";
import Image from "next/image";
const Login = (props) => {
    const signInWithGoogleBtnRef = useRef()
    signInWithGoogleBtnRef.current?.addEventListener("click", () => {
        signInWithGoogle()
    })
    function signInWithGoogle(){
        signInWithRedirect(auth, googleProvider);
    }

    function handleLogin(){

    }
    return(
        <div className={styles.container}>
            <div className={styles['img-wrapper']}>
                <Image src="/login-img.jpg" alt="Imagem de uma cabana na neve" layout="fill" />
            </div>
            
            <div className={styles['login-container']}>
                <div className={styles['title-container']}>
                    <h1>Welcome Back!</h1>
                    <h3>Please enter your credentials</h3>
                </div>
                
                <LoginForm/>

                <div className={styles['another-way-to-login']}><span>Or, login with</span></div>

                <div className={styles['google-login']}ref={signInWithGoogleBtnRef}> 
                    <img src="google.png" alt="Google Logo" />
                    <p>Sign up with Google</p>
                </div>

                <div className={styles['register']} >
                    <p>Don't have an account?</p>
                    <Link href="register">Register here</Link>
                </div>
            </div>
        </div>
    )
}

export default Login