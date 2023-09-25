import logo from '@/assets/logo.svg'
import { Container } from './styles'
import { useNavigate } from 'react-router-dom'

export const Header = () => {
  const navigate = useNavigate()

  const logout = () => {
    localStorage.removeItem('sos-fair')
    navigate('/')
  }

  return (
    <Container>
      <div>
        <img src={logo} alt="SOS Feira logo" />

        <button onClick={logout}>Sair</button>
      </div>
    </Container>
  )
}
