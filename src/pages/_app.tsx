import Head from "next/head"
import { AppProps } from "next/app"
import Layout from "../components/layout"
import UserProvider from "../context"

import "../styles/index.css"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <UserProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </UserProvider>
    </>
  )
}

export default MyApp
