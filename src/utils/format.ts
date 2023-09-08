export const formatPrice = (price: number) =>
  new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(price / 100)

export const formatDate = (date: string) => {
  const dateFormatted = new Date(date)
  const day = dateFormatted.getDate().toString().padStart(2, '0')
  const month = (dateFormatted.getMonth() + 1).toString().padStart(2, '0')
  const year = dateFormatted.getFullYear()

  return `${day}/${month}/${year}`
}
