export const SET_DEVICE = "SET_DEVICE"
export const setDevice = width => ({
  type: SET_DEVICE,
  width,
})
export const SELECT_JOB = "SELECT_JOB"
export const selectJob = job => ({
  type: SELECT_JOB,
  job,
})
export const TRIGGER_CREATE_JOB_WINDOW = "TRIGGER_CREATE_JOB_WINDOW"
export const triggerCreateJobWindow = () => ({
  type: TRIGGER_CREATE_JOB_WINDOW,
})
export const INIT_MY_JOBS = "INIT_MY_JOBS"
export const initMyJobs = jobs => ({
  type: INIT_MY_JOBS,
  jobs,
})
export const ADD_NEW_JOB = "ADD_NEW_JOB"
export const addNewJob = job => ({
  type: ADD_NEW_JOB,
  job,
})
export const TRIGGER_COUNTING = "TRIGGER_COUNTING"
export const triggerCounting = () => ({
  type: TRIGGER_COUNTING,
})
export const DELETE_JOB = "DELETE_JOB"
export const deleteJob = job => ({
  type: DELETE_JOB,
  job,
})
