import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useStore } from '../../../../zustand/store';
import * as S from './styles'


type Props = {
  linkTo: string;
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  text: string;
}

const MenuItem = ({ linkTo, Icon, text }: Props) => {

  const sys = useStore(store => store.system)


  return (
    <S.Box active={sys.activePage === linkTo}>
      <Link to={linkTo}>
        <Icon width={16} />
        <S.Text>{text}</S.Text>
      </Link>
    </S.Box>
  )

}


export default MenuItem