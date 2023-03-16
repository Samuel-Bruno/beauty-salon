import React, { useEffect, useState } from 'react'
import { Bill, Bills, filterCategories } from '../../../_falseData/financial.bills'
import * as S from './styles'

import { FilterArea } from '../styles'
import { DefaultSelect } from '../../../components/Selects'
import Table from '../../../components/Table'

import { ReactComponent as ArrowIcon } from "../../../assets/icons/arrow.svg"
import { ReactComponent as ExpandIcon } from "../../../assets/icons/expand.svg"
import DateSelect from '../../../components/Selects/DateSelect'


const DebtsBills = () => {

  const [showingFilter, setShowingFilter] = useState(filterCategories.showing[0])
  const [ordersFilter, setOrdersFilter] = useState(filterCategories.orders[0])

  const [initialDateFilter, setInitialDateFilter] = useState<any>('')
  const [finalDateFilter, setFinalDateFilter] = useState<any>('')

  const [checksList, setChecksList] = useState<any[]>([])

  useEffect(() => {
    const excludeIdFromBill = (b: Bill) => ({
      description: b.description,
      value: b.value,
      purveyor: b.purveyor,
      installment: b.installment,
      paydue: b.paydue,
      settlement: b.settlement,
    })

    let cNewList: any[] = []

    Bills.forEach(b => {
      const bll = excludeIdFromBill(b)
      cNewList.push(bll)
    })
    setChecksList(cNewList)
  }, [])


  return (
    <>
      <S.Header>
        <S.PageTitle>
          <h1>Financeiro</h1>
          <ArrowIcon width={24} />
          <span>Contas e despesas</span>
        </S.PageTitle>
      </S.Header>
      <FilterArea>
        <DefaultSelect
          title={'Exibir'}
          options={filterCategories.showing}
          activeFilter={showingFilter}
          onChange={(value) => setShowingFilter(value)}
        />
        <DateSelect
          title={'Data inicial'}
          selectedDate={initialDateFilter}
          onChange={(value) => setInitialDateFilter(value)}
        />
        <DateSelect
          title={'Data final'}
          selectedDate={finalDateFilter}
          onChange={(value) => setFinalDateFilter(value)}
        />
        <DefaultSelect
          title={'Ordenar por'}
          options={filterCategories.orders}
          activeFilter={ordersFilter}
          onChange={(value) => setShowingFilter(value)}
        />
      </FilterArea>
      <S.TableArea>
        <Table.Bills
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


export default DebtsBills