import React from "react"
import Search from "../components/search"
import Container from "../components/layout/Container"
type HomeType = React.FC<{}>

const Home: HomeType = () => {
  return (
    <>
      <Container>
        <Search />
      </Container>
    </>
  )
}

export default Home
