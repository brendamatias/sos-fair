import { ChangeEvent, useState } from 'react'
import { Check, ChevronDown, ChevronUp } from 'lucide-react'
import classNames from 'classnames'
import {
  Container,
  Label,
  Select,
  SelectedValue,
  ArrowIcons,
  Option,
} from './styles'
import { categoryIcon, categoryLabel } from '../../constants'

export const CategorySelect = () => {
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState('')
  const options = ['bakery', 'vegetable', 'meat', 'fruit', 'drink']

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setOpen(false)
    setSelected(e.target.value)
  }

  return (
    <Container>
      <div className="category-select">
        <Label
          className={classNames({ selected })}
          htmlFor="options-view-button"
        >
          Categoria
        </Label>
        <input
          id="options-view-button"
          type="checkbox"
          checked={open}
          onChange={(event) => setOpen(event.target.checked)}
        />

        <Select className="select-button">
          <SelectedValue className={classNames({ selected })}>
            {categoryLabel[selected] ?? 'Selecione a categoria'}
          </SelectedValue>

          <ArrowIcons>
            <ChevronDown
              id="icon-down"
              className={classNames({ active: !open })}
            />
            <ChevronUp id="icon-up" className={classNames({ active: open })} />
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
              data-label={categoryLabel[option]}
              onChange={onChange}
            />

            {categoryIcon[option]}
            <span className="label">{categoryLabel[option]}</span>
            <Check />
          </Option>
        ))}
      </ul>
    </Container>
  )
}
