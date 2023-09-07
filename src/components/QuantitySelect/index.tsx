import { ChangeEvent, useState } from 'react'
import { Check, ChevronDown, ChevronUp } from 'lucide-react'
import classNames from 'classnames'
import {
  Container,
  Input,
  Label,
  Select,
  SelectedValue,
  ArrowIcons,
  Option,
} from './styles'
import { measureLabel } from '../../constants'

export const QuantitySelect = () => {
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState('')
  const options = ['unit', 'liter', 'kilo']

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setOpen(false)
    setSelected(e.target.value)
  }

  return (
    <Container>
      <div className="input-container">
        <Label htmlFor="quantity">Quantidade</Label>

        <Input name="quantity" type="number" />
      </div>
      <div className="measure">
        <div className="measure-select">
          <input
            type="checkbox"
            checked={open}
            onChange={(event) => setOpen(event.target.checked)}
          />

          <Select className="select-button">
            <SelectedValue>
              {selected === 'unit' ? 'Un.' : selected === 'liter' ? 'L' : 'Kg'}
            </SelectedValue>

            <ArrowIcons>
              <ChevronDown
                id="icon-down"
                className={classNames({ active: !open })}
              />
              <ChevronUp
                id="icon-up"
                className={classNames({ active: open })}
              />
            </ArrowIcons>
          </Select>
        </div>
        <ul className={classNames({ active: open })}>
          {options.map((option) => (
            <Option key={option}>
              <input
                type="radio"
                name="category"
                value={option}
                data-label={measureLabel[option]}
                onChange={onChange}
              />

              <span className="label">
                {option === 'unit' ? 'Un.' : option === 'liter' ? 'L' : 'Kg'}
              </span>
              <Check />
            </Option>
          ))}
        </ul>
      </div>
    </Container>
  )
}
