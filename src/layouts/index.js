import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { SET_DEVICE, INIT_MY_JOBS } from "../state/action"
import { useInterval, useUpdateJobsWithSelected } from "../hooks"
import { saveJobs, loadJobs, clearStore } from "../service"
import { LOGIC } from "../constants"

/** components */
import { GlobalStyle } from "../components/GlobalStyle"
import { PageContainer } from "./Styled"
import Header from "../components/Header"

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
  const selectedJob = useSelector(state => state.reducer.selectedJob)

  let updatedJobs = useUpdateJobsWithSelected(myJobs, selectedJob)
  useInterval(
    () => saveJobs(selectedJob ? updatedJobs : myJobs),
    LOGIC.savingInterval
  )

  return (
    <>
      <GlobalStyle></GlobalStyle>
      <PageContainer>
        <Header></Header>
        {children}
      </PageContainer>
    </>
  )
}

export default Layout
