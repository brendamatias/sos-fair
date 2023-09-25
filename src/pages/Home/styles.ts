import { Link } from 'react-router-dom'
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
  align-items: flex-end;
  gap: 0.75rem;
  margin-top: 2rem;
  margin-bottom: 2.5rem;
`

export const Button = styled.button`
  background-color: #7450ac;
  border-radius: 100%;
  height: 2.5rem;
  width: 2.5rem;

  &:not(:disabled):hover {
    background-color: #523480;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`

export const FairItem = styled.li`
  background-color: #17171a;
  border: 1px solid #252529;
  border-radius: 0.5rem;
  padding: 1rem;
  position: relative;

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;

    .left {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      justify-content: right;
    }
  }

  &:nth-child(5n + 1) .index {
    background-color: #bb9f3a;
  }

  &:nth-child(5n + 2) .index {
    background-color: #8cad51;
  }

  &:nth-child(5n + 3) .index {
    background-color: #db5bbf;
  }

  &:nth-child(5n + 4) .index {
    background-color: #e07b67;
  }

  &:nth-child(5n + 5) .index {
    background-color: #7b94cb;
  }
`

export const FairInfo = styled(Link)`
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;

  > div:first-child {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 999px;
    font-size: 0.75rem;
    font-weight: 600;
    width: 2rem;
    height: 2rem;
    color: #edeaf0;
  }

  > div {
    > strong {
      font-size: 0.875rem;
      color: #edeaf0;
    }

    > span {
      display: block;
      font-size: 0.75rem;
      color: #afabb6;
    }
  }
`

export const FairPrice = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;

  > strong {
    font-size: 0.875rem;
    color: #edeaf0;
  }

  > span {
    display: block;
    font-size: 0.75rem;
    color: #afabb6;
    white-space: nowrap;
  }
`
