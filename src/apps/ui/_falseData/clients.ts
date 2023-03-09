export type Client = {
  id: any;
  name: string;
  phone: string;
  telephone: string;
  address: string;
  birthDate: Date;
}

export const Clients = [
  {
    id: 1,
    name: 'Fulana de tal da Silva dos Santos Gomes',
    phone: '48 9 9999-9999',
    telephone: '48 3272-0000',
    address: 'Rua sem nome nº 123456, Antônio Carlos - SC | 88180-000',
    birthDate: new Date(2001, 0, 1),
  }
]

export const filterCategories = [
  { id: 1, label: 'Nome' },
  { id: 2, label: 'Celular' },
  { id: 3, label: 'Telefone' },
  { id: 4, label: 'Endereço' },
  { id: 5, label: 'Nascimento' },
]