import logo from '../../assets/logo.svg'
import { Container } from './styles'

export const Header = () => {
  return (
    <Container>
      <div>
        <img src={logo} alt="SOS Feira logo" />

        <button>Sair</button>
      </div>
    </Container>
  )
}
