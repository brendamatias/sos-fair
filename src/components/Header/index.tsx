import { Link, useNavigate } from 'react-router-dom'

import logo from '@/assets/logo.svg'

import { Container } from './styles'

export const Header = () => {
  const navigate = useNavigate()

  const logout = () => {
    localStorage.removeItem('sos-fair')
    navigate('/')
  }

  return (
    <Container>
      <div>
        <Link to="/home">
          <img src={logo} alt="SOS Feira logo" />
        </Link>

        <button onClick={logout}>Sair</button>
      </div>
    </Container>
  )
}
