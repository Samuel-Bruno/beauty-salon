import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import * as S from './styles'


type Props = {
  linkTo: string;
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  text: string;
  type?: 'model1' | 'model2';
  activePage: string;
}

const MenuItem = ({ linkTo, Icon, text, type = 'model1', activePage }: Props) => {


  return type === 'model1' ? (
    <S.Box active={activePage === linkTo}>
      <Link to={linkTo}>
        <Icon width={16} />
        <S.Text>{text}</S.Text>
      </Link>
    </S.Box>
  ) : (
    <S.Box active={activePage === linkTo} modeltwo={true}>
      <S.UpperArea>
        <Link to={linkTo}>
          <Icon width={16} />
          <S.Text>{text}</S.Text>
        </Link>
      </S.UpperArea>
      <S.SubLinks>
        <S.FinancialLink active={activePage === linkTo}>
          <Link to={'financial'}>Caixa</Link>
        </S.FinancialLink>
        <S.FinancialLink active={activePage === 'financial/cards'}>
          <Link to={'financial/cards'}>Cartões</Link>
        </S.FinancialLink>
        <S.FinancialLink active={activePage === 'financial/checks'}>
          <Link to={'financial/checks'}>Checks</Link>
        </S.FinancialLink>
        <S.FinancialLink active={activePage === 'financial/clients'}>
          <Link to={'financial/clients'}>Clients</Link>
        </S.FinancialLink>
        <S.FinancialLink active={activePage === 'financial/bills'}>
          <Link to={'financial/bills'}>Contas e despesas</Link>
        </S.FinancialLink>
      </S.SubLinks>
    </S.Box>
  )

}


export default MenuItem