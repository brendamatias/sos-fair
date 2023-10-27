import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { CircleDollarSign, LogOut } from 'lucide-react'

import logo from '@/assets/logo.svg'
import logoIcon from '@/assets/logo-icon.svg'
import ProductService from '@/services/product.service'
import { Product } from '@/types'
import { formatPrice } from '@/utils/format'

import { Button, Container, Link, Total } from './styles'

export const Header = () => {
  const { id = '' } = useParams()
  const navigate = useNavigate()
  const [products, setProducts] = useState<Product[]>([])

  // TO DO: Remover
  const getProducts = async () => {
    if (!id) return

    try {
      const { data } = await ProductService.getProductList(id)

      setProducts(data)
    } catch (error: any) {
      toast.error(
        error?.response?.data?.error?.message ||
          'Ocorreu um erro, tente novamente',
      )
    }
  }

  const logout = () => {
    localStorage.removeItem('sos-fair')
    navigate('/')
  }

  const getTotal = () => {
    return products.reduce(
      (accumulator, currentValue) =>
        accumulator + currentValue.price * currentValue.qty,
      0,
    )
  }

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <Container>
      <div>
        <Link to="/home">
          <img className="logo" src={logo} alt="SOS Feira logo" />
          <img className="icon" src={logoIcon} alt="SOS Feira logo" />
        </Link>

        <div>
          <Total>
            <CircleDollarSign />

            <div>
              <span>Previsto</span>
              <p>{formatPrice(getTotal())}</p>
            </div>
            <div>
              <span>Gasto</span>
              <p>{formatPrice(getTotal())}</p>
            </div>
          </Total>
          <Button onClick={logout}>
            <LogOut />
          </Button>
        </div>
      </div>
    </Container>
  )
}
