import Modal from 'react-modal'
import { RouterProvider } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import router from './router'

import 'react-toastify/dist/ReactToastify.css'

Modal.setAppElement('#root')

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer theme="dark" />
    </>
  )
}

export default App
