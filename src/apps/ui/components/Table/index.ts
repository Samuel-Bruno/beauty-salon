import ClientsTable from './Clients'
import ProfessionalsTable from './Professionals'
import ServicesTable from './Services'
import StorageTable from './Storage'

import ChecksTable from './Checks'
import CardsTable from './Cards'
import FinancialClientsTable from './FinancialClients'

const Tables = {
  Clients: ClientsTable,
  Professionals: ProfessionalsTable,
  Services: ServicesTable,
  Storage: StorageTable,

  Checks: ChecksTable,
  Cards: CardsTable,
  FinancialClients: FinancialClientsTable,
}


export default Tables