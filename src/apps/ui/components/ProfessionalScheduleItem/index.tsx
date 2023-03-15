import React from 'react'
import { root } from '../../assets/styles.main';
import { Professional } from '../../_falseData/professionals';
import * as S from './styles'

import BookCard from '../BookCard';


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
        {bookings.map((b, k) => (
          <BookCard
            key={k}
            initialHour={b.initialHour}
            finalHour={b.finalHour}
            clientName={b.clientName}
            serviceName={b.serviceName}
            baseMargin={baseHeight}
          />
        ))}
      </S.Lines>
    </S.Box>
  )

}


export default ProfessionalScheduleItem