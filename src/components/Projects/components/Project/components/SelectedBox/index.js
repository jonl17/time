/** components */
import { Box } from "./Styled"

/** tech */
import React from "react"

const SelectedBox = ({ selected, onClick }) => {
  return <Box onClick={onClick} filled={selected ? "filled" : "empty"}></Box>
}

export default SelectedBox
