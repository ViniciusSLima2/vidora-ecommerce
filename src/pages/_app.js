import '@/styles/globals.css'
import Footer from '@/ui/partials/Footer'
import Header from '@/ui/partials/Header'
import { getAllShoes } from '@/services/firestore/firestoreService'
import { auth } from '@/config/firebase'
import { onAuthStateChanged } from "firebase/auth";
import { signal } from '@preact/signals-react'
export const isUserLogged = signal(false)
export default function App({ Component, pageProps }) {
  getAllShoes()
  onAuthStateChanged(auth, (user) => {
    if (user) {
      isUserLogged.value = true
    } else {
      isUserLogged.value = false
    }
  });
  return (
    <div>
        <Header></Header>
        <Component {...pageProps} />
        <Footer></Footer>
    </div>

  )
}
