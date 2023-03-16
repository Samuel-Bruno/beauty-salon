import { Option as FilterCategory } from "../components/Selects/FilterBy";

export type Bill = {
  id: any;
  description: string;
  value: number;
  purveyor: string | null;
  installment: string | null;
  paydue: string;
  settlement: string | null;
}

export const Bills: Bill[] = [
  {
    id: 1,
    description: 'Compra de maquiagem',
    value: 315.69,
    purveyor: 'Fornecedor legal da empresa X',
    installment: '1 de 3',
    paydue: '28/02/2023',
    settlement: '28/02/2023',
  },
  {
    id: 2,
    description: 'Compra de maquiagem',
    value: 315.69,
    purveyor: 'Fornecedor legal da empresa X',
    installment: '1 de 3',
    paydue: '28/02/2023',
    settlement: '28/02/2023',
  },
  {
    id: 3,
    description: 'Compra de maquiagem',
    value: 315.69,
    purveyor: 'Fornecedor legal da empresa X',
    installment: '1 de 3',
    paydue: '28/02/2023',
    settlement: '28/02/2023',
  },
  {
    id: 4,
    description: 'Compra de maquiagem',
    value: 315.69,
    purveyor: 'Fornecedor legal da empresa X',
    installment: '1 de 3',
    paydue: '28/02/2023',
    settlement: '28/02/2023',
  },
  {
    id: 5,
    description: 'Compra de maquiagem',
    value: 315.69,
    purveyor: 'Fornecedor legal da empresa X',
    installment: '1 de 3',
    paydue: '28/02/2023',
    settlement: '28/02/2023',
  },
  {
    id: 6,
    description: 'Compra de maquiagem',
    value: 315.69,
    purveyor: 'Fornecedor legal da empresa X',
    installment: '1 de 3',
    paydue: '28/02/2023',
    settlement: '28/02/2023',
  },
]

type FiltersType = {
  showing: FilterCategory[];
  orders: FilterCategory[];
}

export const filterCategories: FiltersType = {
  showing: [
    { id: 1, label: 'Todas', originalLabel: 'all', },
    { id: 2, label: 'Pagas', originalLabel: 'payed', },
    { id: 3, label: 'À pagar', originalLabel: 'unpayed', },
  ],
  orders: [
    { id: 1, label: 'Descrição', originalLabel: 'description' },
    { id: 2, label: 'Valor', originalLabel: 'value' },
    { id: 3, label: 'Fornecedor', originalLabel: 'purveyor' },
    { id: 4, label: 'Parcela', originalLabel: 'installment' },
    { id: 5, label: 'Vencimento', originalLabel: 'paydue' },
    { id: 6, label: 'Quitação', originalLabel: 'settlement' },
  ]
}