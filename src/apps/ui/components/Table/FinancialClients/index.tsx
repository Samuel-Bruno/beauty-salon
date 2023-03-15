import React from 'react'
import * as S from './styles'

import { Option } from '../../Selects/FilterBy';


type Props = {
  columns: Option[];
  items: any[];
  Icons: boolean | React.ReactElement;
}

const FinancialClientsTable = ({ columns, items, Icons }: Props) => {


  const getIconsQt = () => {
    const t = Icons as React.ReactElement<any, React.JSXElementConstructor<any>>
    return t.props.children.length
  }


  return (
    <S.Table iconsQnt={getIconsQt()}>
      <S.TableHead>
        <S.TableRow>
          {columns.map((c, k) => (
            <S.TableColumnTitle key={k}>{c.label}</S.TableColumnTitle>
          ))}
          <S.TableColumnTitle align='center'>Ações</S.TableColumnTitle>
        </S.TableRow>
      </S.TableHead>
      <S.TableBody>
        {items.map((i, k) => (
          <S.TableRow key={k}>
            {Object.keys(i).map((content, iid) => (
              <S.TableValue key={iid} isMoney={content === 'credit' || content === 'debit'} isZero={Number(i[content]) === 0} type={content}>
                <div>
                  {
                    (content === 'credit' || content === 'debit') ?
                      `R$ ${Number(i[content]).toFixed(2)}` :
                      i[content]
                  }
                </div>
              </S.TableValue>
            ))}
            <S.TableValue isMoney={false}>
              <div>{Icons}</div>
            </S.TableValue>
          </S.TableRow>
        ))}
      </S.TableBody>
    </S.Table>
  )

}


export default FinancialClientsTable