import React, { useState, useEffect } from "react"
import { timeConversion } from "../../../../methods"
import { useDispatch } from "react-redux"

/** components */
import { Container, Title, Time } from "./Styled"
import { SELECT_JOB, DESELECT_JOB } from "../../../../state/action"

const Project = ({ job }) => {
  const [selected, select] = useState(false)
  const dispatch = useDispatch()
  useEffect(() => {
    if (selected) {
      dispatch({ type: SELECT_JOB, job: job })
    } else {
      dispatch({ type: DESELECT_JOB, job: job })
    }
  }, [selected, job, dispatch])
  return (
    <Container onClick={() => select(!selected)} selected={selected}>
      <Title>{job.title}</Title>
      <Time>Skráðir tímar: {timeConversion(job.time)}</Time>
    </Container>
  )
}

export default Project
