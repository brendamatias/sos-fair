import { styled } from 'styled-components'

export const Container = styled.div`
  width: 100%;

  &:has(input:focus) label {
    color: #a881e6;
  }

  input {
    margin-top: 0.5rem;
    display: flex;
    padding: 0.75rem;
    align-items: center;
    justify-content: space-between;
    border-radius: 0.375rem;
    border: 1px solid #252529;
    background-color: #111112;
    height: 2.5rem;
    color: #fbf9fe;
    font-size: 0.875rem;
    width: 100%;

    &:focus {
      outline: 1px solid #a881e6;
    }
  }
`

export const Label = styled.label`
  font-size: 0.75rem;
  letter-spacing: 0.0225rem;
`
