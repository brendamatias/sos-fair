import { styled } from 'styled-components'

export const Container = styled.div`
  > div {
    display: none;
    margin-top: 0.25rem;
    border-radius: 0.375rem;
    border: 1px solid #252529;
    background-color: #17171a;
    position: absolute;
    right: 0;
    top: 69px;
    z-index: 3;

    &.active {
      display: block;
    }
  }
`

export const DotsButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  > svg {
    width: 1.25rem;
    height: 1.25rem;
    color: #a881e6;
  }
`

export const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 4rem 0.75rem 0.75rem;
  font-size: 0.875rem;
  position: relative;
  color: #fbf9fe;
  width: 100%;
  height: 100%;
  text-align: left;

  &:not(:last-child) {
    border-bottom: 1px solid #252529;
  }

  &:hover {
    background-color: #252529;
  }
`
