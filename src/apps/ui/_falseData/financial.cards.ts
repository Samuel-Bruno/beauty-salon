import { Option as FilterCategory } from "../components/Selects/FilterBy";

export type Card = {
  id: any;
  flag: string;
  operations: string;
  debit_tax: number | null;
  debitTransfer: string | null;
  credit_tax_spot: number | null;
  credit_tax_term: number | null;
  installments: number | null;
  transfer: string;
}

export const Cards: Card[] = [
  {
    id: 1,
    flag: 'Visa',
    operations: 'Crédito e débito',
    debit_tax: 2,
    debitTransfer: '2 dias corridos',
    credit_tax_spot: 1,
    credit_tax_term: 1,
    installments: 12,
    transfer: 'Mesmo dia próximo mês',
  },
  {
    id: 1,
    flag: 'MasterCard',
    operations: 'Crédito',
    debit_tax: null,
    debitTransfer: null,
    credit_tax_spot: .5,
    credit_tax_term: .5,
    installments: 16,
    transfer: '3 dias corridos',
  },
  {
    id: 1,
    flag: 'Visa',
    operations: 'Crédito e débito',
    debit_tax: 2,
    debitTransfer: '2 dias corridos',
    credit_tax_spot: 1,
    credit_tax_term: 1,
    installments: 12,
    transfer: 'Mesmo dia próximo mês',
  },
  {
    id: 1,
    flag: 'MasterCard',
    operations: 'Crédito',
    debit_tax: null,
    debitTransfer: null,
    credit_tax_spot: .5,
    credit_tax_term: .5,
    installments: 16,
    transfer: '3 dias corridos',
  },
  {
    id: 1,
    flag: 'Visa',
    operations: 'Crédito e débito',
    debit_tax: 2,
    debitTransfer: '2 dias corridos',
    credit_tax_spot: 1,
    credit_tax_term: 1,
    installments: 12,
    transfer: 'Mesmo dia próximo mês',
  },
]

export const filterCategories: FilterCategory[] = [
  { id: 1, label: 'Bandeira', originalLabel: 'flag' },
  { id: 2, label: 'Operações', originalLabel: 'operations' },
  { id: 3, label: 'Taxa débito', originalLabel: 'debit_tax' },
  { id: 4, label: 'Repasse débito', originalLabel: 'debitTransfer' },
  { id: 5, label: 'Taxa crédito à vista', originalLabel: 'credit_tax_spot' },
  { id: 6, label: 'Taxa crédito prazo', originalLabel: 'credit_tax_term' },
  { id: 7, label: 'Máx. parcelas', originalLabel: 'installments' },
  { id: 8, label: 'Tipo de repasse', originalLabel: 'transfer' },
]