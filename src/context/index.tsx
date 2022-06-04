import React, { createContext, useState, useEffect } from "react"

import Loading from "../components/layout/Loading"

export const UserContext = createContext({})

// This context provider is passed to any component requiring the context
export const UserProvider: React.FC = ({ children }) => {
  // you can put hare  your loading when fetching data
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [])

  return (
    <>
      {loading === true ? (
        ""
      ) : (
        <UserContext.Provider value={{}}>{children}</UserContext.Provider>
      )}

      {loading === true ? <Loading /> : ""}
    </>
  )
}

export default UserProvider
