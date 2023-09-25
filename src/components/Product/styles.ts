import { styled } from 'styled-components'

export const Container = styled.div`
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

    > div:last-child {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      justify-content: right;
    }

    @media (max-width: 650px) {
      display: flex;
      justify-content: space-between;
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

  > button {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0.25rem;
    width: 1rem;
    height: 1rem;
    border: 1px solid #a881e6;
    border-radius: 0.13rem;

    > svg {
      color: #fbf9fe;
    }

    &.bought {
      background-color: #2f723d;
      border-color: #2f723d;
    }
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

  @media (max-width: 650px) {
    padding: 0.5rem;

    span {
      display: none;
    }
  }
`
