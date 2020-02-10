import styled, { css } from "styled-components"

export const Text = styled.p`
  font-size: 20px;
  ${props =>
    props.counting &&
    css`
      color: #abdf75;
      font-weight: bold;
    `}
`
