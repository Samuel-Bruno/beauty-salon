import React, { useState } from 'react'
import * as S from './styles'

import { ReactComponent as ArrowIcon } from '../../../assets/icons/arrow.svg'

export type Option = {
  id: number;
  label: string;
  originalLabel: string;
}

type Props = {
  title: string;
  options: any[] | null;
  activeFilter: any;
  onChange: (e: any) => void
}

const FormSelect = ({ title, options, activeFilter, onChange }: Props) => {

  const [displayingOptions, setDisplayingOptions] = useState(false)

  const onPick = (op: Option) => {
    setDisplayingOptions(false)
    onChange(op)
  }

  return (
    <S.Box>
      <S.Select>
        <S.SelectMain onClick={() => setDisplayingOptions(!displayingOptions)} >
          <S.SelectTitle>
            {
              activeFilter !== null ?
                (activeFilter.title ?? activeFilter.name) :
                title
            }
          </S.SelectTitle>
          <ArrowIcon width={12} />
        </S.SelectMain>
        <S.OptionsArea display={String(displayingOptions)}>
          {options?.map((op, k) => (
            <S.Option key={k} onClick={() => onPick(op)}>
              {op.title ?? op.name}
            </S.Option>
          ))}
        </S.OptionsArea>
      </S.Select>
    </S.Box>
  )

}


export default FormSelect