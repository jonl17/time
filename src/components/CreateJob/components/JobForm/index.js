import React from "react"
import { useDispatch } from "react-redux"
import { useForm } from "react-hook-form"
import {
  ADD_NEW_JOB,
  TRIGGER_CREATE_JOB_WINDOW,
} from "../../../../state/action"
import { generateNewJob } from "../../../../methods"

/** components */
import { Form, Label, Input, SubmitButton } from "./Styled"

const JobForm = () => {
  const { register, handleSubmit } = useForm()
  const dispatch = useDispatch()
  const onSubmit = job => {
    dispatch({ type: TRIGGER_CREATE_JOB_WINDOW })
    const newJob = generateNewJob(job)
    console.log(newJob)
    dispatch({ type: ADD_NEW_JOB, job: newJob })
  }
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Label>
        <Input
          ref={register({ required: true })}
          placeholder="Nafn..."
          type="text"
          name="title"
        ></Input>
      </Label>
      <Label>
        <Input
          ref={register}
          placeholder="Byrjunartími..."
          type="number"
          name="time"
          defaultValue={0}
        ></Input>
      </Label>
      <SubmitButton type="submit" value="Búa til"></SubmitButton>
    </Form>
  )
}

export default JobForm
