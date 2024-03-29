import React, { useEffect, useState } from 'react'
import * as S from './styles'
import { StorageType, Storage, filterCategories } from '../../_falseData/storage'

import SideBar from '../../components/SideBar'
import Button from '../../components/Buttons'
import { FilterBy } from '../../components/Selects'
import { Option as OptionType } from '../../components/Selects/FilterBy'
import Table from '../../components/Table'

import { ReactComponent as AddIcon } from "../../assets/icons/add.svg"
import { ReactComponent as BuyLogIcon } from "../../assets/icons/buylog.svg"
import { ReactComponent as EditIcon } from "../../assets/icons/edit.svg"
import { ReactComponent as ExpandIcon } from "../../assets/icons/expand.svg"
import { ModalTypes } from '../../components/_modal'


const StoragePage = () => {

  const [filterType, setFilterType] = useState(filterCategories[0])
  const [storageList, setStorageList] = useState<any[]>([])

  const [modalType, setModalType] = useState<null | ModalTypes>(null)
  const [modalShowing, setModalShowing] = useState(false)

  const handleToggleModal = (content: ModalTypes) => {
    setModalType(content)
    setModalShowing(!modalShowing)
  }

  const handleChangeFilter = (op: OptionType) => {
    setFilterType(op)
  }

  useEffect(() => {
    const excludeIdFromProfessional = (s: StorageType) => ({
      name: s.name,
      category: s.category,
      qnt: s.qnt,
      price: s.price,
      totalPrice: s.totalPrice,
    })

    let sNewList: any[] = []

    Storage.forEach(s => {
      const stg = excludeIdFromProfessional(s)
      sNewList.push(stg)
    })

    setStorageList(sNewList)
  }, [])


  return (
    <S.Page>
      <SideBar activePage={'/storage'} />
      <S.Main>
        <S.Header>
          <S.PageTitle>Estoque</S.PageTitle>
          <S.BtnsTopArea>
            <Button
              type='model1'
              Icon={AddIcon}
              title='Cadastrar produto'
              onClick={()=>handleToggleModal('newbook')}
              />
            <Button
              type='model1'
              Icon={BuyLogIcon}
              title='Registrar compra'
              onClick={()=>handleToggleModal('newbook')}
              />
          </S.BtnsTopArea>
        </S.Header>
        <S.FilterArea>
          <FilterBy
            options={filterCategories}
            activeFilter={filterType}
            onChange={(e) => handleChangeFilter(e)}
          />
        </S.FilterArea>
        <S.TableArea>
          <Table.Storage
            columns={filterCategories}
            Icons={
              <>
                <EditIcon width={22} height={22} />
                <ExpandIcon width={24} />
              </>
            }
            items={storageList}
          />
        </S.TableArea>
      </S.Main>
    </S.Page>
  )

}


export default StoragePage