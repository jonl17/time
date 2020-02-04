import React from "react"
import { timeConversion } from "../../../../methods"

/** components */
import { Container, Title, Time } from "./Styled"

const Project = ({ title, time }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Time>Skráðir tímar: {timeConversion(time)}</Time>
    </Container>
  )
}

export default Project
