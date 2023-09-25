import { ChangeEvent, useState } from 'react'
import { Check, ChevronDown, ChevronUp } from 'lucide-react'
import classNames from 'classnames'

import { categoryIcon, categoryLabel } from '@/constants'
import {
  SelectContainer,
  Label,
  SelectDropdown,
  SelectedValue,
  ArrowIcons,
  Option,
} from '@/components/Select/styles'
import { Category } from '@/types'

interface CategorySelectProps {
  value: Category | undefined
  setValue: React.Dispatch<React.SetStateAction<Category | undefined>>
}

export const CategorySelect = ({ value, setValue }: CategorySelectProps) => {
  const [open, setOpen] = useState(false)
  const options: Category[] = ['bakery', 'vegetable', 'meat', 'fruit', 'drink']

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setOpen(false)
    setValue(event.target.value as Category)
  }

  return (
    <SelectContainer>
      <div className="select-input">
        <Label className={classNames({ value })} htmlFor="options-view-button">
          Categoria
        </Label>
        <input
          id="options-view-button"
          type="checkbox"
          checked={open}
          onChange={(event) => setOpen(event.target.checked)}
        />

        <SelectDropdown className="select-button">
          <SelectedValue className={classNames({ value })}>
            {value ? categoryLabel[value] : 'Selecione a categoria'}
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
        {options.map((option) => (
          <Option key={option}>
            <input
              type="radio"
              name="category"
              value={option}
              data-label={categoryLabel[option]}
              onChange={onChange}
            />

            {categoryIcon[option]}
            <span className="label">{categoryLabel[option]}</span>
            <Check />
          </Option>
        ))}
      </ul>
    </SelectContainer>
  )
}
