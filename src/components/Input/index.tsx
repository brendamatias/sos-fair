import { InputHTMLAttributes } from 'react'
import { Container, Label } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string
  label?: string
}

export const Input = ({ id, label, ...props }: InputProps) => {
  return (
    <Container>
      {label && <Label htmlFor={id}>{label}</Label>}
      <input id={id} type="text" {...props} />
    </Container>
  )
}
