import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { TRIGGER_COUNTING } from "../../state/action"

/** components */
import { Container } from "./Styled"
import Project from "./components/Project"

// fake projects for kickstarting the project:
// the projects will be saved in localstorage as a list of object{title, time(ms)}
const savedProjects = [
  { title: "Borgarlínan", time: 90000090 },
  { title: "Hjörtur", time: 2200009 },
  { title: "Gummi", time: 0 },
]

// overview of projects and registered time worked
const Projects = () => {
  const stopCountingIfNoJobIsSelected = (dispatch, selectedJobs, counting) => {
    if (selectedJobs.length === 0 && counting) {
      dispatch({ type: TRIGGER_COUNTING })
    }
  }
  const dispatch = useDispatch()
  const counting = useSelector(state => state.reducer.counting)
  const selectedJobs = useSelector(state => state.reducer.selectedJobs)
  stopCountingIfNoJobIsSelected(dispatch, selectedJobs, counting)

  const myJobs = useSelector(state => state.reducer.myJobs)
  return (
    <>
      <Container>
        {myJobs !== null ? (
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
