import React from 'react'
import * as S from './styles'

import { Option } from '../../Selects/FilterBy';
import Toggler from '../../Toggler';


type Props = {
  columns: Option[];
  items: any[];
  Icons: boolean | React.ReactElement;
}

const ServicesTable = ({ columns, items, Icons }: Props) => {

  const getIconsQt = () => {
    const t = Icons as React.ReactElement<any, React.JSXElementConstructor<any>>
    return t.props.children.length
  }

  const parseNumberToTime = (n: string) => {
    let m = Number(n)

    let [hours, minutes, final] = [0, 0, '']

    if (m > 60) {
      let div = m / 60
      hours = Math.floor(div)
      minutes = Math.floor((div - hours) * 60)
    } else if (m < 60) {
      minutes = m
    }

    if (hours > 0 && minutes > 0) {
      final += `${hours}:${minutes}`.padStart(2, '0')
      final += ` hora${hours > 1 ? 's' : ''}`
    } else if (hours > 0) {
      final += ` hora${hours > 1 ? 's' : ''}`
    } else if (minutes < 60) {
      final += `${minutes} minuto${minutes > 1 ? 's' : ''}`
    }

    return final
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
              <S.TableValue key={iid}>
                <div>
                  {content === 'execution' ?
                    parseNumberToTime(i[content]) :
                    (
                      content === 'price' ?
                        `R$ ${String(i[content]).replace('.', ',')}` :
                        (
                          content === 'offering' ?
                            <Toggler active={Boolean(i[content])} /> :
                            i[content]
                        )
                    )

                  }
                </div>
              </S.TableValue>
            ))}

            {Icons ?
              <S.TableValue>
                <S.IconsField>{Icons}</S.IconsField>
              </S.TableValue>
              : false}
          </S.TableRow>
        ))}
      </S.TableBody>
    </S.Table>
  )

}


export default ServicesTable