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

export const useUpdateJobsWithSelected = (myJobs, selectedJob) => {
  console.log(myJobs)
  useEffect(() => {
    if (myJobs !== undefined) {
      for (var j = 0; j < myJobs.length; j++) {
        if (selectedJob === myJobs[j]) {
          myJobs[j] = selectedJob
        }
      }
    }
  }, [myJobs, selectedJob])

  return myJobs
}
