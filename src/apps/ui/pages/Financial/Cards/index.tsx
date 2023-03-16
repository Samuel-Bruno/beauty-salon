import React, { useEffect, useState } from 'react'
import { Card, Cards, filterCategories } from '../../../_falseData/financial.cards'
import * as S from './styles'

import { FilterArea } from '../styles'
import { DefaultSelect } from '../../../components/Selects'
import Table from '../../../components/Table'

import { ReactComponent as AddIcon } from "../../../assets/icons/add.svg"
import { ReactComponent as ExtractIcon } from "../../../assets/icons/extract.svg"
import { ReactComponent as ArrowIcon } from "../../../assets/icons/arrow.svg"
import { ReactComponent as ExpandIcon } from "../../../assets/icons/expand.svg"
import Button from '../../../components/Buttons'
import { ModalTypes } from '../../../components/_modal'


const Checks = () => {

  const [filterType, setFilterType] = useState(filterCategories[0])

  const [checksList, setChecksList] = useState<any[]>([])

  const [modalType, setModalType] = useState<null | ModalTypes>(null)
  const [modalShowing, setModalShowing] = useState(false)

  const handleToggleModal = (content: ModalTypes) => {
    setModalType(content)
    setModalShowing(!modalShowing)
  }

  useEffect(() => {
    const excludeIdFromClient = (c: Card) => ({
      flag: c.flag,
      operations: c.operations,
      debit_tax: c.debit_tax,
      debitTransfer: c.debitTransfer,
      credit_tax_spot: c.credit_tax_spot,
      credit_tax_term: c.credit_tax_term,
      installments: c.installments,
      transfer: c.transfer,
    })

    let cNewList: any[] = []

    Cards.forEach(c => {
      const cd = excludeIdFromClient(c)
      cNewList.push(cd)
    })
    setChecksList(cNewList)
  }, [])


  return (
    <>
      <S.Header>
        <S.PageTitle>
          <h1>Financeiro</h1>
          <ArrowIcon width={24} />
          <span>Cartões</span>
        </S.PageTitle>
        <S.BtnsTopArea>
          <Button type='model1'
            Icon={AddIcon}
            title='Cadastrar cartão'
            onClick={() => handleToggleModal('newbook')}
            />
          <Button type='model1'
            Icon={ExtractIcon}
            title='Extrato dos cartões'
            onClick={() => handleToggleModal('newbook')}
            />
        </S.BtnsTopArea>
      </S.Header>
      <FilterArea>
        <DefaultSelect
          title='Filtrar por'
          options={filterCategories}
          activeFilter={filterType}
          onChange={(value) => setFilterType(value)}
        />
      </FilterArea>
      <S.TableArea>
        <Table.Cards
          columns={filterCategories}
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