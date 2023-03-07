import SchedulingPage from "../pages/Scheduling"

const UiRoutes = [
  {
    path: '',
    index: true,
    element: <SchedulingPage />
  },
  {
    path: 'clients',
    element: <></>
  },
  {
    path: 'professionals',
    element: <></>
  },
  {
    path: 'services',
    element: <></>
  },
  {
    path: 'storage',
    element: <></>
  },
  {
    path: 'reports',
    element: <></>
  },
  {
    path: 'financial',
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