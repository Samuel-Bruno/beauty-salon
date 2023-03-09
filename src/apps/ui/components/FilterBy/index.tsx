import React, { useState } from 'react'
import * as S from './styles'

import { ReactComponent as ArrowIcon } from '../../assets/icons/arrow.svg'

export type Option = {
  id: number;
  label: string;
}

type Props = {
  options: Option[];
  activeFilter: Option;
  onChange: (e: any) => void
}

const FilterBy = ({ options, activeFilter, onChange }: Props) => {

  const [displayingOptions, setDisplayingOptions] = useState(false)

  const onPick = (op: Option) => {
    setDisplayingOptions(false)
    onChange(op)
  }

  return (
    <S.Box>
      <S.FilterTitle>Filtrar por:</S.FilterTitle>
      <S.Select>
        <S.SelectMain onClick={() => setDisplayingOptions(!displayingOptions)} >
          <S.SelectTitle>{activeFilter.label}</S.SelectTitle>
          <ArrowIcon width={12} />
        </S.SelectMain>
        <S.OptionsArea display={displayingOptions}>
          {options.map((op, k) => (
            <S.Option key={k} onClick={() => onPick(op)}>{op.label}</S.Option>
          ))}
        </S.OptionsArea>
      </S.Select>
    </S.Box>
  )

}


export default FilterBy