import React, { useEffect, useState } from 'react'
import { Client, Clients as Cls, filterCategories } from '../../../_falseData/financial.clients'
import * as S from './styles'

import { FilterArea } from '../styles'
import { DefaultSelect } from '../../../components/Selects'
import Table from '../../../components/Table'

import { ReactComponent as ArrowIcon } from "../../../assets/icons/arrow.svg"
import Button from '../../../components/Buttons'


const Clients = () => {

  const [filterType, setFilterType] = useState(filterCategories[0])

  const [checksList, setChecksList] = useState<any[]>([])

  useEffect(() => {
    const excludeIdFromClient = (c: Client) => ({
      name: c.name,
      telephone: c.telephone,
      credit: c.credit,
      debit: c.debit,
    })

    let cNewList: any[] = []

    Cls.forEach(c => {
      const cl = excludeIdFromClient(c)
      cNewList.push(cl)
    })
    setChecksList(cNewList)
  }, [])


  return (
    <>
      <S.Header>
        <S.PageTitle>
          <h1>Financeiro</h1>
          <ArrowIcon width={24} />
          <span>Clientes</span>
        </S.PageTitle>
      </S.Header>
      <FilterArea>
        <DefaultSelect
          title={'Exibir'}
          options={filterCategories}
          activeFilter={filterType}
          onChange={(value) => setFilterType(value)}
        />
      </FilterArea>
      <S.TableArea>
        <Table.FinancialClients
          columns={filterCategories}
          items={checksList}
          Icons={
            <>
              <Button
                title='Adicionar crédito'
                type='model3'
              />
              <Button
                title='Negociar dívida'
                type='model4'
              />
            </>
          }
        />
      </S.TableArea>
    </>
  )

}


export default Clients