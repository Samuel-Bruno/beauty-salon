import { Option as FilterCategory } from '../components/Selects/FilterBy';
import ProfOne from '../assets/images/5.jpg'

export type Professional = {
  id: any;
  name: string;
  img: string;
  phone: string;
  address: string;
  birthDate: string;
  status: boolean;
}

export const Professionals: Professional[] = [
  {
    id: 1,
    name: 'Cicrana',
    img: ProfOne,
    phone: '48 99999-9999',
    address: 'Rua sem nome nº 123456, Antônio Carlos - SC | 88180-000',
    birthDate: '99/99/9999',
    status: true,
  },
  {
    id: 2,
    name: 'Beltrana',
    img: ProfOne,
    phone: '48 99999-9999',
    address: 'Rua sem nome nº 123456, Antônio Carlos - SC | 88180-000',
    birthDate: '99/99/9999',
    status: false,
  },
  {
    id: 3,
    name: 'Deltrana',
    img: ProfOne,
    phone: '48 99999-9999',
    address: 'Rua sem nome nº 123456, Antônio Carlos - SC | 88180-000',
    birthDate: '99/99/9999',
    status: true,
  },
  {
    id: 4,
    name: 'Mariana',
    img: ProfOne,
    phone: '48 99999-9999',
    address: 'Rua sem nome nº 123456, Antônio Carlos - SC | 88180-000',
    birthDate: '99/99/9999',
    status: false,
  },
  {
    id: 5,
    name: 'Joana',
    img: ProfOne,
    phone: '48 99999-9999',
    address: 'Rua sem nome nº 123456, Antônio Carlos - SC | 88180-000',
    birthDate: '99/99/9999',
    status: true,
  },
]


export const filterCategories: FilterCategory[] = [
  { id: 1, label: 'Foto', originalLabel: 'img' },
  { id: 2, label: 'Nome', originalLabel: 'name' },
  { id: 3, label: 'Celular', originalLabel: 'phone' },
  { id: 4, label: 'Endereço', originalLabel: 'address' },
  { id: 5, label: 'Nascimento', originalLabel: 'birthDate' },
  { id: 6, label: 'Status', originalLabel: 'status' },
]