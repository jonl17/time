import React from "react"
import { useSelector } from "react-redux"

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
  const selectedJobs = useSelector(state => state.reducer.selectedJobs)
  console.log(selectedJobs)
  return (
    <>
      <Container>
        {savedProjects.map((project, index) => (
          <Project key={index} job={project}></Project>
        ))}
      </Container>
    </>
  )
}

export default Projects
