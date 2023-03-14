import ClientsPage from "../pages/Clients"
import ProfessionalsPage from "../pages/Professionals"
import SchedulingPage from "../pages/Scheduling"
import ServicesPage from "../pages/Services"

const UiRoutes = [
  {
    index: true,
    path: '',
    element: <SchedulingPage />
  },
  {
    path: '/clients',
    element: <ClientsPage />
  },
  {
    path: '/professionals',
    element: <ProfessionalsPage />
  },
  {
    path: '/services',
    element: <ServicesPage />
  },
  {
    path: '/storage',
    element: <></>
  },
  {
    path: '/reports',
    element: <></>
  },
  {
    path: '/financial',
    children: [
      {
        path: 'cashbox',
        index: true,
        element: <></>
      },
      {
        path: 'cards',
        element: <></>
      },
      {
        path: 'checks',
        element: <></>
      },
      {
        path: 'clients',
        element: <></>
      },
      {
        path: 'bills',
        element: <></>
      },
    ]
  },
  {
    path: 'settings',
    children: [
      {
        path: 'personal',
        index: true,
        element: <></>
      },
      {
        path: 'system',
        element: <></>
      },
      {
        path: 'access-levels',
        element: <></>
      },
    ]
  },
]


export default UiRoutes