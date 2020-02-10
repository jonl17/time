import styled from "styled-components"
import { COLORS } from "../../../../../../../constants"

export const Input = styled.input`
  background: transparent;
  border: none;
  font-size: 23px;
  font-weight: bold;
  color: ${COLORS.text};
  width: 85%;
  height: 25px;
  box-sizing: border-box;
  ::placeholder {
    ${COLORS.text};
  }
  ::-webkit-input-placeholder {
    ${COLORS.text};
  }
`
