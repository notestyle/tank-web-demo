import '../styles/globals.css'
import { ToastContainer } from 'react-toastify'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Component {...pageProps} />
      <ToastContainer limit={3} />
    </div>
  )
}

export default MyApp
