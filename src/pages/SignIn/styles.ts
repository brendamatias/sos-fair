import { styled } from 'styled-components'

export const Container = styled.div`
  padding: 2rem 1.5rem;
  max-width: 768px;
  margin: 0 auto;

  > div {
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: calc(100vh - 4rem);
    align-items: center;
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`

export const Button = styled.button`
  background-color: #7450ac;
  color: #fbf9fe;
  border-radius: 6px;
  height: 2.5rem;
  width: 100%;

  &:not(:disabled):hover {
    background-color: #523480;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`
