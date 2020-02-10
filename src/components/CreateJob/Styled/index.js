import styled, { css } from "styled-components"
import { COLORS } from "../../../constants"

// closes popup window when clicked
export const Sensor = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  z-index: 6;
  opacity: 0;
  pointer-events: none;
  ${props =>
    props.open === "open" &&
    css`
      opacity: 1;
      pointer-events: all;
    `}
`

export const Container = styled.div`
  z-index: 8;
  position: fixed;
  opacity: 0;
  pointer-events: none;
  transition: 0.2s ease-in-out;
  ${props =>
    props.open === "open" &&
    css`
      opacity: 1;
      pointer-events: all;
    `}
  height: 85vh;
  width: 100%;
  left: 0;
  top: 100px;
  ${props =>
    props.device === `browser` &&
    css`
      height: 400px;
      width: 600px;
      top: 50%;
      left: 50%;
      margin-left: -300px;
      margin-top: -200px;
      border: 4px solid ${COLORS.text};
    `}
`
