import React from 'react'
import * as S from './styles'


type Props = {
  Icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  title: string;
  onClickAction: () => void;
}

const Model5 = ({ Icon, title, onClickAction }: Props) => {


  return (
    <S.Box onClick={onClickAction}>
      <S.Title>{title}</S.Title>
      {Icon && <Icon width={18} />}
    </S.Box>
  )

}


export default Model5
