import React, { useEffect, useState } from 'react'
import * as S from './styles'
import { useStore } from '../../../../zustand/store'
import { Clients, filterCategories } from '../../_falseData/clients'

import SideBar from '../../components/SideBar'
import Button from '../../components/Buttons'
import { FilterBy } from '../../components/Selects'
import { Option as OptionType } from '../../components/FilterBy'
import Table from '../../components/Table'

import { ReactComponent as AddIcon } from "../../assets/icons/add.svg"


const ClientsPage = () => {

  const [filterType, setFilterType] = useState(filterCategories[0])

  const handleChangeFilter = (op: OptionType) => {
    setFilterType(op)
  }

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
        <Table />
      </S.Main>
    </S.Page>
  )

}


export default ClientsPage