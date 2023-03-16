import { Option as ServiceCategory } from "../components/Selects/FilterBy"


export type Service = {
  id: number;
  title: string;
  execution: number;
  price: number;
  professionals?: number;
  offering: boolean;
  commission: {
    type: number;
    value: number;
  };
  products: any[];
}

export const Services: Service[] = [
  {
    id: 1,
    title: 'Penteado',
    execution: 79,
    price: 80.99,
    professionals: 3,
    offering: false,
    commission: {
      type: 1,
      value: 20,
    },
    products: [],
  },
  {
    id: 2,
    title: 'Maquiagem',
    execution: 134,
    price: 80.99,
    professionals: 3,
    offering: false,
    commission: {
      type: 1,
      value: 20,
    },
    products: [],
  },
  {
    id: 3,
    title: 'Manicure',
    execution: 45,
    price: 80.99,
    professionals: 3,
    offering: false,
    commission: {
      type: 1,
      value: 20,
    },
    products: [],
  },
  {
    id: 4,
    title: 'Design de sobrancelhas',
    execution: 45,
    price: 80.99,
    professionals: 3,
    offering: false,
    commission: {
      type: 1,
      value: 20,
    },
    products: [],
  },
  {
    id: 5,
    title: 'Alisamento',
    execution: 45,
    price: 80.99,
    professionals: 3,
    offering: false,
    commission: {
      type: 1,
      value: 20,
    },
    products: [],
  },
  {
    id: 6,
    title: 'Pedicure',
    execution: 45,
    price: 80.99,
    professionals: 3,
    offering: false,
    commission: {
      type: 1,
      value: 20,
    },
    products: [],
  },
  {
    id: 7,
    title: 'Micropigmentação',
    execution: 45,
    price: 80.99,
    professionals: 3,
    offering: false,
    commission: {
      type: 1,
      value: 20,
    },
    products: [],
  },
  {
    id: 8,
    title: 'Pintura de cabelo',
    execution: 45,
    price: 80.99,
    professionals: 3,
    offering: false,
    commission: {
      type: 1,
      value: 20,
    },
    products: [],
  },
  {
    id: 9,
    title: 'Corte de cabelo',
    execution: 45,
    price: 80.99,
    professionals: 3,
    offering: false,
    commission: {
      type: 1,
      value: 20,
    },
    products: [],
  },
]

export const filterCategories: ServiceCategory[] = [
  { id: 1, label: 'Nome', originalLabel: 'title' },
  { id: 2, label: 'Tempo de execução', originalLabel: 'execution' },
  { id: 3, label: 'Preço', originalLabel: 'price' },
  { id: 4, label: 'Profisisonais capacitados', originalLabel: 'professionals' },
  { id: 5, label: 'Oferecendo', originalLabel: 'offering' },
]