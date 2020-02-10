import styled from "styled-components"
import { COLORS } from "../../../../../../../constants"

export const Box = styled.div`
  position: absolute;
  height: 25px;
  width: 25px;
  border: ${COLORS.text} 2px solid;
  bottom: 15px;
  left: 15px;
  background: ${props =>
    props.filled === "filled" ? `${COLORS.text}` : `transparent`};
  &&:hover {
    cursor: pointer;
  }
`
