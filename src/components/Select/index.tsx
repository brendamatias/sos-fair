import { ChangeEvent, Dispatch, SetStateAction, useState } from 'react'
import classNames from 'classnames'
import { Check, ChevronDown, ChevronUp } from 'lucide-react'

import {
  ArrowIcons,
  Label,
  Option,
  SelectContainer,
  SelectDropdown,
  SelectedValue,
} from './styles'

export type SelectOption = {
  [id: string]: string
}

interface SelectProps {
  name: string
  label: string
  value: string
  setValue: Dispatch<SetStateAction<string>>
  placeholder: string
  options: SelectOption
}

export const Select = ({
  name,
  label,
  placeholder,
  value,
  setValue,
  options,
}: SelectProps) => {
  const [open, setOpen] = useState(false)

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setOpen(false)
    setValue(event.target.value)
  }

  return (
    <SelectContainer>
      <div className="select-input">
        <Label className={classNames({ value })} htmlFor={name}>
          {label}
        </Label>
        <input
          id={name}
          type="checkbox"
          checked={open}
          onChange={(event) => setOpen(event.target.checked)}
        />

        <SelectDropdown className="select-button">
          <SelectedValue className={classNames({ value })}>
            {options[value] ?? placeholder}
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
