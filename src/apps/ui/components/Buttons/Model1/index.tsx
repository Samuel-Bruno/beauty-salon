import React from 'react'
import * as S from './styles'


type Props = {
  Icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  title: string;
  onClickAction: () => void;
}

const Model1 = ({ Icon, title, onClickAction }: Props) => {


  return (
    <S.Box onClick={onClickAction}>
      {Icon && <Icon width={24} />}
      <S.Title>{title}</S.Title>
    </S.Box>
  )

}


export default Model1
