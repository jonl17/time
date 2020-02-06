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
  selectedJobs: [],
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
      return { ...state, selectedJobs: [...state.selectedJobs, action.job] }
    case DESELECT_JOB:
      let newSelectedJobs = []
      for (var i = 0; i < state.selectedJobs.length; i++) {
        if (state.selectedJobs[i].title !== action.job.title) {
          newSelectedJobs.push(state.selectedJobs[i])
        }
      }
      return { ...state, selectedJobs: newSelectedJobs }
    case TRIGGER_CREATE_JOB_WINDOW:
      return { ...state, createJobWindowOpen: !state.createJobWindowOpen }
    case INIT_MY_JOBS:
      return { ...state, myJobs: action.jobs } // should return a list of job objects from local storage
    case ADD_NEW_JOB:
      console.log(state.myJobs)
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
