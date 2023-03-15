import React from 'react'
import * as S from './styles'

import { Link } from 'react-router-dom';


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
    <S.Box active={
      activePage === '/financial' ||
      activePage === '/financial/cards' ||
      activePage === '/financial/checks' ||
      activePage === '/financial/clients' ||
      activePage === '/financial/bills'
    } modeltwo={true}>
      <S.UpperArea>
        <Link to={'/financial'}>
          <Icon width={16} />
          <S.Text>{text}</S.Text>
        </Link>
      </S.UpperArea>
      <S.SubLinks>
        <S.FinancialLink active={activePage === '/financial'}>
          <Link to={'/financial'}>Caixa</Link>
        </S.FinancialLink>
        <S.FinancialLink active={activePage === '/financial/cards'}>
          <Link to={'/financial/cards'}>Cartões</Link>
        </S.FinancialLink>
        <S.FinancialLink active={activePage === '/financial/checks'}>
          <Link to={'/financial/checks'}>Cheques</Link>
        </S.FinancialLink>
        <S.FinancialLink active={activePage === '/financial/clients'}>
          <Link to={'/financial/clients'}>Clientes</Link>
        </S.FinancialLink>
        <S.FinancialLink active={activePage === '/financial/bills'}>
          <Link to={'/financial/bills'}>Contas e despesas</Link>
        </S.FinancialLink>
      </S.SubLinks>
    </S.Box>
  )

}


export default MenuItem