import '@/styles/globals.css'
import Footer from '@/ui/partials/Footer'
import Header from '@/ui/partials/Header'
import { getAllShoes } from '@/services/firestore/firestoreService'
export default function App({ Component, pageProps }) {
  getAllShoes()
  return (
    <div>
        <Header></Header>
        <Component {...pageProps} />
        <Footer></Footer>
    </div>

  )
}
