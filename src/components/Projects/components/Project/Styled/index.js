import styled, { css } from "styled-components"

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
  }
  ${props =>
    props.selected &&
    css`
      border: 0px solid;
      background: linear-gradient(145deg, #4da7db, #5bc6ff);
    `}
`
export const Title = styled.p`
  font-size: 23px;
  font-weight: bold;
`
