import '../styles/globals.css'
import { Provider, createClient } from 'urql'
import Navbar from '../components/Navbar'

const client  = createClient({url:"http://localhost:1337/graphql"})
export default function App({ Component, pageProps }) {
  return (
    <Provider value={client}>
       <Navbar />
    <Component {...pageProps} />
    </Provider>
  )
}
