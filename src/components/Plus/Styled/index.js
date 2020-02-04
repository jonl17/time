import styled, { css } from "styled-components"
import { COLORS } from "../../../constants"

export const Container = styled.div`
  width: 50px;
  height: 50px;
  box-sizing: border-box;
  position: absolute;
  top: 0px;
  left: 50%;
  margin-left: -25px;
  transition: 0.2s ease-in-out;
  transform: rotate(0deg);
  z-index: 8;
  ${props =>
    props.open === "open" &&
    css`
      transform: rotate(45deg);
    `}
  &&:hover {
    cursor: pointer;
  }
`
export const Line = styled.span`
  height: 1px;
  border-bottom: 4px solid ${COLORS.text};
  width: 100%;
  position: absolute;
  top: 50%;
  margin-top: -2px;
  transition: 0.2s ease-in-out;
  ${props =>
    props.two &&
    css`
      transform: rotate(90deg);
    `}
`
