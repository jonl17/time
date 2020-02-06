import styled from "styled-components"
import { COLORS } from "../../../../../constants"

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`
export const Label = styled.label`
  color: black;
  height: 100%;
  width: 100%;
`
export const Input = styled.input`
  background: ${COLORS.text};
  border: none;
  height: 100%;
  width: 100%;
  color: #445e93;
  font-size: 40px;
  margin: auto;
  text-align: center;
  font-style: italic;
`
export const SubmitButton = styled.input`
  position: absolute;
  bottom: 0;
  right: 0;
  height: 50px;
  width: 100px;
  border: 1px solid ${COLORS.text};
  background: ${COLORS.blue};
  font-size: 20px;
  padding: 0;
  margin: 0;
  border-radius: 10px;
`
