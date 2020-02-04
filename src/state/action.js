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
export const DESELECT_JOB = "DESELECT_JOB"
export const deselectJob = job => ({
  type: DESELECT_JOB,
  job,
})
export const TRIGGER_CREATE_JOB_WINDOW = "TRIGGER_CREATE_JOB_WINDOW"
export const triggerCreateJobWindow = () => ({
  type: TRIGGER_CREATE_JOB_WINDOW,
})
