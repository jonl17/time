import React, { useState, useEffect } from "react"
import { timeConversion } from "../../../../methods"
import { useDispatch, useSelector } from "react-redux"
import { SELECT_JOB, INIT_MY_JOBS } from "../../../../state/action"
import { useInterval } from "../../../../hooks"

/** components */
import { Container } from "./Styled"
import Time from "./components/Time"
import Title from "./components/Title"
import SelectedBox from "./components/SelectedBox"
import Delete from "./components/Delete"

const updateJobTime = (myJobs, thisJob, dispatch, time) => {
  let newJobs = myJobs
  for (var i = 0; i < newJobs.length; i++) {
    if (newJobs[i].id === thisJob.id) {
      newJobs[i].time = time
      dispatch({ type: INIT_MY_JOBS, jobs: newJobs })
    }
  }
}

const Project = ({ job }) => {
  const [time, incrementTime] = useState(job.time)
  const [selected, select] = useState(false)

  const dispatch = useDispatch()

  const counting = useSelector(state => state.reducer.counting)
  const myJobs = useSelector(state => state.reducer.myJobs)
  const selectedJob = useSelector(state => state.reducer.selectedJob)

  useEffect(() => {
    if (selectedJob !== undefined && selectedJob.id === job.id) {
      select(true)
    } else {
      select(false)
    }
  }, [selectedJob, job.id])

  // if selected && counting , increment this item.time in myJobs array
  useInterval(
    () => (selected && counting ? incrementTime(t => t + 1000) : {}),
    1000
  )
  useEffect(() => {
    updateJobTime(myJobs, job, dispatch, time)
  }, [time, job, myJobs, dispatch])

  const selectionCallback = () => {
    select(!selected)
    if (selectedJob === job) {
      dispatch({ type: SELECT_JOB, job: undefined })
    } else {
      dispatch({ type: SELECT_JOB, job: job })
    }
  }

  return (
    <>
      <Container>
        <Delete job={job}></Delete>
        <Title job={job} text={job.title}></Title>
        <Time
          counting={counting && selected}
          time={timeConversion(time)}
        ></Time>
        <SelectedBox
          onClick={() => selectionCallback()}
          selected={selectedJob !== undefined && selectedJob.id === job.id}
        ></SelectedBox>
      </Container>
    </>
  )
}

export default Project
