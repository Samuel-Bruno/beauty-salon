import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import * as S from './styles'


type Props = {
  linkTo: string;
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  text: string;
}

const MenuItem = ({ linkTo, Icon, text }: Props) => {

  const [active, setActive] = useState(true);


  return (
    <S.Box active={active}>
      <Link to={linkTo}>
        <Icon width={16} />
        <S.Text>{text}</S.Text>
      </Link>
    </S.Box>
  )

}


export default MenuItem