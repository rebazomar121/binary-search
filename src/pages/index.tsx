import React from "react"
import Search from "../components/search"

type HomeType = React.FC<{}>

const Home: HomeType = () => {
  return (
    <>
      <div>
        <Search />
      </div>
    </>
  )
}

export default Home
