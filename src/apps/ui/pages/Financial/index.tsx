import React, { useEffect } from 'react'
import * as S from './styles'

import SideBar from '../../components/SideBar'

import CashBox from './CashBox'
import Checks from './Checks'


type Props = {
  subpage: 'cashbox' | 'cards' | 'checks' | 'clients' | 'bills';
}

const FinancialPage = ({ subpage }: Props) => {

  const getSubPage = (sp: string) => {
    let el;

    switch (sp) {
      case 'cashbox':
        el = <CashBox />
        break;
      case 'cards':
        el = <CashBox />
        break;
      case 'checks':
        el = <Checks />
        break;
      case 'clients':
        el = <CashBox />
        break;
      case 'bills':
        el = <CashBox />
        break;
      default:
        break;
    }

    return el
  }

  useEffect(() => {
  }, [])


  return (
    <S.Page>
      <SideBar activePage={`/financial${subpage !== 'cashbox' ? `/${subpage}` : ''}`} />
      <S.Main>
        {getSubPage(subpage)}
      </S.Main>
    </S.Page>
  )

}


export default FinancialPage