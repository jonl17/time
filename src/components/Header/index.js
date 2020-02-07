import React from "react"

/** components */
import { Container } from "./Styled"
import Plus from "./components/Plus"
import TeljaTakki from "./components/TeljaTakki"

const Header = () => {
  return (
    <Container>
      <TeljaTakki></TeljaTakki>
      <Plus></Plus>
    </Container>
  )
}

export default Header
