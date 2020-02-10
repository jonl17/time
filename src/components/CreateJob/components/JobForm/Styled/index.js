import styled from "styled-components"
import { COLORS } from "../../../../../constants"

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  padding: 15px;
  background: ${COLORS.red};
  input {
    outline: none;
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`
export const Label = styled.label`
  color: black;
  height: 100%;
  width: 100%;
`
export const Input = styled.input`
  background: ${COLORS.red};
  border: none;
  height: 100%;
  width: 100%;
  color: #445e93;
  font-size: 40px;
  margin: auto;
  text-align: center;
`
export const SubmitButton = styled.input`
  border: none;
  background: ${COLORS.blue};
  font-size: 75px;
  box-sizing: border-box;
  margin: 35px;
  width: 100px;
  height: 300px;
  margin: auto;
`
