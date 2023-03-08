import React from 'react'
import { root } from '../../assets/styles.main';
import { Professional } from '../../_falseData/professionals';
import BookCard from '../BookCard';
import * as S from './styles'


type Props = {
  professional: Professional;
  bookings: any[];
  baseHeight: number;
}

const ProfessionalScheduleItem = ({ professional, bookings, baseHeight }: Props) => {


  return (
    <S.Box>
      <S.WhoIsArea>
        <S.ImageContainer>
          <img src={professional.img} alt={professional.name} />
        </S.ImageContainer>
        <S.Name>{professional.name}</S.Name>
      </S.WhoIsArea>
      <S.Lines baseHeight={baseHeight} >
        <S.Line bgColor={root.colors.blackScale.p2} />
        <>
          <S.Line />
          <S.Line />
          <S.Line />
          <S.Line />
          <S.Line />
          <S.Line />
          <S.Line />
          <S.Line />
          <S.Line />
          <S.Line />
          <S.Line />
          <S.Line />
          <S.Line />
          <S.Line />
          <S.Line />
          <S.Line />
          <S.Line />
          <S.Line />
          <S.Line />
          <S.Line />
          <S.Line />
          <S.Line />
          <S.Line />
          <S.Line />
          <S.Line />
          <S.Line />
          <S.Line />
          <S.Line />
          <S.Line />
          <S.Line />
          <S.Line />
          <S.Line />
          <S.Line />
          <S.Line />
          <S.Line />
          <S.Line />
          <S.Line />
          <S.Line />
          <S.Line />
          <S.Line />
        </>
        <BookCard
          initialHour={"09:15"}
          finalHour={"10:00"}
          clientName={"Alguém"}
          serviceName={'Algum serviço'}
          baseMargin={baseHeight}
        />
        <BookCard
          initialHour={"10:15"}
          finalHour={"10:30"}
          clientName={"Alguém"}
          serviceName={'Algum serviço'}
          baseMargin={baseHeight}
        />
      </S.Lines>
    </S.Box>
  )

}


export default ProfessionalScheduleItem