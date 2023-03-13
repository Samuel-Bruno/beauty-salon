import { Option as FilterCategory } from "../components/FilterBy";

export type Client = {
  id: any;
  name: string;
  phone: string;
  telephone: string;
  address: string;
  birthDate: string;
}

export const Clients = [
  {
    id: 1,
    name: 'Fulana de tal da Silva dos Santos Gomes',
    phone: '48 9 9999-9999',
    telephone: '48 3272-0000',
    address: 'Rua sem nome nº 123456, Antônio Carlos - SC | 88180-000',
    birthDate: '01/01/2021',
  },
  {
    id: 1,
    name: 'Fulana de tal da Silva dos Santos Gomes',
    phone: '48 9 9999-9999',
    telephone: '48 3272-0000',
    address: 'Rua sem nome nº 123456, Antônio Carlos - SC | 88180-000',
    birthDate: '01/01/2021',
  },
  {
    id: 1,
    name: 'Fulana de tal da Silva dos Santos Gomes',
    phone: '48 9 9999-9999',
    telephone: '48 3272-0000',
    address: 'Rua sem nome nº 123456, Antônio Carlos - SC | 88180-000',
    birthDate: '01/01/2021',
  },
  {
    id: 1,
    name: 'Fulana de tal da Silva dos Santos Gomes',
    phone: '48 9 9999-9999',
    telephone: '48 3272-0000',
    address: 'Rua sem nome nº 123456, Antônio Carlos - SC | 88180-000',
    birthDate: '01/01/2021',
  },
  {
    id: 1,
    name: 'Fulana de tal da Silva dos Santos Gomes',
    phone: '48 9 9999-9999',
    telephone: '48 3272-0000',
    address: 'Rua sem nome nº 123456, Antônio Carlos - SC | 88180-000',
    birthDate: '01/01/2021',
  },
  {
    id: 1,
    name: 'Fulana de tal da Silva dos Santos Gomes',
    phone: '48 9 9999-9999',
    telephone: '48 3272-0000',
    address: 'Rua sem nome nº 123456, Antônio Carlos - SC | 88180-000',
    birthDate: '01/01/2021',
  },
  {
    id: 1,
    name: 'Fulana de tal da Silva dos Santos Gomes',
    phone: '48 9 9999-9999',
    telephone: '48 3272-0000',
    address: 'Rua sem nome nº 123456, Antônio Carlos - SC | 88180-000',
    birthDate: '01/01/2021',
  },
  {
    id: 1,
    name: 'Fulana de tal da Silva dos Santos Gomes',
    phone: '48 9 9999-9999',
    telephone: '48 3272-0000',
    address: 'Rua sem nome nº 123456, Antônio Carlos - SC | 88180-000',
    birthDate: '01/01/2021',
  },
  {
    id: 1,
    name: 'Fulana de tal da Silva dos Santos Gomes',
    phone: '48 9 9999-9999',
    telephone: '48 3272-0000',
    address: 'Rua sem nome nº 123456, Antônio Carlos - SC | 88180-000',
    birthDate: '01/01/2021',
  },
  {
    id: 1,
    name: 'Fulana de tal da Silva dos Santos Gomes',
    phone: '48 9 9999-9999',
    telephone: '48 3272-0000',
    address: 'Rua sem nome nº 123456, Antônio Carlos - SC | 88180-000',
    birthDate: '01/01/2021',
  },
  {
    id: 1,
    name: 'Fulana de tal da Silva dos Santos Gomes',
    phone: '48 9 9999-9999',
    telephone: '48 3272-0000',
    address: 'Rua sem nome nº 123456, Antônio Carlos - SC | 88180-000',
    birthDate: '01/01/2021',
  },
  {
    id: 1,
    name: 'Fulana de tal da Silva dos Santos Gomes',
    phone: '48 9 9999-9999',
    telephone: '48 3272-0000',
    address: 'Rua sem nome nº 123456, Antônio Carlos - SC | 88180-000',
    birthDate: '01/01/2021',
  },
  {
    id: 1,
    name: 'Fulana de tal da Silva dos Santos Gomes',
    phone: '48 9 9999-9999',
    telephone: '48 3272-0000',
    address: 'Rua sem nome nº 123456, Antônio Carlos - SC | 88180-000',
    birthDate: '01/01/2021',
  },
  {
    id: 1,
    name: 'Fulana de tal da Silva dos Santos Gomes',
    phone: '48 9 9999-9999',
    telephone: '48 3272-0000',
    address: 'Rua sem nome nº 123456, Antônio Carlos - SC | 88180-000',
    birthDate: '01/01/2021',
  },
  {
    id: 1,
    name: 'Fulana de tal da Silva dos Santos Gomes',
    phone: '48 9 9999-9999',
    telephone: '48 3272-0000',
    address: 'Rua sem nome nº 123456, Antônio Carlos - SC | 88180-000',
    birthDate: '01/01/2021',
  },
  {
    id: 1,
    name: 'Fulana de tal da Silva dos Santos Gomes',
    phone: '48 9 9999-9999',
    telephone: '48 3272-0000',
    address: 'Rua sem nome nº 123456, Antônio Carlos - SC | 88180-000',
    birthDate: '01/01/2021',
  },
  {
    id: 1,
    name: 'Fulana de tal da Silva dos Santos Gomes',
    phone: '48 9 9999-9999',
    telephone: '48 3272-0000',
    address: 'Rua sem nome nº 123456, Antônio Carlos - SC | 88180-000',
    birthDate: '01/01/2021',
  },
  {
    id: 1,
    name: 'Fulana de tal da Silva dos Santos Gomes',
    phone: '48 9 9999-9999',
    telephone: '48 3272-0000',
    address: 'Rua sem nome nº 123456, Antônio Carlos - SC | 88180-000',
    birthDate: '01/01/2021',
  },
]

export const filterCategories: FilterCategory[] = [
  { id: 1, label: 'Nome', originalLabel: 'name' },
  { id: 2, label: 'Celular', originalLabel: 'phone' },
  { id: 3, label: 'Telefone', originalLabel: 'telephone' },
  { id: 4, label: 'Endereço', originalLabel: 'address' },
  { id: 5, label: 'Nascimento', originalLabel: 'birthDate' },
]