import '@/styles/globals.css'
import Footer from '@/ui/partials/Footer'
import Header from '@/ui/partials/Header'

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Header></Header>
        <Component {...pageProps} />
      <Footer></Footer>
    </div>

  )
}
