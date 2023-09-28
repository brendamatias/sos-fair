import { useState } from 'react'
import { QrReader } from 'react-qr-reader'
import { toast } from 'react-toastify'

import ProductService from '@/services/product.service'

import { Modal } from './styles'

interface QrcodeScannerProps {
  fairId: string
  isOpen: boolean
  onSubmit: () => void
  closeModal: () => void
}

export const QrcodeScanner = ({
  fairId,
  isOpen,
  onSubmit,
  closeModal,
}: QrcodeScannerProps) => {
  const [loading, setLoading] = useState(false)

  const createProducts = async (url: string) => {
    setLoading(true)
    toast.success(url)

    try {
      await ProductService.createProducts(fairId, url)

      toast.success('Produtos cadastrados com sucesso!')

      onSubmit()
      closeModal()
    } catch (error: any) {
      toast.error(
        error?.response?.data?.error?.message ||
          'Ocorreu um erro, tente novamente',
      )

      closeModal()
    }
  }

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
      <QrReader
        constraints={{
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          aspectRatio: '1',
          facingMode: 'environment',
        }}
        scanDelay={250}
        onResult={(result) => {
          if (result && !loading) {
            createProducts(result.getText())
          }
        }}
        videoContainerStyle={{}}
        videoStyle={{}}
      />
    </Modal>
  )
}
