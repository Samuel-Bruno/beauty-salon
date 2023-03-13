import React from 'react'
import { Option } from '../../FilterBy';
import * as S from './styles'


type Props = {
  columns: Option[];
  items: any[];
  icons: boolean | React.ReactElement;
}

const ProfessionalsTable = ({ columns, items, icons }: Props) => {


  const getIconsQt = () => {
    const t = icons as React.ReactElement<any, React.JSXElementConstructor<any>>
    return t.props.children.length
  }

  return (
    <S.Table iconsQnt={getIconsQt()}>
      <S.TableHead>
        <S.TableRow>
          {columns.map((c, k) => (
            <S.TableColumnTitle key={k}>{c.label}</S.TableColumnTitle>
          ))}
          {icons ? <S.Filler /> : false}
        </S.TableRow>
      </S.TableHead>
      <S.TableBody>
        {items.map((i, k) => (
          <S.TableRow key={k}>
            {Object.keys(i).map((content, iid) => (
              <S.TableValue key={iid} isPhoto={true}>
                {content == 'photo' ?
                  <S.PhotoWrapper>
                    <S.Photo src={i[content]} />
                  </S.PhotoWrapper> :
                  (content == 'status') ? (
                    <S.Status status={i[content]}>
                      {i[content] === true ? 'Trabalhando' : 'De Folga'}
                    </S.Status>
                  ) :
                    <div>{i[content]}</div>
                }
              </S.TableValue>
            ))}

            {icons ? <S.IconsField>{icons}</S.IconsField> : false}
          </S.TableRow>
        ))}
      </S.TableBody>
    </S.Table>
  )

}


export default ProfessionalsTable