import { ChangeEvent, useState } from 'react'
import { Check, ChevronDown, ChevronUp } from 'lucide-react'
import classNames from 'classnames'

import {
  SelectContainer,
  Label,
  SelectDropdown,
  SelectedValue,
  ArrowIcons,
  Option,
} from './styles'

export type SelectOption = {
  [id: string]: string
}

interface SelectProps {
  name: string
  label: string
  placeholder: string
  options: SelectOption
}

export const Select = ({ name, label, placeholder, options }: SelectProps) => {
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState('')

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setOpen(false)
    setSelected(e.target.value)
  }

  return (
    <SelectContainer>
      <div className="select-input">
        <Label className={classNames({ selected })} htmlFor={name}>
          {label}
        </Label>
        <input
          id={name}
          type="checkbox"
          checked={open}
          onChange={(event) => setOpen(event.target.checked)}
        />

        <SelectDropdown className="select-button">
          <SelectedValue className={classNames({ selected })}>
            {options[selected] ?? placeholder}
          </SelectedValue>

          <ArrowIcons>
            <ChevronDown
              id="icon-down"
              className={classNames({ active: !open })}
            />
            <ChevronUp id="icon-up" className={classNames({ active: open })} />
          </ArrowIcons>
        </SelectDropdown>
      </div>

      <ul className={classNames({ active: open })}>
        <Option>
          <input
            type="radio"
            name={`${name}-item`}
            value=""
            data-label={placeholder}
            onChange={onChange}
          />

          <span className="label">{placeholder}</span>
          <Check />
        </Option>

        {Object.keys(options).map((_id) => (
          <Option key={_id}>
            <input
              type="radio"
              name={`${name}-item`}
              value={_id}
              data-label={options[_id]}
              onChange={onChange}
            />

            <span className="label">{options[_id]}</span>
            <Check />
          </Option>
        ))}
      </ul>
    </SelectContainer>
  )
}
