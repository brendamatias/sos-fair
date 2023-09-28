import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { Html5QrcodeScanner } from 'html5-qrcode'

import ProductService from '@/services/product.service'

import { Modal } from './styles'

interface QrcodeScannerProps {
  fairId: string
  isOpen: boolean
  closeModal: () => void
}

export const QrcodeScanner = ({
  fairId,
  isOpen,
  closeModal,
}: QrcodeScannerProps) => {
  const [rendered, setRendered] = useState(false)
  const createProducts = async (url: string) => {
    try {
      await ProductService.createProducts(fairId, url)

      toast.success('Produtos cadastrados com sucesso!')
    } catch (error: any) {
      toast.error(
        error?.response?.data?.error?.message ||
          'Ocorreu um erro, tente novamente',
      )
    }
  }

  useEffect(() => () => setRendered(true), [])

  useEffect(() => {
    if (rendered) {
      const onScanSuccess = (decodedText: string) => {
        createProducts(decodedText)
        scanner.clear()
        closeModal()
      }

      const onScanFailure = () => {
        // toast.error('Ocorreu um erro na abertura da camera, tente novamente')
      }

      const scanner = new Html5QrcodeScanner(
        'qr-reader',
        { fps: 10, qrbox: 250 },
        false,
      )

      scanner.render(onScanSuccess, onScanFailure)
    }
  }, [rendered])

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.85)',
        },
      }}
    >
      <div id="qr-reader"></div>
    </Modal>
  )
}
