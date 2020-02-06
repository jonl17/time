import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { TRIGGER_CREATE_JOB_WINDOW } from "../../state/action"

/** components */
import { Container, Sensor } from "./Styled"
import JobForm from "./components/JobForm"

const Createjob = () => {
  const createJobWindowOpen = useSelector(
    state => state.reducer.createJobWindowOpen
  )
  const dispatch = useDispatch()
  return (
    <>
      <Sensor
        open={createJobWindowOpen ? "open" : "closed"}
        onClick={() => dispatch({ type: TRIGGER_CREATE_JOB_WINDOW })}
      ></Sensor>
      <Container open={createJobWindowOpen ? "open" : "closed"}>
        <JobForm></JobForm>
      </Container>
    </>
  )
}

export default Createjob
