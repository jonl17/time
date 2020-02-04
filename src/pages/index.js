import React from "react"
import { store } from "../service"
import styled from "styled-components"

/** components */
import Projects from "../components/Projects"
import Plus from "../components/Plus"
import TeljaTakki from "../components/TeljaTakki"
import CreateJob from "../components/CreateJob"

const Body = styled.div`
  height: 100%;
  width: 100%;
`

const Sidebar = styled.div`
  height: 100%;
  width: 150px;
  position: relative;
`
export const Title = styled.h1`
  text-transform: uppercase;
`

const index = () => {
  store()
  return (
    <>
      <Body>
        <Title>Verkefni</Title>
        <Projects></Projects>
      </Body>
      <Sidebar>
        <Plus></Plus>
        <TeljaTakki></TeljaTakki>
      </Sidebar>
      <CreateJob></CreateJob>
    </>
  )
}

export default index
