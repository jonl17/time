import React from "react"
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
  width: 150px;
  position: fixed;
  right: 0;
  top: 0;
  height: 100vh;
  box-sizing: border-box;
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
      <Sidebar>
        <Plus></Plus>
        <TeljaTakki></TeljaTakki>
      </Sidebar>
      <CreateJob></CreateJob>
    </>
  )
}

export default index
