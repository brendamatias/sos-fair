import { MoreVertical, Plus } from 'lucide-react'
import { useEffect, useState } from 'react'

import { Input, Select, SelectOption } from '@/components'
import {
  Container,
  Form,
  Button,
  FairItem,
  FairInfo,
  FairPrice,
} from './styles'

import { Fair } from '@/types'
import { formatDate, formatPrice } from '@/utils/format'
import FairService from '@/services/fair.service'

export const Home: React.FC = () => {
  const [fairs, setFairs] = useState<Fair[]>([])
  const [options, setOptions] = useState<SelectOption>({})

  const getFairList = async () => {
    try {
      const { data } = await FairService.getFairList()
      const optionsFormatted: SelectOption = {}

      data.forEach((fair) => {
        optionsFormatted[`${fair._id}`] = fair.name
      })

      setFairs(data)
      setOptions(optionsFormatted)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getFairList()
  }, [])

  return (
    <Container>
      <h1>Lista de feiras</h1>
      <Form>
        <Input id="name" label="Nome" />
        <Select
          label="Feira de template"
          placeholder="Selecione a feira"
          name="template"
          options={options}
        />

        <div>
          <Button>
            <Plus color="#fff" />
          </Button>
        </div>
      </Form>
      <ul>
        {fairs.map((fair, index) => (
          <FairItem key={fair.name}>
            <div>
              <FairInfo to={`/fairs/${fair._id}`}>
                <div className="index">{index + 1}</div>
                <div>
                  <strong>{fair.name}</strong>
                  <span>Criado em {formatDate(fair.createdAt)}</span>
                </div>
              </FairInfo>

              <div className="left">
                <FairPrice>
                  <strong>{formatPrice(20000)}</strong>
                  <span>Valor total</span>
                </FairPrice>

                <button>
                  <MoreVertical />
                </button>
              </div>
            </div>
          </FairItem>
        ))}
      </ul>
    </Container>
  )
}
