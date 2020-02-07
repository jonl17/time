import React from "react"
import styled from "styled-components"

/** components */
import Projects from "../components/Projects"
import CreateJob from "../components/CreateJob"

const Body = styled.div`
  height: 100%;
  width: 100%;
`

export const Title = styled.h1`
  text-transform: uppercase;
`

const index = () => {
  return (
    <>
      <Body>
        <Title>Verkefni</Title>
        <Projects></Projects>
      </Body>
      <CreateJob></CreateJob>
    </>
  )
}

export default index
