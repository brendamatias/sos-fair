import ReactModal from 'react-modal'
import { styled } from 'styled-components'

export const Modal = styled(ReactModal)`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #0c0c0d;
  padding: 1.5rem;
  border-radius: 0.375rem;
  z-index: 99999999;
  margin: auto;
  width: 100%;
  height: 300px;
`
