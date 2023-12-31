import { useEffect, useRef, useState } from 'react'
import classNames from 'classnames'
import { MoreHorizontal, MoreVertical } from 'lucide-react'

import { Button, Container, DotsButton } from './styles'

interface DropdownProps {
  options: {
    label: string
    onClick: () => void
  }[]
}

export const Dropdown = ({ options }: DropdownProps) => {
  const ref = useRef<HTMLInputElement>(null)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (!ref?.current?.contains(event.target)) {
        setOpen(false)
      }
    }

    document.addEventListener('click', handleClickOutside, true)

    return () => {
      document.removeEventListener('click', handleClickOutside, true)
    }
  }, [])

  return (
    <Container ref={ref}>
      <DotsButton onClick={() => setOpen(!open)}>
        {open ? <MoreHorizontal /> : <MoreVertical />}
      </DotsButton>

      <div className={classNames({ active: open })}>
        {options.map(({ label, onClick }) => (
          <Button
            key={label}
            onClick={() => {
              setOpen(false)
              onClick()
            }}
          >
            {label}
          </Button>
        ))}
      </div>
    </Container>
  )
}
