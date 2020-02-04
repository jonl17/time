import React from "react"
import { store } from "../service"

/** components */
import Projects from "../components/Projects"

const index = () => {
  store()
  return (
    <>
      <Projects></Projects>
    </>
  )
}

export default index
