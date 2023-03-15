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
    id: 1,
    title: 'Penteado',
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
    id: 1,
    title: 'Penteado',
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
    id: 1,
    title: 'Penteado',
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
    id: 1,
    title: 'Penteado',
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
    id: 1,
    title: 'Penteado',
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
    id: 1,
    title: 'Penteado',
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
    id: 1,
    title: 'Penteado',
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
    id: 1,
    title: 'Penteado',
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
    id: 1,
    title: 'Penteado',
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
    id: 1,
    title: 'Penteado',
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
    id: 1,
    title: 'Penteado',
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
    id: 1,
    title: 'Penteado',
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
    id: 1,
    title: 'Penteado',
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
  { id: 1, label: 'Tempo de execução', originalLabel: 'execution' },
  { id: 1, label: 'Preço', originalLabel: 'price' },
  { id: 1, label: 'Profisisonais capacitados', originalLabel: 'professionals' },
  { id: 1, label: 'Oferecendo', originalLabel: 'offering' },
]