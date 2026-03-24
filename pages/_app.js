import { SessionProvider } from 'next-auth/react'
import '../styles/globals.css'
import Header from '../components/Header'

function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
        
      <Component {...pageProps} />
    </SessionProvider>
  )
}

export default MyApp
