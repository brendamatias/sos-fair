import { Link as ReactLink } from 'react-router-dom'
import { styled } from 'styled-components'

export const Container = styled.header`
  border-bottom: 1px solid #202024;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 999;
  background-color: #0c0c0d;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 768px;
    margin: 0 auto;
    padding: 1.5rem 1rem;

    > div {
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    @media (max-width: 650px) {
      padding: 1rem;
    }
  }
`

export const Link = styled(ReactLink)`
  display: flex;
  align-items: center;

  > .icon {
    display: none;
  }

  @media (max-width: 650px) {
    > .icon {
      display: block;
    }

    > .logo {
      display: none;
    }
  }
`

export const Total = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  border: 1px solid #202024;
  padding: 0.675rem 1rem;
  border-radius: 0.375rem;
  font-weight: 600;
  color: #afabb6;

  > div {
    display: flex;
    flex-direction: column;

    > span {
      font-size: 0.675rem;
      text-align: left;
    }

    > p {
      font-size: 0.875rem;
      text-align: left;
    }
  }
`

export const Button = styled.button`
  display: flex;
  align-items: center;
  padding: 0.75rem;
  border-radius: 0.375rem;
  color: #fbf9fe;
  height: 40px;

  &:hover {
    background-color: #7450ac;
  }

  > svg {
    width: 1rem;
  }
`
