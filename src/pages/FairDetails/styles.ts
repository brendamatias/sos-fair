import { styled } from 'styled-components'

export const Container = styled.div`
  padding: 2rem 1.5rem 5.5rem 1.5rem;
  max-width: 768px;
  margin: 0 auto;

  > h1 {
    font-weight: bold;
    font-size: 1.5rem;
    letter-spacing: 0.03rem;
  }

  > ul {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-top: 2rem;
  margin-bottom: 2.5rem;

  > .inputs {
    display: flex;
    align-items: flex-end;
    gap: 0.75rem;

    > .buttons {
      display: flex;
      gap: 0.75rem;
      align-items: center;
    }
  }
`

export const Button = styled.button`
  background-color: #7450ac;
  border-radius: 100%;
  height: 2.5rem;
  width: 2.5rem;

  > svg {
    width: 1rem;
    color: #fff;
  }

  &:hover {
    background-color: #523480;
  }
`
