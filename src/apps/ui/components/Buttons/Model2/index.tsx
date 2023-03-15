import React from 'react'
import * as S from './styles'


type Props = {
  Icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  title: string;
}

const Model2 = ({ Icon, title }: Props) => {


  return (
    <S.Box>
      {Icon && <Icon width={24} />}
      <S.Title>{title}</S.Title>
    </S.Box>
  )

}


export default Model2
