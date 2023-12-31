import { ChangeEvent, useState } from 'react'
import classNames from 'classnames'
import { Check, ChevronDown, ChevronUp } from 'lucide-react'

import { measureLabel } from '@/constants'
import { Measure } from '@/types'
import { capitalize } from '@/utils/format'

import {
  ArrowIcons,
  Container,
  Input,
  Label,
  Option,
  Select,
  SelectedValue,
} from './styles'

interface QuantitySelectProps {
  measure: Measure
  setMeasure: React.Dispatch<React.SetStateAction<Measure>>
  quantity?: string
  setQuantity: React.Dispatch<React.SetStateAction<string | undefined>>
}

export const QuantitySelect = ({
  measure,
  setMeasure,
  quantity,
  setQuantity,
}: QuantitySelectProps) => {
  const [open, setOpen] = useState(false)
  const options: Measure[] = ['un', 'l', 'kg']

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setOpen(false)
    setMeasure(event.target.value as Measure)
  }

  console.log(quantity)
  return (
    <Container>
      <div className="input-container">
        <Label htmlFor="quantity">Quantidade</Label>

        <Input
          name="quantity"
          type="number"
          value={quantity}
          onChange={(event) => setQuantity(event.target.value)}
        />
      </div>
      <div className="measure">
        <div className="measure-select">
          <input
            type="checkbox"
            checked={open}
            onChange={(event) => setOpen(event.target.checked)}
          />

          <Select className="select-button">
            <SelectedValue>{measure}</SelectedValue>

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

              <span className="label">{capitalize(option)}</span>
              <Check />
            </Option>
          ))}
        </ul>
      </div>
    </Container>
  )
}
