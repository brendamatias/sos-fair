import { styled } from 'styled-components'

export const Container = styled.div`
  padding: 2rem 1.5rem 5.5rem 1.5rem;
  max-width: 768px;
  margin: 0 auto;

  > div:first-child {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;

    > h1 {
      font-weight: bold;
      font-size: 1.5rem;
      letter-spacing: 0.03rem;
    }

    > button {
      font-size: 0.875rem;
      color: #afabb6;

      &:hover {
        color: #7450ac;
      }
    }
  }

  > ul {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    margin-top: 2rem;
  }
`

export const SearchContainer = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 0.75rem;
  margin-top: 1rem;
`

export const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  background-color: #7450ac;
  border-radius: 0.375rem;
  height: 2.5rem;
  padding: 0.75rem 1rem;
  font-weight: 600;
  font-size: 0.875rem;
  color: #fbf9fe;

  > svg {
    width: 1rem;
    color: #fff;
  }

  &:hover {
    background-color: #523480;
  }

  @media (max-width: 650px) {
    padding: 0.75rem;

    span {
      display: none;
    }
  }
`
