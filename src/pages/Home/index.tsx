import { FormEvent, useEffect, useState } from 'react'
import { Plus } from 'lucide-react'
import { toast } from 'react-toastify'

import { Dropdown, Input, Select, SelectOption } from '@/components'
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
  const [loading, setLoading] = useState(false)
  const [name, setName] = useState('')
  const [template, setTemplate] = useState('')

  const getFairList = async () => {
    try {
      const { data } = await FairService.getFairList()
      const optionsFormatted: SelectOption = {}

      data.forEach((fair) => {
        optionsFormatted[`${fair._id}`] = fair.name
      })

      setFairs(data)
      setOptions(optionsFormatted)
    } catch (error: any) {
      toast.error(
        error?.response?.data?.error?.message ||
          'Ocorreu um erro, tente novamente',
      )
    }
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    setLoading(true)

    try {
      await FairService.createFair({
        name,
        template: template || null,
      })

      toast.success('Feira criada com sucesso!')
      setLoading(false)
      setName('')
      setTemplate('')

      getFairList()
    } catch (error: any) {
      setLoading(false)
      toast.error(
        error?.response?.data?.error?.message ||
          'Ocorreu um erro, tente novamente',
      )
    }
  }

  useEffect(() => {
    getFairList()
  }, [])

  return (
    <Container>
      <h1>Lista de feiras</h1>
      <Form onSubmit={handleSubmit}>
        <Input
          id="name"
          label="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Select
          label="Feira de template"
          placeholder="Selecione a feira"
          name="template"
          value={template}
          setValue={setTemplate}
          options={options}
        />

        <div>
          <Button type="submit" disabled={loading || !name}>
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

                <Dropdown
                  options={[
                    { label: 'Editar', onClick: () => {} },
                    { label: 'Remover', onClick: () => {} },
                  ]}
                />
              </div>
            </div>
          </FairItem>
        ))}
      </ul>
    </Container>
  )
}
