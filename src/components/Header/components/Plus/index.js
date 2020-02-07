import React from "react"
import { useDispatch, useSelector } from "react-redux"

/** components */
import { Container, Line } from "./Styled"
import { TRIGGER_CREATE_JOB_WINDOW } from "../../../../state/action"

const Plus = () => {
  const dispatch = useDispatch()
  const createJobWindowOpen = useSelector(
    state => state.reducer.createJobWindowOpen
  )
  return (
    <Container
      open={createJobWindowOpen ? "open" : "closed"}
      onClick={() => dispatch({ type: TRIGGER_CREATE_JOB_WINDOW })}
    >
      <Line one></Line>
      <Line two></Line>
    </Container>
  )
}

export default Plus
