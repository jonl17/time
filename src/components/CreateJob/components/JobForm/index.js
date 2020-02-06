import React from "react"
import { useDispatch } from "react-redux"
import { useForm } from "react-hook-form"
import {
  ADD_NEW_JOB,
  TRIGGER_CREATE_JOB_WINDOW,
} from "../../../../state/action"

/** components */
import { Form, Label, Input, SubmitButton } from "./Styled"

const JobForm = () => {
  const { register, handleSubmit } = useForm()
  const dispatch = useDispatch()
  const onSubmit = job => {
    console.log(job)
    dispatch({ type: TRIGGER_CREATE_JOB_WINDOW })
    const newJob = {
      title: job.title,
      time: job.time > 0 ? job.time * 60 * 60 * 1000 : 0, // convert to ms
    }
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
