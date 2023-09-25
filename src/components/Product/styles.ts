import { styled } from 'styled-components'

export const Container = styled.div`
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