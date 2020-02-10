import styled from "styled-components"
import { COLORS } from "../../../../../../../constants"

export const Button = styled.div`
  height: 25px;
  width: 25px;
  position: absolute;
  top: 15px;
  right: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  &&:hover {
    cursor: pointer;
  }
`
export const Line = styled.div`
  width: 100%;
  height: 1px;
  border-top: 4px solid ${COLORS.text};
  transform: translateY(${props => (props.one ? "3px" : "-2.5px")})
    rotate(${props => (props.one ? "45deg" : "-45deg")});
`
