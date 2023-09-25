import ReactModal from 'react-modal'
import { styled } from 'styled-components'

export const Modal = styled(ReactModal)`
  position: fixed;
  bottom: 0;
  background-color: #0c0c0d;
  padding: 1.5rem;
  border-radius: 0.375rem;
  z-index: 99999999;
  margin: 0 auto;
  width: 720px;
  left: 0;
  right: 0;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 2rem;

    > h1 {
      font-size: 1.25rem;
    }

    > button {
      color: #afabb6;

      svg {
        width: 1.2rem;
      }
    }
  }

  @media (max-width: 720px) {
    width: 100%;
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  > .inputs {
    display: flex;
    align-items: flex-end;
    gap: 0.75rem;

    > .buttons {
      display: flex;
      gap: 0.75rem;
      align-items: center;
    }

    @media (max-width: 650px) {
      flex-wrap: wrap;
    }
  }
`

export const Button = styled.button`
  background-color: #7450ac;
  border-radius: 0.375rem;
  width: 100%;
  padding: 0.75rem 1rem;
  font-weight: 600;
  font-size: 0.875rem;
  color: #fbf9fe;
  margin-top: 2rem;

  > svg {
    width: 1rem;
    color: #fff;
  }

  &:hover {
    background-color: #523480;
  }
`
