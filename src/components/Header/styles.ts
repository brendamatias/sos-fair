import { styled } from 'styled-components'

export const Container = styled.header`
  border-bottom: 1px solid #202024;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 768px;
    margin: 0 auto;
    padding: 1.5rem;

    > a {
      display: flex;
      align-items: center;
    }

    > button {
      background-color: #7450ac;
      padding: 0.75rem 2rem;
      border-radius: 0.375rem;
      font-weight: 600;
      color: #fbf9fe;
      font-size: 0.875rem;

      &:hover {
        background-color: #523480;
      }
    }
  }
`
