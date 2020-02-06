import {
  SET_DEVICE,
  SELECT_JOB,
  DESELECT_JOB,
  TRIGGER_CREATE_JOB_WINDOW,
  INIT_MY_JOBS,
  ADD_NEW_JOB,
  TRIGGER_COUNTING,
} from "./action"

const initialState = {
  device: undefined,
  myJobs: [],
  selectedJob: undefined,
  createJobWindowOpen: false,
  counting: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_DEVICE:
      let device
      if (action.width <= 750) {
        device = `mobile`
      }
      if (action.width > 750 && action.width <= 1050) {
        device = `tablet`
      }
      if (action.width > 1050) {
        device = `browser`
      }
      return { ...state, device: device }
    case SELECT_JOB:
      return { ...state, selectedJob: action.job }
    case DESELECT_JOB:
      return { ...state, selectedJob: {} }
    case TRIGGER_CREATE_JOB_WINDOW:
      return { ...state, createJobWindowOpen: !state.createJobWindowOpen }
    case INIT_MY_JOBS:
      return { ...state, myJobs: action.jobs } // should return a list of job objects from local storage
    case ADD_NEW_JOB:
      if (state.myJobs === null) {
        return { ...state, myJobs: [action.job] }
      }
      return { ...state, myJobs: [...state.myJobs, action.job] }
    case TRIGGER_COUNTING:
      return { ...state, counting: !state.counting }
    default:
      return state
  }
}
