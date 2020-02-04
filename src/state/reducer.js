import {
  SET_DEVICE,
  SELECT_JOB,
  DESELECT_JOB,
  TRIGGER_CREATE_JOB_WINDOW,
} from "./action"

const initialState = {
  device: undefined,
  selectedJobs: [],
  createJobWindowOpen: false,
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
    default:
      return state
  }
}
