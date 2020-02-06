import React from "react"

/** components */
import { Text } from "./Styled"

const Time = ({ time, counting }) => {
  return <Text counting={counting}>{time}</Text>
}

export default Time
