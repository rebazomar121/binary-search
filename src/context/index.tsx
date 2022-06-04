import React, { createContext, useState, useEffect } from "react"

import Loading from "../components/layout/Loading"

export const UserContext = createContext({})

// This context provider is passed to any component requiring the context
export const UserProvider: React.FC = ({ children }) => {
  // you can put hare  your loading when fetching data
  const [loading, setLoading] = useState<boolean>(false)

  //   useEffect(() => {
  //     setLoading(true)
  //     setTimeout(() => {
  //       setLoading(false)
  //     }, 1000)
  //   }, [])

  return (
    <>
      {loading === true ? (
        ""
      ) : (
        <UserContext.Provider value={{}}>{children}</UserContext.Provider>
      )}

      <div
        className={
          loading === true
            ? "w-full h-full z-20 fixed inset-x-0 bottom-0 transition duration-150"
            : "transition duration-150 LoadingPage w-full h-full z-20 fixed inset-x-0 bottom-0"
        }
      >
        <div className="min-h-screen flex justify-center items-center bg-white">
          <Loading />
        </div>
      </div>
    </>
  )
}

export default UserProvider
