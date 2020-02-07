const OLD_KEY = "SAVEDJOBS"
const KEY = "NEWSAVEDJOBS"

const validateStore = () => {
  return localStorage
}

export const store = () => {
  if (validateStore()) {
    console.log(localStorage)
  }
}

// for testing
export const clearStore = () => {
  if (validateStore()) {
    localStorage.clear()
  }
}

// saves jobs to local storage
export const saveJobs = jobs => {
  if (validateStore()) {
    // make sure we aren't saving exact same data
    let currentlySaved = localStorage.getItem(KEY)
    if (currentlySaved !== JSON.stringify(jobs)) {
      localStorage.setItem(KEY, JSON.stringify(jobs))
      console.log(
        "Saved MYJOBS to localStorage, stringified items: " +
          localStorage.getItem(KEY)
      )
    }
  }
}
// load jobs from local storage
export const loadJobs = () => {
  // first check if we have an old version saved in storage
  // then clean it up
  if (validateStore() && localStorage.getItem(OLD_KEY)) {
    localStorage.removeItem(OLD_KEY)
  }
  if (validateStore() && localStorage.getItem(KEY)) {
    return JSON.parse(localStorage.getItem(KEY))
  }
  return []
}
