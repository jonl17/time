const validateStore = () => {
  return localStorage
}

export const store = () => {
  if (validateStore()) {
    console.log(localStorage)
  }
}
