import '@styles/globals.css'
import Head from 'next/head'
import UserState from "../context/user/UserState";

function Application({ Component, pageProps }) {
  return (
    <> 
    <UserState>
      <Head>
          <title>Pluto - NeoBanking App</title>
          <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} /> 
    </UserState>
    </>
    )
}

export default Application
