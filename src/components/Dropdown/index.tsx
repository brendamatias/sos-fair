import { useState } from 'react'
import { MoreHorizontal, MoreVertical } from 'lucide-react'
import classNames from 'classnames'

import { Container, DotsButton, Button } from './styles'

interface DropdownProps {
  options: {
    label: string
    onClick: () => void
  }[]
}

export const Dropdown = ({ options }: DropdownProps) => {
  const [open, setOpen] = useState(false)

  return (
    <Container>
      <DotsButton onClick={() => setOpen(!open)}>
        {open ? <MoreHorizontal /> : <MoreVertical />}
      </DotsButton>

      <div className={classNames({ active: open })}>
        {options.map(({ label, onClick }) => (
          <Button key={label} onClick={onClick}>
            {label}
          </Button>
        ))}
      </div>
    </Container>
  )
}
