import React, { useEffect, useState } from 'react'
import * as S from './styles'
import { Professional, Professionals, filterCategories } from '../../_falseData/professionals'

import SideBar from '../../components/SideBar'
import Button from '../../components/Buttons'
import { FilterBy } from '../../components/Selects'
import { Option as OptionType } from '../../components/Selects/FilterBy'
import Table from '../../components/Table'

import { ReactComponent as AddIcon } from "../../assets/icons/add.svg"
import { ReactComponent as ExpandIcon } from "../../assets/icons/expand.svg"
import { ModalTypes } from '../../components/_modal'


const ProfessionalsPage = () => {

  const [filterType, setFilterType] = useState(filterCategories[0])
  const [profesionalsList, setProfessionalsList] = useState<any[]>([])

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
    const excludeIdFromProfessional = (p: Professional) => ({
      photo: p.img,
      name: p.name,
      phone: p.phone,
      address: p.address,
      birthDate: p.birthDate,
      status: p.status,
    })

    let cNewList: any[] = []

    Professionals.forEach(p => {
      const prof = excludeIdFromProfessional(p)
      cNewList.push(prof)
    })

    setProfessionalsList(cNewList)
  }, [])


  return (
    <S.Page>
      <SideBar activePage={'/professionals'} />
      <S.Main>
        <S.Header>
          <S.PageTitle>Profissionais</S.PageTitle>
          <Button
            type='model1'
            Icon={AddIcon}
            title='Novo profissional'
            onClick={() => handleToggleModal('newbook')}
          />
        </S.Header>
        <S.FilterArea>
          <FilterBy
            options={filterCategories.filter(i => i.originalLabel !== 'img')}
            activeFilter={filterType}
            onChange={(e) => handleChangeFilter(e)}
          />
        </S.FilterArea>
        <S.TableArea>
          <Table.Professionals
            columns={filterCategories}
            Icons={
              <>
                <ExpandIcon width={24} />
              </>
            }
            items={profesionalsList}
          />
        </S.TableArea>
      </S.Main>
    </S.Page>
  )

}


export default ProfessionalsPage