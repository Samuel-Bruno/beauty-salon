import React, { useEffect, useState } from 'react'
import * as S from './styles'
import { Service, Services, filterCategories } from '../../_falseData/services'

import SideBar from '../../components/SideBar'
import Button from '../../components/Buttons'
import { FilterBy } from '../../components/Selects'
import { Option as OptionType } from '../../components/FilterBy'
import Table from '../../components/Table'

import { ReactComponent as AddIcon } from "../../assets/icons/add.svg"
import { ReactComponent as EditIcon } from "../../assets/icons/edit.svg"
import { ReactComponent as ExpandIcon } from "../../assets/icons/expand.svg"


const ServicesPage = () => {

  const [filterType, setFilterType] = useState(filterCategories[0])
  const [profesionalsList, setProfessionalsList] = useState<any[]>([])

  const handleChangeFilter = (op: OptionType) => {
    setFilterType(op)
  }

  useEffect(() => {
    const excludeIdFromProfessional = (s: Service) => ({
      title: s.title,
      execution: s.execution,
      price: s.price,
      professionals: s.professionals,
      offering: s.offering,
    })

    let sNewList: any[] = []

    Services.forEach(s => {
      const prof = excludeIdFromProfessional(s)
      sNewList.push(prof)
    })

    setProfessionalsList(sNewList)
  }, [])


  return (
    <S.Page>
      <SideBar activePage={'/services'} />
      <S.Main>
        <S.Header>
          <S.PageTitle>Serviços</S.PageTitle>
          <Button type='model1' icon={AddIcon} title='Novo serviço' />
        </S.Header>
        <S.FilterArea>
          <FilterBy
            options={filterCategories}
            activeFilter={filterType}
            onChange={(e) => handleChangeFilter(e)}
          />
        </S.FilterArea>
        <S.TableArea>
          <Table.services
            columns={filterCategories}
            Icons={
              <>
                <EditIcon width={22} height={22} />
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


export default ServicesPage