import ClientsPage from "../pages/Clients"
import FinancialPage from "../pages/Financial"
import ProfessionalsPage from "../pages/Professionals"
import SchedulingPage from "../pages/Scheduling"
import ServicesPage from "../pages/Services"
import StoragePage from "../pages/Storage"
import ReportsPage from "../pages/Reports"

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
    element: <StoragePage />
  },
  {
    path: '/reports',
    element: <ReportsPage />
  },
  {
    path: '/financial',
    children: [
      {
        path: '',
        index: true,
        element: <FinancialPage subpage={'cashbox'} />
      },
      {
        path: 'cards',
        element: <FinancialPage subpage={'cards'} />
      },
      {
        path: 'checks',
        element: <FinancialPage subpage={'checks'} />
      },
      {
        path: 'clients',
        element: <FinancialPage subpage={'clients'} />
      },
      {
        path: 'bills',
        element: <FinancialPage subpage={'bills'} />
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