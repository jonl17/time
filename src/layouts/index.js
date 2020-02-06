import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { SET_DEVICE, INIT_MY_JOBS } from "../state/action"
import { useInterval, useUpdateJobsWithSelected } from "../hooks"
import { saveJobs, loadJobs } from "../service"
import { LOGIC } from "../constants"

/** components */
import { GlobalStyle } from "../components/GlobalStyle"
import { PageContainer } from "./Styled"

const Layout = ({ children }) => {
  const dispatch = useDispatch()

  // detect device
  const callBack = () => {
    dispatch({ type: SET_DEVICE, width: window.innerWidth })
  }
  useEffect(() => {
    window.addEventListener("resize", callBack)
    return () => {
      window.removeEventListener("resize", callBack)
    }
  })

  // init saved jobs
  useEffect(() => {
    dispatch({ type: INIT_MY_JOBS, jobs: loadJobs() })
  }, [dispatch])

  // save jobs at an interval
  const myJobs = useSelector(state => state.reducer.myJobs)
  const selectedJobs = useSelector(state => state.reducer.selectedJobs)
  let updatedJobs = useUpdateJobsWithSelected(myJobs, selectedJobs)
  useInterval(() => saveJobs(updatedJobs), LOGIC.savingInterval)

  return (
    <>
      <GlobalStyle></GlobalStyle>
      <PageContainer>{children}</PageContainer>
    </>
  )
}

export default Layout
