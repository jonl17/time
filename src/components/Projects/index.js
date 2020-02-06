import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { TRIGGER_COUNTING } from "../../state/action"

/** components */
import { Container } from "./Styled"
import Project from "./components/Project"

// overview of projects and registered time worked
const Projects = () => {
  const stopCountingIfNoJobIsSelected = (dispatch, selectedJob, counting) => {
    if (selectedJob === undefined && counting) {
      dispatch({ type: TRIGGER_COUNTING })
    }
  }
  const dispatch = useDispatch()
  const counting = useSelector(state => state.reducer.counting)
  const selectedJob = useSelector(state => state.reducer.selectedJob)
  stopCountingIfNoJobIsSelected(dispatch, selectedJob, counting)

  const myJobs = useSelector(state => state.reducer.myJobs)
  return (
    <>
      <Container>
        {myJobs !== undefined ? (
          myJobs.map((project, index) => (
            <Project key={index} job={project}></Project>
          ))
        ) : (
          <></>
        )}
      </Container>
    </>
  )
}

export default Projects
