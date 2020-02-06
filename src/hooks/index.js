import { useEffect, useRef } from "react"

export const useInterval = (callback, delay) => {
  const savedCallback = useRef()

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current()
    }
    if (delay !== null) {
      let id = setInterval(tick, delay)
      return () => clearInterval(id)
    }
  }, [delay])
}

export const useUpdateJobsWithSelected = (myJobs, selectedJobs) => {
  useEffect(() => {
    for (var i = 0; i < selectedJobs.length; i++) {
      for (var j = 0; j < myJobs.length; j++) {
        // TITLE HAS TO BE UNIQUE
        if (selectedJobs[i].title === myJobs[j].title) {
          myJobs[j] = selectedJobs[i]
        }
      }
    }
  }, [myJobs, selectedJobs])
  return myJobs
}
