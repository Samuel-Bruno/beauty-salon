import React from 'react'
import * as S from './styles'

import SideBar from '../../components/SideBar'
import ProfessionalScheduleItem from '../../components/ProfessionalScheduleItem'
import Button from '../../components/Buttons'

import { ReactComponent as AddIcon } from "../../assets/icons/add.svg"
import { ReactComponent as ArrowIcon } from "../../assets/icons/arrow.svg"
import { Professionals as professionals } from '../../_falseData/professionals'
import { useStore } from '../../../../zustand/store'


const SchedulingPage = () => {

  const bookings: any[] = []

  const baseHeight = useStore(state => state.system.baseScheduleLineHeight)


  return (
    <S.Page>
      <SideBar />
      <S.Main>
        <S.PageTitle>Agenda do dia</S.PageTitle>
        <S.UpperOptions>
          <S.DateArea>
            <ArrowIcon width={18} style={{ transform: 'rotate(180deg)' }} />
            <ArrowIcon width={18} />
            <S.DateText>Ter, 07/02/2023</S.DateText>
          </S.DateArea>
          <Button type="model1" icon={AddIcon} title="Agendar" />
        </S.UpperOptions>

        <S.ScheduleArea>
          <S.HoursLabels baseHeight={baseHeight}>
            <S.HourLabel>08:00</S.HourLabel>
            <S.HourLabel>09:00</S.HourLabel>
            <S.HourLabel>10:00</S.HourLabel>
            <S.HourLabel>11:00</S.HourLabel>
            <S.HourLabel>12:00</S.HourLabel>
            <S.HourLabel>13:00</S.HourLabel>
            <S.HourLabel>14:00</S.HourLabel>
            <S.HourLabel>15:00</S.HourLabel>
            <S.HourLabel>16:00</S.HourLabel>
            <S.HourLabel>17:00</S.HourLabel>
            <S.HourLabel>18:00</S.HourLabel>
          </S.HoursLabels>
          <S.BookingsArea>
            {professionals.map((p, k) => (
              <ProfessionalScheduleItem
                professional={p}
                key={k}
                bookings={bookings.filter(b => b.professionalId === p.id)}
                baseHeight={baseHeight}
              />
            ))}
          </S.BookingsArea>
        </S.ScheduleArea>
      </S.Main>
    </S.Page>
  )

}


export default SchedulingPage