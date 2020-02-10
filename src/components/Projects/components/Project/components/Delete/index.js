/** components */
import { Button, Line } from "./Styled"
/** tech */
import React from "react"
import { useDispatch } from "react-redux"
import { DELETE_JOB } from "../../../../../../state/action"

const Delete = ({ job }) => {
  const dispatch = useDispatch()
  return (
    <Button onClick={() => dispatch({ type: DELETE_JOB, job: job })}>
      <Line one></Line>
      <Line two></Line>
    </Button>
  )
}

export default Delete
