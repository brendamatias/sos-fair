import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import logo from '@/assets/logo.svg'
import { Input } from '@/components'
import AuthService from '@/services/auth.service'

import { Button, Container, Form } from './styles'

export const SignIn: React.FC = () => {
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    setLoading(true)

    try {
      const { data } = await AuthService.signIn({
        email,
        password,
      })

      localStorage.setItem('sos-fair', data.token)

      setLoading(false)
      navigate('/home')
    } catch (error: any) {
      setLoading(false)
      toast.error(
        error?.response?.data?.error?.message ||
          'Ocorreu um erro, tente novamente',
      )
    }
  }

  return (
    <Container>
      <div>
        <div>
          <img src={logo} alt="SOS Feira logo" />
          <h1>Faça seu login na plataforma</h1>
        </div>

        <Form onSubmit={handleSubmit}>
          <Input
            id="email"
            label="E-mail"
            value={email}
            type="email"
            onChange={(event) => setEmail(event.target.value)}
          />
          <Input
            id="password"
            label="Senha"
            value={password}
            type="password"
            onChange={(event) => setPassword(event.target.value)}
          />

          <Button type="submit" disabled={loading || !email || !password}>
            Entrar
          </Button>
        </Form>
      </div>
    </Container>
  )
}
