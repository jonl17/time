import styled from "styled-components"
import { COLORS } from "../../../../../../../constants"

export const Input = styled.input`
  background: transparent;
  border: none;
  font-size: 23px;
  font-weight: bold;
  color: ${COLORS.text};
  width: 100%;
  ::placeholder {
    ${COLORS.text};
  }
  ::-webkit-input-placeholder {
    ${COLORS.text};
  }
`
