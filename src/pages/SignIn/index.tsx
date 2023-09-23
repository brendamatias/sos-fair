import { FormEvent, useState } from 'react'
import { toast } from 'react-toastify'

import { Input } from '@/components'
import { Container, Form, Button } from './styles'

import AuthService from '@/services/auth.service'
import { useNavigate } from 'react-router-dom'

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
        <h1>Faça seu login na plataforma</h1>
        <Form onSubmit={handleSubmit}>
          <Input
            id="email"
            label="E-mail"
            value={email}
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            id="password"
            label="Senha"
            value={password}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button type="submit" disabled={loading || !email || !password}>
            Entrar
          </Button>
        </Form>
      </div>
    </Container>
  )
}
