import React from "react"
import { useSelector, useDispatch } from "react-redux"

/** components */
import { Container, Text } from "./Styled"
import { TRIGGER_COUNTING } from "../../state/action"

const Teljatakki = () => {
  const selectedJob = useSelector(state => state.reducer.selectedJob)
  const counting = useSelector(state => state.reducer.counting)
  const dispatch = useDispatch()

  return (
    <Container
      counting={counting && selectedJob}
      onClick={() => {
        if (selectedJob) {
          dispatch({ type: TRIGGER_COUNTING })
        }
      }}
    >
      <Text>Telja</Text>
    </Container>
  )
}

export default Teljatakki
