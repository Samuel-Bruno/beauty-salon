import { Option as FilterCategory } from "../components/Selects/FilterBy";

export type Client = {
  id: any;
  name: string;
  telephone: string;
  credit: number;
  debit: number;
}

export const Clients: Client[] = [
  {
    id: 1,
    name: 'Adriana da Silva Meyer',
    telephone: '48 99999-9999',
    credit: 2.00,
    debit: 0.00,
  },
  {
    id: 2,
    name: 'Maria de Fátima',
    telephone: '48 99999-9999',
    credit: 0.00,
    debit: 14.50,
  },
  {
    id: 3,
    name: 'João Filipe Silva',
    telephone: '48 99999-9999',
    credit: 64.70,
    debit: 14.50,
  },
  {
    id: 4,
    name: 'Nathalia Soares',
    telephone: '48 99999-9999',
    credit: 20.00,
    debit: 4.00,
  },
]

export const filterCategories: FilterCategory[] = [
  { id: 1, label: 'Cliente', originalLabel: 'name' },
  { id: 2, label: 'Telefone', originalLabel: 'telephone' },
  { id: 3, label: 'Crédito', originalLabel: 'credit' },
  { id: 4, label: 'Dívida', originalLabel: 'debit' },
]