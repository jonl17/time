import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"

/** components */
import { Container, Text } from "./Styled"
import { TRIGGER_COUNTING } from "../../state/action"

const Teljatakki = () => {
  const selectedJobs = useSelector(state => state.reducer.selectedJobs)
  const counting = useSelector(state => state.reducer.counting)
  const dispatch = useDispatch()

  // make sure we save jobs if none are selected
  useEffect(() => {
    console.log("save jobs")
  }, [selectedJobs])
  return (
    <Container
      counting={counting && selectedJobs.length > 0}
      onClick={() => {
        if (selectedJobs.length > 0) {
          if (counting) {
            console.log("save jobs")
          }
          dispatch({ type: TRIGGER_COUNTING })
        }
      }}
    >
      <Text>Telja</Text>
    </Container>
  )
}

export default Teljatakki
