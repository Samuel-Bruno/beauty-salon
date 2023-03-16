import React from 'react'
import { Option } from '../../Selects/FilterBy';
import * as S from './styles'


type Props = {
  columns: Option[];
  items: any[];
  Icons: boolean | React.ReactElement;
}

const DebtsBillsTable = ({ columns, items, Icons }: Props) => {

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
          {Icons ? <S.Filler iconsQnt={getIconsQt()} /> : false}
        </S.TableRow>
      </S.TableHead>
      <S.TableBody>
        {items.map((i, k) => (
          <S.TableRow key={k}>
            {Object.keys(i).map((content, iid) => (
              <S.TableValue key={iid} isMoney={content === 'value'} isZero={Number(i[content]) === 0}>
                <div>
                  {
                    content === 'value' ?
                      `R$ ${Number(i[content]).toFixed(2)}` :
                      (
                        content === 'pruveyor' ||
                        content === 'installment' ||
                        content === 'settlement'
                      ) ?
                        (i[content] === null ? '-' : i[content]) :
                        i[content] === null ? '-' : i[content]
                  }
                </div>
              </S.TableValue>
            ))}

            {Icons ? <S.IconsField>{Icons}</S.IconsField> : false}
          </S.TableRow>
        ))}
      </S.TableBody>
    </S.Table>
  )

}


export default DebtsBillsTable