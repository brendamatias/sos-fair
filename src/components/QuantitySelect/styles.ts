import { styled } from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 1px;

  > .input-container {
    &:has(input:focus) label {
      color: #a881e6;
    }
  }

  > .measure {
    position: relative;

    > .measure-select {
      position: relative;

      &:has(input:checked) label {
        color: #a881e6;
      }

      input {
        all: unset;
        position: absolute;
        inset: 0;
        cursor: pointer;
        z-index: 3;

        &:focus + .select-button,
        &:checked + .select-button {
          outline: 1px solid #a881e6;
        }
      }
    }

    ul {
      display: none;
      margin-top: 0.25rem;
      border-radius: 0.375rem;
      border: 1px solid #252529;
      background-color: #17171a;
      position: absolute;
      width: 100%;
      z-index: 10;

      &.active {
        display: block;
      }
    }
  }
`

export const Input = styled.input`
  margin-top: 0.5rem;
  display: flex;
  padding: 0.75rem;
  align-items: center;
  justify-content: space-between;
  border-radius: 0.375rem 0 0 0.375rem;
  border: 1px solid #252529;
  background-color: #111112;
  height: 2.5rem;
  color: #fbf9fe;
  font-size: 0.875rem;
  width: 5.5rem;
  margin-right: -2px;

  &:focus {
    outline: 1px solid #a881e6;
  }
`

export const Label = styled.label`
  font-size: 0.75rem;
  letter-spacing: 0.0225rem;
`

export const Select = styled.div`
  margin-top: 0.5rem;
  display: flex;
  padding: 0.75rem;
  align-items: center;
  justify-content: space-between;
  border-radius: 0 0.375rem 0.375rem 0;
  border: 1px solid #252529;
  background-color: #17171a;
  font-size: 0.875rem;
  height: 2.5rem;
  width: 4.5rem;
`

export const SelectedValue = styled.div`
  color: #afabb6;
  text-transform: uppercase;
  font-size: 0.625rem;
`

export const ArrowIcons = styled.div`
  svg {
    display: none;
    width: 1rem;
    height: 1rem;
    color: #afabb6;

    &.active {
      display: block;
    }
  }
`

export const Option = styled.li`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem;
  font-size: 0.875rem;
  position: relative;

  &:not(:last-child) {
    border-bottom: 1px solid #252529;
  }

  .label {
    color: #fbf9fe;
  }

  input {
    all: unset;
    position: absolute;
    inset: 0;
    cursor: pointer;
  }

  svg {
    width: 1rem;
    height: 1rem;

    &:last-child {
      margin-left: auto;
      color: #a881e6;
      display: none;
    }
  }

  &:has(input:checked),
  &:hover {
    background-color: #252529;
    border-bottom: 1px solid #252529;
  }

  &:has(input:focus) {
    outline: 1px solid #a881e6;
  }

  &:has(input:checked) svg:last-child {
    display: block;
  }
`
