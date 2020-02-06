import React, { useState, useEffect } from "react"
import { timeConversion } from "../../../../methods"
import { useDispatch, useSelector } from "react-redux"
import {
  SELECT_JOB,
  DESELECT_JOB,
  INIT_MY_JOBS,
} from "../../../../state/action"
import { useInterval } from "../../../../hooks"

/** components */
import { Container, Title } from "./Styled"
import Time from "./components/Time"

const updateJobTime = (myJobs, thisJob, dispatch, time) => {
  let newJobs = myJobs
  for (var i = 0; i < newJobs.length; i++) {
    if (newJobs[i].title === thisJob.title) {
      newJobs[i].time = time
      dispatch({ type: INIT_MY_JOBS, jobs: newJobs })
    }
  }
}

const Project = ({ job }) => {
  const [selected, select] = useState(false)
  const [time, incrementTime] = useState(job.time)
  const dispatch = useDispatch()
  const counting = useSelector(state => state.reducer.counting)
  const myJobs = useSelector(state => state.reducer.myJobs)
  useEffect(() => {
    if (selected) {
      dispatch({ type: SELECT_JOB, job: job })
    } else {
      dispatch({ type: DESELECT_JOB, job: job })
    }
  }, [selected, job, dispatch])
  // if selected && counting , increment this item.time in myJobs array
  useInterval(
    () => (selected && counting ? incrementTime(t => t + 1000) : {}),
    1000
  )
  useEffect(() => {
    updateJobTime(myJobs, job, dispatch, time)
  }, [time, job, myJobs, dispatch])
  return (
    <Container
      onClick={() => {
        select(!selected)
      }}
      selected={selected}
    >
      <Title>{job.title}</Title>
      <Time time={timeConversion(time)}></Time>
    </Container>
  )
}

export default Project
