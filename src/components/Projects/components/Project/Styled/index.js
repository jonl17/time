import styled, { css } from "styled-components"

export const Container = styled.div`
  border: 4px solid;
  display: inline-block;
  box-sizing: border-box;
  padding: 15px;
  height: 100%;
  width: 100%;
  border-radius: 10px;
  &&:hover {
    cursor: pointer;
  }
  ${props =>
    props.selected &&
    css`
      background: #445e93;
    `}
`
export const Title = styled.p`
  font-size: 23px;
  font-weight: bold;
`
export const Time = styled.p`
  font-size: 20px;
`
