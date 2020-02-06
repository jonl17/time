export const timeConversion = millisec => {
  var seconds = (millisec / 1000).toFixed(0)

  var minutes = (millisec / (1000 * 60)).toFixed(0)

  var hours = (millisec / (1000 * 60 * 60)).toFixed(0)

  return hours + " klst, " + minutes + " mín, " + seconds + " sek."
}
