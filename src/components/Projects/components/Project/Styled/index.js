import styled, { css } from "styled-components"
import { COLORS } from "../../../../../constants"

export const Container = styled.div`
  border: 4px solid;
  display: inline-block;
  box-sizing: border-box;
  padding: 15px;
  height: 100%;
  width: 100%;
  border-radius: 10px;
  transition: 0.2s ease-in-out;
  &&:hover {
    cursor: pointer;
    background: linear-gradient(145deg, #4da7db, #5bc6ff);
  }
  ${props =>
    props.selected &&
    css`
      border: none;
      background: linear-gradient(145deg, #4da7db, #5bc6ff);
      box-shadow: 10px 10px 0px ${COLORS.blue};
    `}
`
export const Title = styled.p`
  font-size: 23px;
  font-weight: bold;
`
