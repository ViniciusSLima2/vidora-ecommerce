import { signIn } from '@/auth'
import { auth } from '@/config/firebase'
import { isUserLogged } from '@/pages/_app';
export default async function handler(req, res) {
    try {
        const { email, password } = req.body
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                isUserLogged = true;
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
        res.status(200).json({ success: true })
    } catch (error) {
        if (error.type === 'CredentialsSignin') {
            res.status(401).json({ error: 'Invalid credentials.' })
        } else {
            res.status(500).json({ error: 'Something went wrong.' })
        }
    }
}