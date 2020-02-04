export const timeConversion = millisec => {
  var seconds = (millisec / 1000).toFixed(1)

  var minutes = (millisec / (1000 * 60)).toFixed(1)

  var hours = (millisec / (1000 * 60 * 60)).toFixed(1)

  if (seconds < 60) {
    return seconds + " sekúndur"
  } else if (minutes < 60) {
    return minutes + " mínútur"
  } else {
    return hours + " klukkutímar"
  }
}
