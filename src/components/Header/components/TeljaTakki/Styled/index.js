import styled, { css } from "styled-components"
import { COLORS } from "../../../../../constants"

export const Container = styled.div`
  height: 75px;
  width: 100px;
  border: 4px solid ${COLORS.text};
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.2s ease-in-out;
  ${props =>
    props.counting &&
    css`
      background: ${COLORS.lightblue};
    `}
  &&:hover {
    transform: scale(0.95);
    cursor: pointer;
  }
`
export const Text = styled.h1`
  margin: 0;
`
