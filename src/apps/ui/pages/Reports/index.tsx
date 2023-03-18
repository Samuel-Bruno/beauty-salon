import React, { ReactElement, useCallback, useEffect, useRef, useState } from 'react'
import * as S from './styles'
import { filterCategories } from '../../_falseData/professionals'

import SideBar from '../../components/SideBar'
import Button from '../../components/Buttons'
import { FilterBy } from '../../components/Selects'
import { Option as OptionType } from '../../components/Selects/FilterBy'
import ApexCharts, { ApexOptions } from 'apexcharts'

import { ReactComponent as AddIcon } from "../../assets/icons/add.svg"
import { ModalTypes } from '../../components/_modal'


const Chart = (el: Element) => {

  const options: ApexOptions = {
    chart: {
      type: 'donut',
      height: '100%',
      width: '60%',
    },
    legend: {
      position: 'right',
      floating: true
    },
    series: [10, 20, 30, 40],
    labels: ['Data 1', 'Data 2', 'Data 3', 'Data 4'],
    plotOptions: {
      pie: {
        customScale: 1,
        donut: {
          size: '70%',
        },
      },
    },
  }

  return new ApexCharts(el, options)
}


const ReportsPage = () => {

  const [modalType, setModalType] = useState<null | ModalTypes>(null)
  const [modalShowing, setModalShowing] = useState(false)

  const chartArea1 = useRef(null)

  const handleToggleModal = (content: ModalTypes) => {
    setModalType(content)
    setModalShowing(!modalShowing)
  }


  useEffect(() => {
    const cArea = document.querySelector('#chartArea1') as Element
    cArea.innerHTML = ''
    Chart(cArea).render()
  }, [])


  return (
    <S.Page>
      <SideBar activePage={'/reports'} />
      <S.Main>
        <S.Header>
          <S.PageTitle>Relatórios</S.PageTitle>
        </S.Header>
        <S.ChartsArea>
          <div ref={chartArea1} id={'chartArea1'}>
          </div>
        </S.ChartsArea>
      </S.Main>
    </S.Page>
  )

}


export default ReportsPage