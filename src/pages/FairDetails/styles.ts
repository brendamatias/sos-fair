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

  &:hover {
    background-color: #523480;
  }
`

export const ProductItem = styled.li`
  background-color: #17171a;
  border: 1px solid #252529;
  border-radius: 0.5rem;
  padding: 1rem;
  position: relative;

  > div {
    display: grid;
    grid-template-columns: 1fr 0.4fr 0.4fr 0.5fr;
    align-items: center;
    gap: 2rem;

    .left {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      justify-content: right;
    }
  }

  &.bought {
    background-color: #111112;
    border-color: #17171a;
  }
`

export const ProductInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  > input {
    margin: 0.25rem;
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
      text-transform: lowercase;
    }
  }

  &.bought {
    > div {
      opacity: 0.6;

      > strong {
        font-weight: 400;
        text-decoration: line-through;
      }
    }
  }
`

export const ProductPrice = styled.div`
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
  }

  &.bought {
    opacity: 0.6;
  }
`

export const Tag = styled.div`
  display: flex;
  align-items: center;
  gap: 0.375rem;
  padding: 0.5rem 1rem;
  border-radius: 999px;
  text-transform: lowercase;
  font-size: 0.75rem;
  font-weight: 600;

  svg {
    width: 1rem;
    height: 1rem;
  }

  &.bought {
    opacity: 0.6;
  }
`
