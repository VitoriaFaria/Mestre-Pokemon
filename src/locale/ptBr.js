const messages = {
  after: (field, [target]) => `deve ser maior que ${target}.`,
  alpha_dash: (field) => `deve conter letras, números e traços.`,
  alpha_num: (field) => `deve conter somente letras e números.`,
  alpha_spaces: (field) => `O só pode conter caracteres alfabéticos e espaços.`,
  alpha: (field) => `deve conter somente letras.`,
  before: (field, [target]) => `deve ser menor que ${target}.`,
  between: (field, [min, max]) => `deve estar entre ${min} e ${max}.`,
  confirmed: (field, [confirmedField]) => `e ${confirmedField} devem ser iguais.`,
  codigo_cns: (field) => `é inválido`,
  credit_card: (field) => `é inválido.`,
  date_between: (field, [min, max]) => `deve estar entre ${min} e ${max}.`,
  date_format: (field) => `data se encontra inválida.`,
  decimal: (field, [decimals = '*'] = []) => `deve ser numérico e deve conter ${decimals === '*' ? '' : decimals} casas decimais.`,
  digits: (field, [length]) => `deve ser numérico e ter ${length} dígitos.`,
  dimensions: (field, [width, height]) => `deve ter ${width} pixels de largura por ${height} pixels de altura.`,
  email: (field) => `deve ser um email válido.`,
  ext: (field) => `deve ser um arquivo válido.`,
  image: (field) => `deve ser uma imagem.`,
  in: (field) => `deve ter um valor válido.`,
  ip: (field) => `deve ser um endereço IP válido.`,
  max: (field, [length]) => `não deve ter mais que ${length} caracteres.`,
  max_value: (field, [max]) => `precisa ser ${max} ou menor.`,
  mimes: (field) => `deve ser um tipo de arquivo válido.`,
  min: (field, [length]) => `deve conter pelo menos ${length} caracteres.`,
  min_value: (field, [min]) => `precisa ser ${min} ou maior.`,
  not_in: (field) => `deve ser um valor válido.`,
  numeric: (field) => `deve conter apenas números`,
  regex: (field) => `possui um formato inválido.`,
  required: (field) => `é obrigatório.`,
  url: (field) => `não é uma URL válida.`,
  cpf: () => `CPF inválido.`,
  cns: () => `CNS inválido.`
}

const locale = {
  name: 'pt-br',
  messages
}

export default locale
