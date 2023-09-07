import { useState } from 'react'
import { Container, Label } from './styles'

interface InputProps {
  id: string
  label: string
}

export const Input = ({ id, label }: InputProps) => {
  const [value, setValue] = useState('')

  return (
    <Container>
      <Label htmlFor={id}>{label}</Label>
      <input
        id={id}
        type="text"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
    </Container>
  )
}
