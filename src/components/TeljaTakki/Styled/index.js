import styled, { css } from "styled-components"
import { COLORS } from "../../../constants"

export const Container = styled.div`
  height: 65px;
  width: 100%;
  border: 4px solid ${COLORS.text};
  border-radius: 10px;
  position: absolute;
  bottom: 50px;
  right: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.2s ease-in-out;
  ${props =>
    props.counting &&
    css`
      background: ${COLORS.blue};
    `}
  &&:hover {
    transform: scale(0.95);
    cursor: pointer;
  }
`
export const Text = styled.h1`
  margin: 0;
`