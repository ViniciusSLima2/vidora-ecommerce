
import {useRef, useEffect} from 'react'
import Checkbox from '@/ui/components/Checkbox'
import Link from 'next/link'
import styles from "./index.module.css"
import { useForm } from "react-hook-form"
import {z} from 'zod'
import {zodResolver} from "@hookform/resolvers/zod"
import { useRouter } from 'next/router'
const schema = z.object({
    email: z.string()
        .min(1, {message: 'This field has to be filled'})
        .email("This is not a valid email."),
    password: z.string()
            .min(6, {message: 'Minimum of 6 characters.'}),
})
const Login = (props) => {
    const router = useRouter()
    const {register, handleSubmit, formState} = useForm({
        resolver: zodResolver(schema)
    })

    const {errors} = formState

    async function handleLoginSubmit(data){
        const email = data.email
        const password = data.password
        const response = await fetch('/api/auth/login', {
            method: 'POST',
            headers: { 'Content-Type' : 'application/json'},
            body: JSON.stringify({email, password})
        })

        if(response.ok){
            router.push('/account')
        }else{
            console.log("Error")
        }
    }
    return(
        <form className={styles['input-container']} onSubmit={handleSubmit(handleLoginSubmit)}>
            <div className={styles['wrapper']}>
                <label htmlFor="email">Email</label>
                <input {...register('email')}/>
                {errors.email ? <p className={styles.error}>{errors.email.message}</p> : null}
            </div>
            <div className={styles['wrapper']}>
                <label htmlFor="password">Password</label>
                <input type="password" {...register('password')}/>
                {errors.password ? <p className={styles.error}>{errors.password.message}</p> : null}
            </div>
            <div className={styles['remember-forgot-container']}>
                <Checkbox name={'Remember me'}></Checkbox>
                <Link href="forgotPassword"></Link>
            </div>
            <button type="submit" className={styles['login-cta']}>Log in</button>
        </form>
    )
}

export default Login;