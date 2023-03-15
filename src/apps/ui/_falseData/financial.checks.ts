import { Option as FilterCategory } from "../components/Selects/FilterBy";

export type Check = {
  id: any;
  issuer: string;
  value: number;
  lauch: string;
  paydue: string;
  bank: string;
  number: number | string;
}

export const Checks = [
  {
    id: 1,
    issuer: 'Cliente da Silva',
    value: 136.00,
    lauch: '23/10/2023',
    paydue: '24/10/2023',
    bank: 'Banco do Brasil',
    number: '4.578.165.489',
  },
  {
    id: 1,
    issuer: 'Cliente da Silva',
    value: 136.00,
    lauch: '23/10/2023',
    paydue: '24/10/2023',
    bank: 'Banco do Brasil',
    number: '4.578.165.489',
  },
  {
    id: 1,
    issuer: 'Cliente da Silva',
    value: 136.00,
    lauch: '23/10/2023',
    paydue: '24/10/2023',
    bank: 'Banco do Brasil',
    number: '4.578.165.489',
  },
  {
    id: 1,
    issuer: 'Cliente da Silva',
    value: 136.00,
    lauch: '23/10/2023',
    paydue: '24/10/2023',
    bank: 'Banco do Brasil',
    number: '4.578.165.489',
  },
  {
    id: 1,
    issuer: 'Cliente da Silva',
    value: 136.00,
    lauch: '23/10/2023',
    paydue: '24/10/2023',
    bank: 'Banco do Brasil',
    number: '4.578.165.489',
  },
  {
    id: 1,
    issuer: 'Cliente da Silva',
    value: 136.00,
    lauch: '23/10/2023',
    paydue: '24/10/2023',
    bank: 'Banco do Brasil',
    number: '4.578.165.489',
  },
  {
    id: 1,
    issuer: 'Cliente da Silva',
    value: 136.00,
    lauch: '23/10/2023',
    paydue: '24/10/2023',
    bank: 'Banco do Brasil',
    number: '4.578.165.489',
  },
  {
    id: 1,
    issuer: 'Cliente da Silva',
    value: 136.00,
    lauch: '23/10/2023',
    paydue: '24/10/2023',
    bank: 'Banco do Brasil',
    number: '4.578.165.489',
  },
  {
    id: 1,
    issuer: 'Cliente da Silva',
    value: 136.00,
    lauch: '23/10/2023',
    paydue: '24/10/2023',
    bank: 'Banco do Brasil',
    number: '4.578.165.489',
  },
  {
    id: 1,
    issuer: 'Cliente da Silva',
    value: 136.00,
    lauch: '23/10/2023',
    paydue: '24/10/2023',
    bank: 'Banco do Brasil',
    number: '4.578.165.489',
  },
  {
    id: 1,
    issuer: 'Cliente da Silva',
    value: 136.00,
    lauch: '23/10/2023',
    paydue: '24/10/2023',
    bank: 'Banco do Brasil',
    number: '4.578.165.489',
  },
  {
    id: 1,
    issuer: 'Cliente da Silva',
    value: 136.00,
    lauch: '23/10/2023',
    paydue: '24/10/2023',
    bank: 'Banco do Brasil',
    number: '4.578.165.489',
  },
  {
    id: 1,
    issuer: 'Cliente da Silva',
    value: 136.00,
    lauch: '23/10/2023',
    paydue: '24/10/2023',
    bank: 'Banco do Brasil',
    number: '4.578.165.489',
  },
  {
    id: 1,
    issuer: 'Cliente da Silva',
    value: 136.00,
    lauch: '23/10/2023',
    paydue: '24/10/2023',
    bank: 'Banco do Brasil',
    number: '4.578.165.489',
  },
  {
    id: 1,
    issuer: 'Cliente da Silva',
    value: 136.00,
    lauch: '23/10/2023',
    paydue: '24/10/2023',
    bank: 'Banco do Brasil',
    number: '4.578.165.489',
  },
  {
    id: 1,
    issuer: 'Cliente da Silva',
    value: 136.00,
    lauch: '23/10/2023',
    paydue: '24/10/2023',
    bank: 'Banco do Brasil',
    number: '4.578.165.489',
  },
  {
    id: 1,
    issuer: 'Cliente da Silva',
    value: 136.00,
    lauch: '23/10/2023',
    paydue: '24/10/2023',
    bank: 'Banco do Brasil',
    number: '4.578.165.489',
  },
  {
    id: 1,
    issuer: 'Cliente da Silva',
    value: 136.00,
    lauch: '23/10/2023',
    paydue: '24/10/2023',
    bank: 'Banco do Brasil',
    number: '4.578.165.489',
  },
  {
    id: 1,
    issuer: 'Cliente da Silva',
    value: 136.00,
    lauch: '23/10/2023',
    paydue: '24/10/2023',
    bank: 'Banco do Brasil',
    number: '4.578.165.489',
  },
  {
    id: 1,
    issuer: 'Cliente da Silva',
    value: 136.00,
    lauch: '23/10/2023',
    paydue: '24/10/2023',
    bank: 'Banco do Brasil',
    number: '4.578.165.489',
  },
  {
    id: 1,
    issuer: 'Cliente da Silva',
    value: 136.00,
    lauch: '23/10/2023',
    paydue: '24/10/2023',
    bank: 'Banco do Brasil',
    number: '4.578.165.489',
  },
]

type filtersTypes = {
  showing: FilterCategory[];
  orders: FilterCategory[];
  lasts: FilterCategory[];
}

export const filterCategories: filtersTypes = {
  showing: [
    { id: 1, label: 'Todos os cheques', originalLabel: 'all' },
    { id: 2, label: 'Cheques vencidos', originalLabel: 'expired' },
    { id: 3, label: 'Cheques à vencer', originalLabel: 'due' },
    { id: 4, label: 'Cheques recebidos', originalLabel: 'received' },
  ],
  orders: [
    { id: 1, label: 'Emitente', originalLabel: 'issuer' },
    { id: 2, label: 'Valor', originalLabel: 'value' },
    { id: 3, label: 'Lançamento', originalLabel: 'launch' },
    { id: 4, label: 'Vencimento', originalLabel: 'paydue' },
    { id: 5, label: 'Banco', originalLabel: 'bank' },
    { id: 5, label: 'Nº', originalLabel: 'number' },
  ],
  lasts: [
    { id: 1, label: '30 dias', originalLabel: '1' },
    { id: 1, label: '3 meses', originalLabel: '2' },
    { id: 2, label: '6 meses', originalLabel: '3' },
    { id: 3, label: '12 meses', originalLabel: '4' },
  ],
}