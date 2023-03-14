import React, { useEffect, useState } from 'react'
import * as S from './styles'
import { useStore } from '../../../../zustand/store'
import { Client, Clients, filterCategories } from '../../_falseData/clients'

import SideBar from '../../components/SideBar'
import Button from '../../components/Buttons'
import { FilterBy } from '../../components/Selects'
import { Option as OptionType } from '../../components/FilterBy'
import Table from '../../components/Table'

import { ReactComponent as AddIcon } from "../../assets/icons/add.svg"
import { ReactComponent as ExpandIcon } from "../../assets/icons/expand.svg"


const ClientsPage = () => {

  const [filterType, setFilterType] = useState(filterCategories[0])
  const [clientsList, setClientsList] = useState<any[]>([])

  const handleChangeFilter = (op: OptionType) => {
    setFilterType(op)
  }

  useEffect(() => {
    const excludeIdFromClient = (c: Client) => ({
      name: c.name,
      phone: c.phone,
      telephone: c.telephone,
      address: c.address,
      birthDate: c.birthDate,
    })

    let cNewList: any[] = []

    Clients.forEach(cl => {
      const client = excludeIdFromClient(cl)
      cNewList.push(client)
    })
    setClientsList(cNewList)
  }, [])


  return (
    <S.Page>
      <SideBar activePage={'clients'} />
      <S.Main>
        <S.Header>
          <S.PageTitle>Clientes</S.PageTitle>
          <Button type='model1' icon={AddIcon} title='Novo cliente' />
        </S.Header>
        <S.FilterArea>
          <FilterBy
            options={filterCategories}
            activeFilter={filterType}
            onChange={(e) => handleChangeFilter(e)}
          />
        </S.FilterArea>
        <S.TableArea>
          <Table.clients
            columns={filterCategories}
            Icons={
              <>
                <ExpandIcon width={24} />
              </>
            }
            items={clientsList}
          />
        </S.TableArea>
      </S.Main>
    </S.Page>
  )

}


export default ClientsPage