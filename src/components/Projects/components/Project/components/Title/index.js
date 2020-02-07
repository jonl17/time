import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { INIT_MY_JOBS } from "../../../../../../state/action"

/** components */
import { Input } from "./Styled"

const updateJobName = (thisJobID, myJobs, value, dispatch) => {
  for (var i = 0; i < myJobs.length; i++) {
    if (myJobs[i].id === thisJobID) {
      myJobs[i].title = value
      dispatch({ type: INIT_MY_JOBS, jobs: myJobs })
    }
  }
}

const Title = ({ text, job }) => {
  const dispatch = useDispatch()
  const myJobs = useSelector(state => state.reducer.myJobs)

  return (
    <Input
      onChange={e => updateJobName(job.id, myJobs, e.target.value, dispatch)}
      placeholder={text}
    ></Input>
  )
}

export default Title
