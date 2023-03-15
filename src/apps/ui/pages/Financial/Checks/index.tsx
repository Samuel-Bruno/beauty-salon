import React, { useEffect, useState } from 'react'
import { Check, Checks as Cks, filterCategories } from '../../../_falseData/financial.checks'
import * as S from './styles'

import { FilterArea } from '../styles'
import { DefaultSelect } from '../../../components/Selects'
import Table from '../../../components/Table'

import { ReactComponent as ArrowIcon } from "../../../assets/icons/arrow.svg"
import { ReactComponent as ExpandIcon } from "../../../assets/icons/expand.svg"


const Checks = () => {

  const [showingFilter, setShowingFilter] = useState(filterCategories.showing[0])
  const [ordersFilter, setOrdersFilter] = useState(filterCategories.orders[0])
  const [lastsFilter, setLastsFilter] = useState(filterCategories.lasts[0])

  const [checksList, setChecksList] = useState<any[]>([])

  useEffect(() => {
    const excludeIdFromClient = (c: Check) => ({
      issuer: c.issuer,
      value: c.value,
      lauch: c.lauch,
      paydue: c.paydue,
      bank: c.bank,
      number: c.number,
    })

    let cNewList: any[] = []

    Cks.forEach(c => {
      const ck = excludeIdFromClient(c)
      cNewList.push(ck)
    })
    setChecksList(cNewList)
  }, [])


  return (
    <>
      <S.Header>
        <S.PageTitle>
          <h1>Financeiro</h1>
          <ArrowIcon width={24} />
          <span>Cheques</span>
        </S.PageTitle>
      </S.Header>
      <FilterArea>
        <DefaultSelect
          title={'Exibir'}
          options={filterCategories.showing}
          activeFilter={showingFilter}
          onChange={(value) => setShowingFilter(value)}
        />
        <DefaultSelect
          title={'Ordenar por'}
          options={filterCategories.orders}
          activeFilter={ordersFilter}
          onChange={(value) => setOrdersFilter(value)}
        />
        <DefaultSelect
          title={'Nos últimos'}
          options={filterCategories.lasts}
          activeFilter={lastsFilter}
          onChange={(value) => setLastsFilter(value)}
        />
      </FilterArea>
      <S.TableArea>
        <Table.Checks
          columns={filterCategories.orders}
          items={checksList}
          Icons={
            <>
              <ExpandIcon width={24} />
            </>
          }
        />
      </S.TableArea>
    </>
  )

}


export default Checks