import React from "react"

/** components */
import { Container } from "./Styled"
import Project from "./components/Project"

// fake projects for kickstarting the project:

// the projects will be saved in localstorage as a list of object{title, time(ms)}
const savedProjects = [
  { title: "Borgarlínan", time: 90000090 },
  { title: "Hjörtur", time: 2200009 },
]

// overview of projects and registered time worked
const Projects = () => {
  return (
    <Container>
      {savedProjects.map(project => (
        <Project title={project.title} time={project.time}></Project>
      ))}
    </Container>
  )
}

export default Projects
