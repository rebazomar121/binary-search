import React from "react"
import Head from "next/head"
import { useRouter } from "next/router"
import Footer from "../Footer"
const Layout = ({ children }) => {
  const router = useRouter()
  const { pathname } = router
  return (
    <>
      <Head>
        <title>Binary Search</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <main>
        {children}
        <Footer />
      </main>
    </>
  )
}

export default Layout
