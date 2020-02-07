export const timeConversion = milliseconds => {
  //Get hours from milliseconds
  var hours = milliseconds / (1000 * 60 * 60)
  var absoluteHours = Math.floor(hours)
  var h = absoluteHours > 9 ? absoluteHours : "0" + absoluteHours

  //Get remainder from hours and convert to minutes
  var minutes = (hours - absoluteHours) * 60
  var absoluteMinutes = Math.floor(minutes)
  var m = absoluteMinutes > 9 ? absoluteMinutes : "0" + absoluteMinutes

  //Get remainder from minutes and convert to seconds
  var seconds = (minutes - absoluteMinutes) * 60
  var absoluteSeconds = Math.floor(seconds)
  var s = absoluteSeconds > 9 ? absoluteSeconds : "0" + absoluteSeconds

  return h + ":" + m + ":" + s
}

// random ID generator
// https://gist.github.com/gordonbrander/2230317
const ID = () => {
  // Math.random should be unique because of its seeding algorithm.
  // Convert it to base 36 (numbers + letters), and grab the first 9 characters
  // after the decimal.
  return (
    "_" +
    Math.random()
      .toString(36)
      .substr(2, 9)
  )
}
export const generateNewJob = data => {
  return {
    id: ID(),
    title: data.title,
    time: data.time > 0 ? data.time * 60 * 60 * 1000 : 0, // convert to ms
  }
}
